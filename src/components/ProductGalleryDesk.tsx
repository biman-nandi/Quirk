'use client'

import { useState, useEffect } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function ProductGalleryDesk({ productImages }: { productImages: string[] }) {
  const [open, setOpen] = useState<boolean>(false)
  const [startIndex, setStartIndex] = useState<number>(0)

  const openAt = (idx: number) => {
    setOpen(true)
    setStartIndex(idx)
  }

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener("keydown", onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = prev
    }
  }, [open])

  return (
    <div className="hidden md:grid grid-cols-2 w-full md:w-[60%] gap-5">
      {productImages?.slice(0, 4).map((img, idx) => (
        <button
          type="button"
          key={img}
          onClick={() => openAt(idx)}
          className="h-75 lg:h-100 w-full relative"
        >
          <Image
            src={img}
            alt={`Product image ${idx}`}
            fill
            loading='eager'
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
            className="bg-white cursor-pointer object-contain rounded p-2"
          />

          <div className={`${idx < 3 && "hidden"} absolute inset-0 text-2xl flex justify-center items-center bg-black/50 rounded text-white font-bold cursor-pointer`}>
            +{productImages?.length - 4}
          </div>
        </button>
      ))}

      {
        open && (
          <div
            className="
              hidden 
              md:block
              fixed
              inset-0
              z-50
              bg-white
            "
          >
            <IoMdCloseCircleOutline
              onClick={() => setOpen(false)}
              className="text-3xl absolute right-10 top-10 cursor-pointer z-50"
            />
            <Carousel
              opts={{
                startIndex,
                loop: true
              }}
              className="h-full w-full"
            >
              <CarouselContent className=" h-screen">
                {productImages?.map((image, idx) => (
                  <CarouselItem key={image} className="relative h-full">
                    <Image
                      src={image}
                      alt={`Product image ${idx}`}
                      fill
                      loading='eager'
                      sizes="100vw"
                      className="object-contain p-16"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className='left-6' />
              <CarouselNext className='right-6' />
            </Carousel>
          </div>
        )
      }
    </div>
  );
};