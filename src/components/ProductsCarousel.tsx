"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay'

import Image from "next/image";
import { CarouselProps } from "@/types";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

export function BestSellerCarousel({ productsArray }: { productsArray: CarouselProps[] }) {
  const options = {
    align: "start" as const,
    slideToScroll: 'auto',
    loop: true,
  }
  const carouselPlugins = [
    Autoplay({
      delay: 2000,
    })
  ]

  return (
    <Carousel opts={options} plugins={carouselPlugins}>
      <CarouselContent>
        {
          productsArray.map((product: CarouselProps) => (
            <CarouselItem 
              key={product.id}
              className="basis-full min-[481px]:basis-1/2 min-[769px]:basis-1/3 min-[1024px]:basis-1/4 min-[1280px]:basis-1/5"
            >
              <div className="flex-1">
                <div className="overflow-hidden h-[35vh] sm:h-[45vh] relative">
                  <Image
                    src={product.url}
                    alt={product.title}
                    fill
                    sizes="auto"
                    className="object-contain cursor-pointer hover:scale-105 w-full h-full transition-transform ease-in-out duration-300 bg-white"
                  />

                  <p className="absolute bottom-3 left-3 bg-white p-1 rounded-full cursor-pointer">{product.id}</p>
                  <MdOutlineShoppingBag className="absolute bottom-3 right-3 text-3xl bg-white p-1 rounded-full cursor-pointer" />
                </div>

                {
                  product.offer ?
                    <div className="py-1.5"><p className="bg-[#bbe7e7] inline py-2 px-5">{product.offer}% off</p></div>
                    :
                    <div className="py-1.5"><p className="bg-[#e7ddbb] inline py-2 px-5">Just In</p></div>
                }
                <p className="mt-1.5 text-sm lg:text-base truncate">{product.title}</p>
                <p className="mt-1.5 text-sm lg:text-base text-[#5366a5]">Rs. {product.price}.00</p>
              </div>

            </CarouselItem>
          ))
        }
      </CarouselContent>
      <CarouselPrevious variant='ghost' className='left-0.5 bg-[#e7ddbb]'>
        <FaArrowLeft className="size-4.5" />
      </CarouselPrevious>
      <CarouselNext variant='ghost' className='right-0.5 bg-[#e7ddbb]'>
        <FaArrowRight className="size-4.5" />
      </CarouselNext>
    </Carousel>
  );
}