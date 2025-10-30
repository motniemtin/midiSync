
const fetchUser = async (id) => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  const response = await fetch(`https://server.pianosync.com/user/index?id=${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) return null;
  const data = await response.json();
  return data?.user || null;
};
export const useUser = (id) => {
  const queryClient = useQueryClient();
  const { io, connected } = useSocketContext();

  // ⚡ Fetch dữ liệu lần đầu
  const query = useQuery({
    queryKey: ["user", id],
    queryFn: () => fetchUser(id),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false
  });

  // ⚡ Lắng nghe socket realtime
  useEffect(() => {
    if (!io || !connected || !id) return;

    const eventName = `user/${id}/update`;

    console.log("📡 Subscribing to", eventName);

    io.socket.on(eventName, (updatedUser) => {
      console.log("🟢 User updated via socket:", updatedUser);

      // ✅ Cập nhật cache React Query (tự động re-render UI)
      queryClient.setQueryData(["user", id], (old) => ({
        ...old,
        ...updatedUser,
      }));
    });

    return () => {
      console.log("❌ Unsubscribing from", eventName);
      io.socket.off(eventName);
    };
  }, [io, connected, id, queryClient]);

  return query;
};