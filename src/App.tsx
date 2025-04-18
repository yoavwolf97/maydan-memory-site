import { useState, useEffect } from 'react';
import { Toaster } from 'sonner';
import './App.css';
import ImageGallery from './components/ImageGallery';
import BambaGallery from './components/BambaGallery';
import { getSiteImages, type SiteImages } from '@/lib/imageUtils';

function App() {
  const [images] = useState<SiteImages>(getSiteImages());

  return (
    <div className="min-h-screen bg-memorial-cream">
      {/* Hero Section */}
      {images.hero && (
        <div className="w-full h-[500px] relative">
          <img
            src={images.hero}
            alt="Hero"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
      )}

      {/* Gallery Section */}
      {images.gallery.length > 0 && (
        <ImageGallery
          images={images.gallery}
          title="תמונות לגלילה"
        />
      )}

      {/* Project Section */}
      {images.project.length > 0 && (
        <BambaGallery 
          images={images.project}
          title="מבצע במבה וקולה"
        />
      )}

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
