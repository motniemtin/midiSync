"use client";
import { createContext, useContext, useMemo } from "react";
import { useSocket } from "@/hooks/useSocket";

// 🧩 Tạo context chia sẻ socket toàn app
const SocketContext = createContext({
  io: null,
  connected: false,
});

// 🧱 Provider bọc toàn bộ phần client của app
export function SocketProvider({ children }) {
  // Hook tạo hoặc tái sử dụng socket instance (có cache)
  const { io, connected } = useSocket();

  // ⚡ Dùng useMemo để tránh re-render không cần thiết
  const value = useMemo(() => ({ io, connected }), [io, connected]);

  return (
    <SocketContext.Provider value={value}>
      {children}
    </SocketContext.Provider>
  );
}

// 🧩 Hook tiện dụng để dùng socket ở mọi nơi
export const useSocketContext = () => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error("useSocketContext must be used within a SocketProvider");
  }
  return context;
};
