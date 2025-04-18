import { toast } from 'sonner';

// Simple type for our images
export type SiteImages = {
  hero: string;
  gallery: string[];
  project: string[];
};

// Single function that returns all our images
export function getSiteImages(): SiteImages {
  return {
    hero: '/תמונה ראשית/FB_IMG_1744902556835.jpg',
    gallery: [
      '/תמונות לגלילה/FB_IMG_1651496832705.jpg',
      '/תמונות לגלילה/IMG-20230715-WA0005.jpg',
      '/תמונות לגלילה/IMG-20230715-WA0002.jpg',
      '/תמונות לגלילה/FB_IMG_1705049089845.jpg',
      '/תמונות לגלילה/FB_IMG_1744902580216.jpg',
      '/תמונות לגלילה/FB_IMG_1516881262509.jpg',
      '/תמונות לגלילה/Screenshot_20231218_004141_Gallery.jpg',
      '/תמונות לגלילה/FB_IMG_1493569203648.jpg',
      '/תמונות לגלילה/Screenshot_20210422-182520_Facebook.jpg',
      '/תמונות לגלילה/FB_IMG_1480537903939.jpg',
      '/תמונות לגלילה/FB_IMG_1744902564105.jpg'
    ],
    project: [
      '/מבצע במבה וקולה/20160317_105237.jpg',
      '/מבצע במבה וקולה/FB_IMG_1744901522102.jpg',
      '/מבצע במבה וקולה/FB_IMG_1458213414817.jpg',
      '/מבצע במבה וקולה/FB_IMG_1744901505081.jpg',
      '/מבצע במבה וקולה/FB_IMG_1458213650574.jpg',
      '/מבצע במבה וקולה/FB_IMG_1458213691073.jpg',
      '/מבצע במבה וקולה/FB_IMG_1458213632826.jpg',
      '/מבצע במבה וקולה/FB_IMG_1458213383790.jpg',
      '/מבצע במבה וקולה/FB_IMG_1744901542562.jpg',
      '/מבצע במבה וקולה/FB_IMG_1458213643552.jpg',
      '/מבצע במבה וקולה/FB_IMG_1744901484952.jpg',
      '/מבצע במבה וקולה/FB_IMG_1458213712268.jpg',
      '/מבצע במבה וקולה/FB_IMG_1458219001406.jpg',
      '/מבצע במבה וקולה/FB_IMG_1458213341726.jpg',
      '/מבצע במבה וקולה/FB_IMG_1458214486457.jpg',
      '/מבצע במבה וקולה/FB_IMG_1458218894939.jpg',
      '/מבצע במבה וקולה/FB_IMG_1458213476975.jpg',
      '/מבצע במבה וקולה/FB_IMG_1458218857191.jpg',
      '/מבצע במבה וקולה/FB_IMG_1458213348773.jpg',
      '/מבצע במבה וקולה/FB_IMG_1744901554386.jpg',
      '/מבצע במבה וקולה/FB_IMG_1458234648348.jpg',
      '/מבצע במבה וקולה/FB_IMG_1458219036960.jpg'
    ]
  };
}

// This function is no longer needed since we're not using a server
export async function deleteOldUploads(): Promise<boolean> {
  return true;
} 