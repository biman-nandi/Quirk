import { collectionData } from "@/data/collectionData";
import Link from "next/link";
import { createSlug, formatedPrice, formatedRating, discountedPercentage, parseFilters, filterProducts } from "@/utils";
import { FaArrowDown, FaStar } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import CategoryFilters from '@/components/CategoryFilters'
import { Suspense } from 'react'
import Image from "next/image";

export default async function CategoryPage(
  {
    params,
    searchParams
  }: {
    params: Promise<{ categorySlug: string[] }>,
    searchParams: Promise<{ f?: string }>
  }) {
  const { categorySlug } = await params
  console.log(categorySlug)

  const { f } = await searchParams
  const filters = parseFilters(f ?? null)
  const filteredProducts = filterProducts(collectionData, filters)


  return (
    <main className="px-3 sm:px-10 my-10">
      <p className="uppercase mb-2 text-xs tracking-widest">Home/{categorySlug.join("/")}</p>

      <h1 className="uppercase mb-15 text-4xl font-bold">{categorySlug[categorySlug.length - 1]}</h1>

      <Suspense fallback={null}>
        <CategoryFilters />
      </Suspense>


      {
        filteredProducts.length === 0 ?
          <div className="py-20 text-center">
            <h2 className="text-xl font-semibold">No products found</h2>
            <p className="mt-2 text-gray-500">
              Try changing or removing some filters.
            </p>
          </div> :
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2.5 md:gap-5 mt-10">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="mb-5 cursor-pointer relative"
              >
                <Link href={`/product/${createSlug(product.category)}/${createSlug(product.brand)}/${createSlug(product.title)}/${product.id}`}
                >
                  <div className="aspect-3/4 overflow-hidden relative">
                    <Image
                      src={product.thumbnail}
                      alt={product.title}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                      className="object-cover bg-white"
                    />

                    <div className="flex items-baseline bg-white/70 shadow-sm px-1 py-0.5 sm:px-2 sm:py-1 rounded-sm absolute z-40 bottom-2 left-2 text-xs sm:text-sm">
                      <p className="text-black">{product.rating_average}</p>
                      <FaStar className="text-green-700 ml-0.5" />
                      <p><span className="mx-0.5">|</span> {formatedRating(product.rating_count)}</p>
                    </div>
                  </div>

                  <div className="py-3">
                    <p className="font-semibold text-xs sm:text-sm">{product.brand}</p>

                    <p className="truncate text-xs sm:text-sm text-gray-600">{product.title}</p>

                    <div className="flex flex-wrap items-center text-xs 300:text-sm lg:text-base lg:tracking-wider gap-1 lg:gap-2 mt-1">
                      <span className="font-semibold">{formatedPrice(product.price)}</span>

                      <span className="text-gray-500 line-through">{formatedPrice(product.originalPrice)}</span>
                      <span className="text-discount flex items-center tracking-wider"><FaArrowDown className="size-2 lg:size-3" /> {Math.floor(discountedPercentage(product.originalPrice, product.price))}%</span>
                    </div>
                  </div>
                </Link>

                <div className="bg-white/70 shadow-sm p-1 sm:p-2 rounded-full absolute z-40 top-2 right-2">
                  <MdFavoriteBorder className="size-5 sm:size-6" />
                </div>
              </div>
            ))}
          </div>
      }
    </main>
  );
};