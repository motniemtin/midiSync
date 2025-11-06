"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ReactQueryProvider({ children }: { children: React.ReactNode }) {
  // tạo 1 instance QueryClient, nhớ không tạo lại mỗi lần render
  const [queryClient] = useState(() => new QueryClient());
  const pathname = usePathname();
  useEffect(() => {
    if (!pathname) return;
    if (!queryClient) return;
    console.log("📍 Route changed:", pathname);
    // ⚡ Khi route đổi → refetch tất cả query đang active
    queryClient.refetchQueries({ type: "active" });

  }, [pathname, queryClient]);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} /> 
    </QueryClientProvider>
  );
}
