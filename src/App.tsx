import { useEffect, useState } from 'react';
import { Toaster, toast } from 'sonner';
import './App.css';
import ImageGallery from './components/ImageGallery';
import BambaGallery from './components/BambaGallery';
import { ErrorBoundary } from './components/ErrorBoundary';
import { fetchAllImages, deleteOldUploads } from './lib/imageUtils';

interface Images {
  heroImage: string;
  galleryImages: string[];
  projectImages: string[];
}

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-memorial-cream">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-memorial-gold"></div>
    </div>
  );
}

function ErrorMessage({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-memorial-cream">
      <p className="text-xl text-red-500 mb-4">Failed to load images</p>
      <button
        onClick={onRetry}
        className="px-4 py-2 bg-memorial-gold text-white rounded hover:bg-memorial-gold/90 transition-colors"
      >
        Try Again
      </button>
    </div>
  );
}

function App() {
  const [images, setImages] = useState<Images | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const loadImages = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // First, delete old uploads
      await deleteOldUploads();
      
      // Then fetch new images
      const newImages = await fetchAllImages();
      
      if (!newImages.heroImage && !newImages.galleryImages.length && !newImages.projectImages.length) {
        throw new Error('No images were loaded');
      }
      
      setImages(newImages);
    } catch (error) {
      console.error('Error loading images:', error);
      setError(error instanceof Error ? error : new Error('Failed to load images'));
      toast.error('Failed to load images');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadImages();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error || !images) {
    return <ErrorMessage onRetry={loadImages} />;
  }

  return (
    <div className="min-h-screen bg-memorial-cream">
      {/* Hero Section */}
      <ErrorBoundary>
        {images.heroImage && (
          <div className="w-full h-[500px] relative">
            <img
              src={images.heroImage}
              alt="Hero"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        )}
      </ErrorBoundary>

      {/* Gallery Section */}
      <ErrorBoundary>
        {images.galleryImages.length > 0 && (
          <ImageGallery
            images={images.galleryImages}
            title="תמונות לגלילה"
          />
        )}
      </ErrorBoundary>

      {/* Project Section */}
      <ErrorBoundary>
        {images.projectImages.length > 0 && (
          <BambaGallery 
            images={images.projectImages}
            title="מבצע במבה וקולה"
          />
        )}
      </ErrorBoundary>

      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 5000,
          className: 'font-alef'
        }}
      />
    </div>
  );
}

export default App;
