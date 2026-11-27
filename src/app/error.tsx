'use client'

import { useEffect } from "react"
import Image from "next/image"

export default function ErrorPage({
  error,
  retry
}: {
  error: unknown,
  retry: () => void
}) {

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex justify-center flex-col items-center h-screen overflow-hidden">
      <h1 className="text-2xl text-center font-black mb-5">Lost in the Quirk?</h1>

      <p className="max-w-md px-4 text-center text-sm leading-6 text-gray-500">
        Looks like you've wandered off the shopping path.
        Let's help you find your way back to something you love.
      </p>

      <div className="w-[90vw] sm:w-[75vw] lg:w-[50vw] aspect-3/2 relative">
        <Image
          src="/images/error.png"
          alt="Error page illustration"
          fill
          priority
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 75vw, 50vw"
          className="object-contain"
        />
      </div>

      <button onClick={() => retry()} className="rounded bg-brand px-3 py-1.5 sm:px-6 sm:py-3 text-sm font-semibold text-white transition hover:bg-[#066B4D] cursor-pointer">
        Try Again
      </button>
    </div>
  );
};