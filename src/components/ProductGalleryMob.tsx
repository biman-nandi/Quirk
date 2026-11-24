'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";

export default function ProductGalleryMob({ productImages }: { productImages: string[] }) {
  return (
    <Carousel className="h-full w-full bg-white md:hidden">
      <CarouselContent>
        {
          productImages.map((image: string) => (
            <CarouselItem 
              key={image} 
              className="h-full shrink-0"
            >
              <div className="relative w-full aspect-square">
                <Image
                  src={`${image}`}
                  alt={`${image}`}
                  fill
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
                  className="object-cover"
                />
              </div>
            </CarouselItem>
          ))
        }
      </CarouselContent>
      <CarouselPrevious
        variant='ghost'
        className='left-0'
      >

      </CarouselPrevious>
      <CarouselNext
        variant='ghost'
        className='right-0'
      >

      </CarouselNext>
    </Carousel>
  );
};