"use client";
import { useEffect, useRef, useState } from "react";

export function useSocket() {
  const ioRef = useRef(null);
  const [connected, setConnected] = useState(false);
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (hasInitialized.current) return;
    hasInitialized.current = true;

    if (typeof window === "undefined") return;

    if (window.__sailsIO) {
      console.log("♻️ Using existing sails.io instance");
      ioRef.current = window.__sailsIO;
      setConnected(window.__sailsIO.socket.connected);
      return;
    }

    console.log("🆕 Creating new sails.io instance");
    const sailsIOClient = require("sails.io.js");
    const socketIOClient = require("socket.io-client");
    const ioSocket = sailsIOClient(socketIOClient);

    ioSocket.sails.url = "https://server.pianosync.com";
    ioSocket.sails.transports = ["websocket"];
    ioSocket.sails.reconnection = true;
    ioSocket.sails.environment = 'production';

    const token = localStorage.getItem("token");
    if (token) ioSocket.sails.headers = { Authorization: `Bearer ${token}` };

    ioSocket.socket.on("connect", () => {
      console.log("✅ Connected to Sails");
      setConnected(true);
    });

    ioSocket.socket.on("disconnect", () => {
      console.log("❌ Disconnected");
      setConnected(false);
    });

    ioRef.current = ioSocket;
    window.__sailsIO = ioSocket;
  }, []);

  return { io: ioRef.current, connected };
}
