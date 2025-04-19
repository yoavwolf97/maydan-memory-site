import React, { useState, useCallback } from 'react';
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import type { UseEmblaCarouselType } from 'embla-carousel-react';

interface ImageCarouselProps {
  images: string[];
  title: string;
}

export default function ImageCarousel({ images, title }: ImageCarouselProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = useIsMobile();
  const [api, setApi] = useState<UseEmblaCarouselType[1] | null>(null);

  const autoplayPlugin = useCallback(
    () =>
      Autoplay({
        delay: 4000,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
      }),
    []
  );

  React.useEffect(() => {
    if (!api) return;
    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };
    api.on("select", onSelect);
    onSelect(); // initialize
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // how many slides per “page”
  const slidesPerPage = isMobile ? 1 : 2;

  return (
    <div className="w-full py-12 px-4 bg-memorial-blue/10" dir="rtl">
      <h3 className="text-3xl font-alef font-bold mb-8 text-center text-memorial-charcoal transition-all hover:text-memorial-gold">
        {title}
      </h3>

      <div className="max-w-6xl mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: slidesPerPage,
          }}
          plugins={[autoplayPlugin()]}
          className="w-full relative"
          setApi={setApi}
        >
          {/* restored the negative margin so Embla computes correctly */}
          <CarouselContent className="-ml-2 md:-ml-4">
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className={cn(
                  "pl-2 md:pl-4",
                  isMobile ? "basis-full" : "basis-1/2"
                )}
              >
                <div
                  className={cn(
                    "aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer",
                    "transform transition-all duration-300",
                    "hover:scale-105 hover:shadow-xl",
                    "border-2 border-transparent hover:border-memorial-gold"
                  )}
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative w-full h-full group">
                    <img
                      src={image}
                      alt={`תמונה ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="rtl-flip -left-12 bg-white/80 hover:bg-white" />
          <CarouselNext className="rtl-flip -right-12 bg-white/80 hover:bg-white" />
        </Carousel>

        {/* Dot indicators now jump by pages */}
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: Math.ceil(images.length / slidesPerPage) }).map(
            (_, page) => (
              <button
                key={page}
                className={`h-2 w-2 rounded-full transition-all ${
                  currentSlide === page * slidesPerPage
                    ? "bg-memorial-gold w-3"
                    : "bg-memorial-charcoal/30"
                }`}
                onClick={() => api?.scrollTo(page * slidesPerPage)}
                aria-label={`Go to page ${page + 1}`}
              />
            )
          )}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl w-full h-full flex items-center justify-center">
            <img
              src={selectedImage}
              alt="תמונה מוגדלת"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in zoom-in duration-300"
            />
            <button
              className="absolute top-4 right-4 text-white hover:text-memorial-gold transition-colors duration-200"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <span className="text-3xl">×</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

