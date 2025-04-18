
import React, { useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BambaGalleryProps {
  title: string;
  images: string[];
}

export default function BambaGallery({ title, images }: BambaGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const goToNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage) {
      const currentIndex = images.indexOf(selectedImage);
      const nextIndex = (currentIndex + 1) % images.length;
      setSelectedImage(images[nextIndex]);
      setCurrentImageIndex(nextIndex);
    }
  };

  const goToPrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage) {
      const currentIndex = images.indexOf(selectedImage);
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      setSelectedImage(images[prevIndex]);
      setCurrentImageIndex(prevIndex);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      // In RTL, right arrow goes to previous
      const currentIndex = images.indexOf(selectedImage!);
      const prevIndex = (currentIndex - 1 + images.length) % images.length;
      setSelectedImage(images[prevIndex]);
      setCurrentImageIndex(prevIndex);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      // In RTL, left arrow goes to next
      const currentIndex = images.indexOf(selectedImage!);
      const nextIndex = (currentIndex + 1) % images.length;
      setSelectedImage(images[nextIndex]);
      setCurrentImageIndex(nextIndex);
    } else if (e.key === 'Escape') {
      setSelectedImage(null);
    }
  };

  return (
    <div className="w-full py-12 px-4 bg-memorial-blue/10" dir="rtl">
      <h3 className="text-3xl font-alef font-bold mb-8 text-center text-memorial-gold 
                     transition-all hover:text-memorial-gold">
        {title}
      </h3>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={cn(
                "aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer",
                "transform transition-all duration-300",
                "hover:scale-105 hover:shadow-xl",
                "border-2 border-transparent hover:border-memorial-gold"
              )}
              onClick={() => {
                setSelectedImage(image);
                setCurrentImageIndex(index);
              }}
            >
              <div className="relative w-full h-full group">
                <img
                  src={image}
                  alt={`במבה וקולה תמונה ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox with Navigation */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-7xl w-full h-full flex items-center justify-center">
            {/* Previous Button */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-memorial-gold p-2 rounded-full bg-black/30 hover:bg-black/50 transition-all duration-200"
              onClick={goToNextImage} // RTL, so next is left
            >
              <ChevronLeft size={32} />
              <span className="sr-only">Previous image</span>
            </button>
            
            <img
              src={selectedImage}
              alt="תמונה מוגדלת"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl
                         animate-in zoom-in duration-300"
            />
            
            {/* Next Button */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-memorial-gold p-2 rounded-full bg-black/30 hover:bg-black/50 transition-all duration-200"
              onClick={goToPrevImage} // RTL, so prev is right
            >
              <ChevronRight size={32} />
              <span className="sr-only">Next image</span>
            </button>
            
            <button 
              className="absolute top-4 right-4 text-white hover:text-memorial-gold
                         transition-colors duration-200"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <span className="text-3xl">×</span>
            </button>
            
            {/* Image count indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white">
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
