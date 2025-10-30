import { useEffect } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useSocketContext } from '@/hooks/SocketContext';

// Hàm fetch dữ liệu từ API cho danh sách bài hát, tuân thủ chuẩn Sails.js
const fetchSongFind = async (page, limit, where, sort) => {
  const token = localStorage.getItem("token");
  const skip = (page - 1) * limit;

  const params = new URLSearchParams({
    limit: limit,
    skip: skip,
    sort: sort,
    where: JSON.stringify(where || {}),
  });

  const response = await fetch(`https://server.pianosync.com/user/songs?${params.toString()}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const useSongLogin = (page, limit, where, sort) => {
  const queryClient = useQueryClient();
  const { io, connected } = useSocketContext();

  const query = useQuery({
    queryKey: ['songs', page, limit, where, sort], // Key của query
    queryFn: () => fetchSongFind(page, limit, where, sort), // Hàm fetch dữ liệu
    keepPreviousData: true, // Giữ lại dữ liệu cũ khi thay đổi page hoặc limit
    staleTime: 5 * 60 * 1000, // Thời gian cache dữ liệu, ở đây là 5 phút
    onSuccess: (data) => {
      // Sau khi fetch thành công, lưu từng bài hát vào cache theo id
      data?.results?.forEach((song) => {
        queryClient.setQueryData(['song', song.id], song); // Cache từng bài hát theo ID
      });
    },
  });

  // 🎧 Lắng nghe cập nhật realtime từ server
  useEffect(() => {
    if (!io || !connected) return;

    const events = {
      created: 'song/created',
      updated: 'song/updated',
      deleted: 'song/deleted',
    };

    // Khi có bài hát mới hoặc bị xóa, fetch lại danh sách
    const refetchList = () => {
      console.log('🟢 Invalidating current song list due to create/delete event.');
      queryClient.invalidateQueries({ queryKey: query.queryKey });
    };

    // Khi một bài hát được cập nhật, cập nhật cache của bài đó
    const updateSongInList = (updatedSong) => {
      // Chỉ cập nhật cache nếu bài hát đó đã có sẵn trong cache
      // (tức là bài hát thuộc danh sách đang hiển thị)
      if (queryClient.getQueryData(['song', updatedSong.id])) {
        console.log('🟢 Song updated in list via socket:', updatedSong);
        queryClient.setQueryData(['song', updatedSong.id], updatedSong);
      }
    };

    io.socket.on(events.created, refetchList);
    io.socket.on(events.deleted, refetchList);
    io.socket.on(events.updated, updateSongInList);

    return () => {
      io.socket.off(events.created, refetchList);
      io.socket.off(events.deleted, refetchList); io.socket.off(events.updated, updateSongInList);
    };
  }, [io, connected, queryClient, query.queryKey]);
  
  // Trả về dữ liệu theo cấu trúc mong muốn
  return {
    songs: query.data?.results ?? null,
    pagination: query.data?.pagination ?? null,
    isLoading: query.isLoading,
    isError: query.isError,
    refetch: query.refetch,
  };
};
