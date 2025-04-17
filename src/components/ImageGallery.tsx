
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="w-full py-12 px-4" dir="rtl">
      <h3 className="text-3xl font-alef font-bold mb-8 text-center text-memorial-charcoal">{title}</h3>
      <div className="relative max-w-3xl mx-auto">
        <div className="h-[400px] w-full relative">
          <img
            src={images[currentIndex]}
            alt={`Gallery image ${currentIndex + 1}`}
            className="w-full h-full object-contain rounded-lg shadow-md"
          />
        </div>

        {/* Left Arrow */}
        <div className="absolute top-1/2 -translate-y-1/2 left-2 text-2xl rounded-full p-2 bg-white/70 text-memorial-charcoal cursor-pointer">
          <ChevronLeft onClick={goToPrevious} size={24} />
        </div>
        
        {/* Right Arrow */}
        <div className="absolute top-1/2 -translate-y-1/2 right-2 text-2xl rounded-full p-2 bg-white/70 text-memorial-charcoal cursor-pointer">
          <ChevronRight onClick={goToNext} size={24} />
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center py-4">
          {images.map((_, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={cn(
                "text-2xl cursor-pointer mx-2 h-3 w-3 rounded-full",
                currentIndex === slideIndex ? "bg-memorial-gold" : "bg-memorial-charcoal/30"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
