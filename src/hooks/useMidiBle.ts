import { useState, useEffect, useCallback } from "react";
import { Capacitor } from "@capacitor/core";
import { BleClient, Device } from "@capacitor-community/bluetooth-le";

const MIDI_SERVICE_UUID = "03b80e5a-ede8-4b33-a751-6ce34ec4c700";
const MIDI_CHARACTERISTIC_UUID = "7772e5db-3868-4112-a1a9-f2669d106bf3";

interface UseMidiBleOptions {
  onMidiMessage: (data: Uint8Array) => void;
}

export const useMidiBle = ({ onMidiMessage }: UseMidiBleOptions) => {
  const [scanResults, setScanResults] = useState<Device[]>([]);
  const [connectedDevice, setConnectedDevice] = useState<Device | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [log, setLog] = useState("");

  const logMsg = useCallback((msg: string) => {
    setLog((prev) => `${prev}${msg}\n`);
  }, []);

  useEffect(() => {
    const initBle = async () => {
      try {
        if (Capacitor.isNativePlatform()) {
          await BleClient.initialize();
          logMsg("✅ BLE initialized");
        } else {
          logMsg("🌐 Running in browser mode (Web Bluetooth API)");
        }
      } catch (e: any) {
        logMsg(`⚠️ Init error: ${e.message}`);
      }
    };
    initBle();
  }, [logMsg]);

  const startScan = useCallback(async () => {
    if (connectedDevice || isScanning) return;

    setScanResults([]);
    setIsScanning(true);
    logMsg("🔎 Scanning for MIDI devices...");

    try {
      if (Capacitor.isNativePlatform()) {
        await BleClient.requestLEScan(
          { services: [MIDI_SERVICE_UUID] },
          (result) => {
            if (result.device && result.rssi > -90) {
              setScanResults((prev) => {
                if (!prev.find((d) => d.deviceId === result.device.deviceId)) {
                  logMsg(`📡 Found: ${result.device.name || result.device.deviceId}`);
                  return [...prev, result.device];
                }
                return prev;
              });
            }
          }
        );

        setTimeout(async () => {
          await BleClient.stopLEScan();
          setIsScanning(false);
          logMsg("🛑 Scan stopped.");
        }, 5000);
      } else if ("bluetooth" in navigator) {
        const device = await navigator.bluetooth.requestDevice({
          filters: [{ services: [MIDI_SERVICE_UUID] }],
          optionalServices: [MIDI_SERVICE_UUID],
        });

        logMsg(`🎹 Selected device: ${device.name || "Unknown"}`);
        setScanResults([{ deviceId: device.id, name: device.name || "Unknown" } as any]);

        const server = await device.gatt?.connect();
        const service = await server?.getPrimaryService(MIDI_SERVICE_UUID);
        const characteristic = await service?.getCharacteristic(MIDI_CHARACTERISTIC_UUID);

        await characteristic?.startNotifications();
        characteristic?.addEventListener("characteristicvaluechanged", (event) => {
          const value = (event.target as BluetoothRemoteGATTCharacteristic).value;
          if (value) onMidiMessage(new Uint8Array(value.buffer));
        });

        setConnectedDevice({ deviceId: device.id, name: device.name } as any);
        logMsg("✅ Connected via Web Bluetooth!");
      } else {
        logMsg("❌ BLE not supported on this platform.");
      }
    } catch (err: any) {
      logMsg(`⚠️ Scan error: ${err.message}`);
    } finally {
      setIsScanning(false);
    }
  }, [connectedDevice, isScanning, logMsg, onMidiMessage]);

  const connectDevice = useCallback(async (device: Device) => {
    if (!Capacitor.isNativePlatform()) return;
    logMsg(`🔌 Connecting to ${device.name || device.deviceId}...`);
    try {
      await BleClient.connect(device.deviceId, () => disconnectDevice());
      await BleClient.startNotifications(
        device.deviceId,
        MIDI_SERVICE_UUID,
        MIDI_CHARACTERISTIC_UUID,
        (value) => onMidiMessage(new Uint8Array(value.buffer))
      );
      setConnectedDevice(device);
      logMsg(`✅ Connected to ${device.name || device.deviceId}`);
    } catch (e: any) {
      logMsg(`⚠️ Connection error: ${e.message}`);
    }
  }, [logMsg, onMidiMessage]);

  const disconnectDevice = useCallback(async () => {
    if (connectedDevice) {
      logMsg(`🔌 Disconnecting from ${connectedDevice.name || connectedDevice.deviceId}...`);
      try {
        if (Capacitor.isNativePlatform()) {
          await BleClient.disconnect(connectedDevice.deviceId);
        } else if ("bluetooth" in navigator && (navigator as any).bluetooth?.getDevices) {
            const devices = await (navigator as any).bluetooth.getDevices();
            for (const d of devices) {
              if (d.id === connectedDevice.deviceId && d.gatt?.connected) {
                await d.gatt.disconnect();
              }
            }
        }
      } catch (e: any) {
        logMsg(`⚠️ Disconnect error: ${e.message}`);
      } finally {
        setConnectedDevice(null);
        logMsg("🔌 Disconnected.");
      }
    }
  }, [connectedDevice, logMsg]);

  return { scanResults, connectedDevice, isScanning, log, startScan, connectDevice, disconnectDevice };
};