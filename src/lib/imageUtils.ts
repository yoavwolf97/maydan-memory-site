import { toast } from 'sonner';

interface ImageResponse {
  url: string;
  name: string;
}

export const FOLDER_PATHS = {
  HERO: 'תמונה ראשית',
  GALLERY: 'תמונות לגלילה',
  PROJECT: 'מבצע במבה וקולה'  // Updated to match the actual folder name
} as const;

export async function getImagesFromFolder(folderPath: string): Promise<ImageResponse[]> {
  try {
    const response = await fetch(`/api/images/${encodeURIComponent(folderPath)}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const images = await response.json();
    return images;
  } catch (error) {
    console.error(`Error fetching images from ${folderPath}:`, error);
    toast.error(`Failed to load images from ${folderPath}`);
    return [];
  }
}

export async function deleteOldUploads(): Promise<boolean> {
  try {
    const response = await fetch('/api/delete-folder/lovable-uploads', {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    toast.success('Successfully deleted old images');
    return true;
  } catch (error) {
    console.error('Error deleting old images:', error);
    toast.error('Failed to delete old images');
    return false;
  }
}

export async function fetchAllImages() {
  try {
    const [heroImages, galleryImages, projectImages] = await Promise.all([
      getImagesFromFolder(FOLDER_PATHS.HERO),
      getImagesFromFolder(FOLDER_PATHS.GALLERY),
      getImagesFromFolder(FOLDER_PATHS.PROJECT)
    ]);

    if (!heroImages.length) {
      toast.error('No hero image found');
    }

    return {
      heroImage: heroImages[0]?.url,
      galleryImages: galleryImages.map(img => img.url),
      projectImages: projectImages.map(img => img.url)
    };
  } catch (error) {
    console.error('Error fetching all images:', error);
    toast.error('Failed to load some images');
    return {
      heroImage: '',
      galleryImages: [],
      projectImages: []
    };
  }
} 