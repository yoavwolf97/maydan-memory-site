
import React, { useState, useEffect, useRef } from 'react';
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from '@/lib/utils';
import { Globe, BookOpen, Flame } from 'lucide-react';

interface BambaGalleryProps {
  title: string;
  images: string[];
}

export default function BambaGallery({ title, images }: BambaGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <div className="w-full py-12 px-4 bg-memorial-blue/10" dir="rtl">
      <h3 className="text-3xl font-alef font-bold mb-8 text-center text-memorial-charcoal 
                     transition-all hover:text-memorial-gold">
        {title}
      </h3>
      
      <div className="max-w-6xl mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={() => {
            plugin.current.stop();
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            plugin.current.play();
            setIsHovered(false);
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {images.map((image, index) => (
              <CarouselItem 
                key={index} 
                className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
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
                      alt={`במבה וקולה תמונה ${index + 1}`}
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
      </div>

      {/* Enhanced Lightbox with Animation */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl w-full h-full flex items-center justify-center">
            <img
              src={selectedImage}
              alt="תמונה מוגדלת"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl
                         animate-in zoom-in duration-300"
            />
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
          </div>
        </div>
      )}
    </div>
  );
}
