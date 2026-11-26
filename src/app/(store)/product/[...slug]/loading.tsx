export default function Loading() {
  return (
    <div className="relative" role="status" aria-label="Loading product">
      <main className="md:flex gap-8 px-3 sm:px-10 mt-5 md:mt-15 animate-pulse">

        {/* Images */}
        {/* Images */}
        <div className="md:hidden bg-gray-200 aspect-square w-full rounded" />
        <div className="hidden md:grid grid-cols-2 w-full md:w-[60%] gap-5 self-start sticky top-20">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-gray-200 h-75 lg:h-100 w-full rounded" />
          ))}
        </div>

        {/* Details */}
        <div className="mt-10 md:mt-0 w-full md:w-[40%]">
          <div className="h-8 bg-gray-200 rounded w-1/3" />
          <div className="h-7 bg-gray-200 rounded w-2/3 mt-3" />
          <div className="h-9 bg-gray-200 rounded w-36 mt-5" />

          {/* Price */}
          <div className="flex items-center gap-3 mt-5">
            <div className="h-7 bg-gray-200 rounded w-20" />
            <div className="h-6 bg-gray-200 rounded w-24" />
            <div className="h-6 bg-gray-200 rounded w-16" />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-5 mb-7">
            <div className="h-11 bg-gray-200 rounded w-1/2" />
            <div className="h-11 bg-gray-200 rounded w-1/2" />
          </div>

          <hr className="border-gray-200" />

          {/* Description */}
          <div className="space-y-2 mt-5 mb-3">
            <div className="h-5 bg-gray-200 rounded" />
            <div className="h-5 bg-gray-200 rounded w-5/6" />
            <div className="h-5 bg-gray-200 rounded w-4/6" />
          </div>

          {/* Delivery */}
          <div className="border-t border-gray-200 py-5">
            <div className="h-5 bg-gray-200 rounded w-40" />
            <div className="h-11 bg-gray-200 rounded w-2/3 sm:w-1/2 lg:w-1/3 mt-3" />
            <div className="space-y-4 mt-5">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-6 bg-gray-200 rounded w-3/4" />
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="border-t border-gray-200 py-5 space-y-2">
            <div className="h-5 bg-gray-200 rounded w-40" />
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-4 bg-gray-200 rounded w-5/6" />
            ))}
          </div>

          {/* Specifications */}
          <div className="border-t border-gray-200 pt-5 space-y-4">
            <div className="h-5 bg-gray-200 rounded w-36" />
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex justify-between">
                <div className="h-4 bg-gray-200 rounded w-1/4" />
                <div className="h-4 bg-gray-200 rounded w-1/5" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}