"use client";
import React, { useState, useRef, useCallback } from "react";
import dynamic from 'next/dynamic';
import { useMidiBle } from "@/hooks/useMidiBle";

// Dynamically import PianoTutorial to ensure it's only rendered on the client side
const PianoTutorial = dynamic(() => import('./PianoTutorial'), { ssr: false });

const MidiPianoScanner = () => {
  const midiMessageCallbackRef = useRef<(data: Uint8Array) => void>();

  const handleMidiMessage = useCallback((data: Uint8Array) => {
    if (midiMessageCallbackRef.current) {
      midiMessageCallbackRef.current(data);
    }
  }, []);

  const {
    scanResults,
    connectedDevice,
    isScanning,
    log,
    startScan,
    connectDevice,
    disconnectDevice,
  } = useMidiBle({ onMidiMessage: handleMidiMessage });

  const registerMidiMessageHandler = useCallback((callback: (data: Uint8Array) => void) => {
    midiMessageCallbackRef.current = callback;
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🎹 Next.js MIDI BLE Scanner</h1>
      <p>
        Trạng thái:{" "}
        <strong>
          {connectedDevice
            ? connectedDevice.name || connectedDevice.deviceId
            : "Chưa kết nối"}
        </strong>
      </p>

      <button
        onClick={startScan}
        disabled={!!connectedDevice || isScanning}
        style={{
          padding: "10px",
          backgroundColor: "lightblue",
          border: "none",
          marginRight: "10px",
        }}
      >
        {isScanning ? "Scanning..." : scanResults.length > 0
          ? `Quét lại (${scanResults.length} found)`
          : "Start Scan for Piano MIDI"}
      </button>

      <button
        onClick={disconnectDevice}
        disabled={!connectedDevice}
        style={{
          padding: "10px",
          backgroundColor: "salmon",
          border: "none",
        }}
      >
        Disconnect
      </button>

      <hr style={{ margin: "20px 0" }} />

      <h2>Tìm thấy ({scanResults.length})</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {scanResults.map((device) => (
          <li key={device.deviceId} style={{ marginBottom: "5px" }}>
            <strong>{device.name || "Unknown Device"}</strong> ({device.deviceId.substring(0, 10)}...)
            <button
              onClick={() => connectDevice(device)}
              disabled={!!connectedDevice}
              style={{ marginLeft: "10px", padding: "5px 10px" }}
            >
              Connect
            </button>
          </li>
        ))}
      </ul>
      </div>    

      <hr style={{ margin: "20px 0" }} />

      <h2>Log</h2>
      <pre
        style={{
          whiteSpace: "pre-wrap",
          backgroundColor: "#eee",
          padding: "10px",
          maxHeight: "300px",
          overflowY: "scroll",
          fontSize: "12px",
        }}
      >
        {log}
      </pre>
    </div >
  );
};

export default MidiPianoScanner;
