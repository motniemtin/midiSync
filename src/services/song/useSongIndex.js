"use client";
import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSocketContext } from "@/hooks/SocketContext";

const fetchSongIndex = async (id) => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  const response = await fetch(`https://server.pianosync.com/song/index?id=${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) return null;
  const data = await response.json();
  return data?.song || null;
};

export const useSongIndex = (id) => {
  const queryClient = useQueryClient();
  const { io, connected } = useSocketContext();

  const query = useQuery({
    queryKey: ["song", id],
    queryFn: () => fetchSongIndex(id),
    enabled: !!id,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  // 🎧 Lắng nghe cập nhật realtime từ server
  useEffect(() => {
    if (!io || !connected) return;
    if (!query.data) return;   
    
    const eventName = `song/${id}/update`;
    console.log("📡 Subscribing to", eventName);
    io.socket.on(eventName, (updatedSong) => {
      // ✅ Cập nhật cache React Query
      queryClient.setQueryData(["song", id], (old) => ({
        ...old,
        ...updatedSong,
      }));
    });

    return () => {
      console.log("❌ Unsubscribing from", eventName);
      io.socket.off(eventName);
    };
  }, [io, connected, queryClient, id, query.data]);

  return {
    song: query.data ?? null,
    isLoading: query.isLoading,
    isError: query.isError,
    refetch: query.refetch,
  };
};
