import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

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
    setCurrentIndex(slideIndex);
    setIsLoading(true);
  };

  return (
    <div className="w-full py-12 px-4" dir="rtl">
      <h3 className="text-3xl font-alef font-bold mb-8 text-center text-memorial-charcoal">{title}</h3>
      <div className="relative max-w-3xl mx-auto">
        <div className="h-[400px] w-full relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
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
            onLoad={() => setIsLoading(false)}
          />
        </div>

        {/* Navigation Arrows */}
        <button 
          className="absolute top-1/2 -translate-y-1/2 left-2 text-2xl rounded-full p-2 bg-white/70 text-memorial-charcoal cursor-pointer hover:bg-white/90 transition-colors"
          onClick={goToPrevious}
        >
          <ChevronLeft size={24} />
        </button>
        
        <button 
          className="absolute top-1/2 -translate-y-1/2 right-2 text-2xl rounded-full p-2 bg-white/70 text-memorial-charcoal cursor-pointer hover:bg-white/90 transition-colors"
          onClick={goToNext}
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots navigation */}
        <div className="flex justify-center py-4">
          {images.map((_, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={cn(
                "mx-2 h-3 w-3 rounded-full transition-colors",
                currentIndex === slideIndex ? "bg-memorial-gold" : "bg-memorial-charcoal/30"
              )}
              aria-label={`Go to slide ${slideIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
