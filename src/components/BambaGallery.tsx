
import { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface BambaGalleryProps {
  title: string;
  images: string[];
}

export default function BambaGallery({ title, images }: BambaGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="w-full py-12 px-4 bg-memorial-blue/10" dir="rtl">
      <h3 className="text-3xl font-alef font-bold mb-8 text-center text-memorial-charcoal">{title}</h3>
      
      <div className="max-w-6xl mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {images.map((image, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div 
                  className="aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image}
                    alt={`במבה וקולה תמונה ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="rtl-flip" />
          <CarouselNext className="rtl-flip" />
        </Carousel>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="תמונה מוגדלת"
            className="max-w-full max-h-[90vh] object-contain"
          />
        </div>
      )}
    </div>
  );
}
