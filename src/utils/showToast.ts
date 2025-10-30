import { Capacitor } from '@capacitor/core';
import { Toast } from '@capacitor/toast';
import { toast } from 'react-toastify';

/**
 * Hiển thị Toast trên Android/iOS, hoặc fallback alert/console trên web.
 */
export async function showToast(message: string, type: 'success' | 'error' | 'info' = 'info') {
  if (Capacitor.getPlatform() === 'web') {
    // Khi test trong Next.js (localhost, trình duyệt)
    switch (type) {
      case 'success':
        await toast.success(message);
        break;
      case 'error':
        await toast.error(message);
        break;
      default:
        await toast.info(message);
    }
  } else {
    // Khi chạy trên thiết bị thật (Android/iOS)
    await Toast.show({ text: message });
  }
}
