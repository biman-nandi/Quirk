'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { exploreCollectionProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

export function ExploreCollectionsCarousel({ exploreCollections }: { exploreCollections: exploreCollectionProps[] }) {
  const options = {
    align: "start" as const,
    loop: true,
    slideToScroll: 'auto'
  }

  return (
    <Carousel opts={options}>
      <CarouselContent>
        {
          exploreCollections.map((product: exploreCollectionProps) => (
            <CarouselItem
              key={product.id}
              className="basis-full min-[640px]:basis-1/2 min-[768px]:basis-1/3 min-[1024px]:basis-1/4"
            >
              <Link 
                href={`/${product.slug}`}
                className="flex-1"
              >
                <div className="overflow-hidden h-[35vh] sm:h-[45vh] md:h-[50vh] lg:h-[60vh] relative">
                  <Image
                    src={product.url}
                    alt={product.alt}
                    fill
                    sizes="auto"
                    className="cursor-pointer hover:scale-105  object-cover w-full h-full transition-transform ease-in-out duration-300 max-h-140"
                  />
                </div>

                <p className="mt-3">Shop</p>
                <p className="mt-1.5 text-[#060553] text-lg lg:text-2xl tracking-wider cursor-pointer">{product.title}</p>
              </Link>
            </CarouselItem>
          ))
        }
      </CarouselContent>
      <CarouselPrevious
        variant='ghost'
        className='left-0 h-fit w-auto z-10 bg-[#e7ddbb] p-4 cursor-pointer rounded-none'
      >
        <FaArrowLeft className="size-7" />
      </CarouselPrevious>
      <CarouselNext
        variant='ghost'
        className='right-0 h-fit w-auto z-10 bg-[#e7ddbb] p-4 cursor-pointer rounded-none'
      >
        <FaArrowRight className="size-7" />
      </CarouselNext>
    </Carousel>
  );
}

/* 
<Swiper
      onSwiper={(swiper) => {
        swiperRef.current = swiper
      }}
      loop={true}
      slidesPerView={4}
      spaceBetween={20}
      breakpoints={{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 }
      }}
      className="mySwiper"
    >
      {expData.map((ele) => (
        <SwiperSlide key={ele.id}>
          <div className="flex-1" onClick={() => navigate(`/collections?gender=${ele.title.split("'")[0].toLowerCase()}`)}>
            <div className="overflow-hidden">
              <img src={ele.url} alt={ele.alt} className="cursor-pointer hover:scale-105  object-cover w-full h-full transition-transform ease-in-out duration-300 max-h-140" />
            </div>
            <p className="mt-3">Shop</p>
            <p className="mt-1.5 text-[#060553] text-lg lg:text-2xl underline tracking-wider cursor-pointer">{ele.title}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    <button onClick={() => swiperRef.current?.slidePrev()} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#e7ddbb] p-4 cursor-pointer"><FaArrowLeft className="text-3xl" /></button>

    <button onClick={() => swiperRef.current?.slideNext()} className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#e7ddbb] p-4 cursor-pointer z-10"><FaArrowRight className="text-3xl" /></button>
  </div>
</div> */