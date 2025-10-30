import { useQuery, useQueryClient } from '@tanstack/react-query';

// Hàm fetch dữ liệu từ API cho danh sách bài hát
const fetchUsers = async (page, where, limit) => {
  const token = localStorage.getItem("token"); 
  const response = await fetch(`https://server.pianosync.com/user/find?page=${page}&where=${where}&limit=${limit}`, {
    headers: {
      Authorization: `Bearer ${token}`, // 👈 Thêm token nếu cần xác thực
    },
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const useUsers = (page, where, limit) => {
  const queryClient = useQueryClient();

  return useQuery(
    ['songs', page, where, limit], // Key của query
    () => fetchUsers(page, where, limit), // Hàm fetch dữ liệu
    {
      keepPreviousData: true, // Giữ lại dữ liệu cũ khi thay đổi page hoặc limit
      staleTime: 5 * 60 * 1000, // Thời gian cache dữ liệu, ở đây là 5 phút
      onSuccess: (data) => {
        // Sau khi fetch thành công, lưu từng bài hát vào cache theo id
        data.forEach((song) => {
          queryClient.setQueryData(['song', song.id], song); // Cache từng bài hát theo ID
        });
      },
    }
  );
};
