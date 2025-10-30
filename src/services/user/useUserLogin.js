"use client";
import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSocketContext } from "@/hooks/SocketContext";

const fetchUserLogin = async () => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  const response = await fetch(`https://server.pianosync.com/user/index`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) return null;
  const data = await response.json();
  return data?.user || null;
};

export const useUserLogin = () => {
  const queryClient = useQueryClient();
  const { io, connected } = useSocketContext();

  const query = useQuery({
    queryKey: ["user", "login"],
    queryFn: fetchUserLogin,
    enabled: true,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  // 🎧 Lắng nghe cập nhật realtime từ server
  useEffect(() => {
    if (!io || !connected) return;
    if (!query.data) return;
    const eventName = "user/" + query.data.id +  "/update"; // 👈 server emit event này khi user update
    console.log("📡 Subscribing to", eventName);

    io.socket.on(eventName, (updatedUser) => {
      console.log("🟢 User login updated:", updatedUser);

      // ✅ Cập nhật cache React Query
      queryClient.setQueryData(["user", "login"], (old) => ({
        ...old,
        ...updatedUser,
      }));
    });

    return () => {
      console.log("❌ Unsubscribing from", eventName);
      io.socket.off(eventName);
    };
  }, [io, connected, queryClient]);

  return {
    user: query.data ?? null,
    isLoading: query.isLoading,
    isError: query.isError,
    refetch: query.refetch,
  };
};
