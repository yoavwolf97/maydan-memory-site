import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';

interface ImageGalleryProps {
  images: string[];
  title: string;
  direction?: 'ltr' | 'rtl';
  gridLayout?: 'single' | 'grid';
  thumbnailSize?: 'small' | 'medium' | 'large';
}

export default function ImageGallery({ 
  images, 
  title, 
  direction = 'rtl',
  gridLayout = 'single',
  thumbnailSize = 'medium'
}: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Lazy loading with intersection observer
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true
  });

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!selectedImage) return;

    const actions = {
      'ArrowRight': direction === 'rtl' ? goToNext : goToPrevious,
      'ArrowLeft': direction === 'rtl' ? goToPrevious : goToNext,
      'Escape': () => setSelectedImage(null),
      'f': () => setIsFullscreen(prev => !prev)
    };

    if (e.key in actions) {
      e.preventDefault();
      actions[e.key as keyof typeof actions]();
    }
  }, [selectedImage, direction]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
    setIsLoading(true);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
    setIsLoading(true);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
    setSelectedImage(images[slideIndex]);
    setIsLoading(true);
  };

  const thumbnailSizeClasses = {
    small: 'grid-cols-4 md:grid-cols-6 lg:grid-cols-8',
    medium: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
    large: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
  };

  return (
    <div className="w-full py-12 px-4" dir={direction}>
      <h3 className="text-3xl font-alef font-bold mb-8 text-center text-memorial-gold 
                     transition-all hover:text-memorial-gold/90">
        {title}
      </h3>

      {/* Main Gallery Layout */}
      <div className="max-w-7xl mx-auto" ref={ref}>
        {gridLayout === 'single' ? (
          // Single image display with navigation
          <div className="relative max-w-3xl mx-auto">
            <div className="h-[400px] md:h-[600px] w-full relative">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100/80 backdrop-blur-sm">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-memorial-gold"></div>
                </div>
              )}
              {inView && (
                <img
                  src={images[currentIndex]}
                  alt={`Gallery image ${currentIndex + 1}`}
                  className={cn(
                    "w-full h-full object-contain rounded-lg shadow-lg transition-all duration-300",
                    isLoading ? "opacity-0 scale-95" : "opacity-100 scale-100"
                  )}
                  onLoad={() => setIsLoading(false)}
                />
              )}
            </div>

            {/* Navigation Controls */}
            <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 flex justify-between">
              <button 
                className="rounded-full p-2 bg-black/50 text-white hover:bg-black/70 transition-colors"
                onClick={direction === 'rtl' ? goToNext : goToPrevious}
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                className="rounded-full p-2 bg-black/50 text-white hover:bg-black/70 transition-colors"
                onClick={direction === 'rtl' ? goToPrevious : goToNext}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        ) : (
          // Grid layout
          <div className={cn(
            "grid gap-4",
            thumbnailSizeClasses[thumbnailSize]
          )}>
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
                  setCurrentIndex(index);
                }}
              >
                {inView && (
                  <img
                    src={image}
                    alt={`Gallery thumbnail ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                  />
                )}
              </div>
            ))}
          </div>
        )}

        {/* Dots Navigation */}
        <div className="flex justify-center py-4 gap-2">
          {images.map((_, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                "hover:scale-125",
                currentIndex === slideIndex 
                  ? "bg-memorial-gold w-4" 
                  : "bg-memorial-charcoal/30"
              )}
              aria-label={`Go to slide ${slideIndex + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className={cn(
            "fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4",
            "animate-in fade-in duration-200"
          )}
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl w-full h-full flex items-center justify-center">
            <img
              src={selectedImage}
              alt={`Full size image ${currentIndex + 1}`}
              className={cn(
                "max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl",
                "animate-in zoom-in duration-300",
                isFullscreen ? "cursor-zoom-out" : "cursor-zoom-in"
              )}
              onClick={(e) => {
                e.stopPropagation();
                setIsFullscreen(prev => !prev);
              }}
              style={isFullscreen ? {
                maxWidth: '100vw',
                maxHeight: '100vh',
                margin: 0,
                borderRadius: 0
              } : undefined}
            />

            {/* Lightbox Controls */}
            <div className="absolute top-4 right-4 flex gap-2">
              <button 
                className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFullscreen(prev => !prev);
                }}
              >
                <Maximize2 size={20} />
              </button>
              <button 
                className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-3 py-1 rounded-full">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
