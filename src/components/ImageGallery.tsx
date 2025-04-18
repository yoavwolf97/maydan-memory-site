import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setIsLoading(true);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setIsLoading(true);
  };

  const goToSlide = (slideIndex: number) => {
    if (slideIndex !== currentIndex) {
      setCurrentIndex(slideIndex);
      setIsLoading(true);
    }
  };

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      goToNext();
    } else if (event.key === 'ArrowRight') {
      goToPrevious();
    }
  }, [currentIndex, images.length]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="w-full py-12 px-4" dir="rtl">
      <h3 className="text-3xl font-alef font-bold mb-8 text-center text-memorial-charcoal">{title}</h3>
      <div className="relative max-w-3xl mx-auto">
        <div className="h-[400px] w-full relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-memorial-gold"></div>
            </div>
          )}
          <img
            src={images[currentIndex]}
            alt={`Gallery image ${currentIndex + 1}`}
            className={cn(
              "w-full h-full object-contain rounded-lg shadow-md transition-opacity duration-300",
              isLoading ? "opacity-0" : "opacity-100"
            )}
            onLoad={handleImageLoad}
          />
        </div>

        {/* Left Arrow */}
        <div 
          onClick={goToPrevious}
          className="absolute top-1/2 -translate-y-1/2 left-2 text-2xl rounded-full p-2 bg-white/70 text-memorial-charcoal cursor-pointer hover:bg-white/90 hover:scale-110 transition-all duration-200"
        >
          <ChevronLeft size={24} />
        </div>
        
        {/* Right Arrow */}
        <div 
          onClick={goToNext}
          className="absolute top-1/2 -translate-y-1/2 right-2 text-2xl rounded-full p-2 bg-white/70 text-memorial-charcoal cursor-pointer hover:bg-white/90 hover:scale-110 transition-all duration-200"
        >
          <ChevronRight size={24} />
        </div>

        {/* Dots navigation */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center space-x-2">
          {images.map((_, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={cn(
                "text-2xl cursor-pointer mx-2 h-3 w-3 rounded-full transition-all duration-200 hover:scale-125",
                currentIndex === slideIndex ? "bg-memorial-gold" : "bg-memorial-charcoal/30"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
