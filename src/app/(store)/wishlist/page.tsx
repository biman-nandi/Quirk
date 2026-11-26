import { collectionData } from "@/data/collectionData";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import { createSlug, discountedPercentage, formatedPrice } from "@/utils";
import { FaArrowDown } from "react-icons/fa";
import Link from "next/link";

export default function WishlistPage() {
  const filteredProduct = collectionData
  return (
    <div>

      {
        filteredProduct && (
          <main className="px-3 sm:px-10 mt-15">
            <h1 className="font-bold text-lg tracking-wider">
              My WishList <span className="font-normal ml-2">{filteredProduct.length} items</span>
            </h1>

            {
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 mt-5">
                {filteredProduct.map((product, index) => (
                  <div key={product.id} className="shadow-md bg-white rounded">

                    {/* Image */}
                    <div className="bg-white aspect-4/5 relative rounded-t overflow-hidden">
                      <Link href={`/product/${createSlug(product.category)}/${createSlug(product.brand)}/${createSlug(product.title)}/${product.id}`} className="relative block h-full w-full leading-none">
                        <Image
                          src={product.thumbnail}
                          alt={product.title}
                          fill
                          priority={index < 4}
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, (max-width: 1536px) 20vw, 16vw"
                          className="object-cover rounded-t"
                        />
                      </Link>

                      <button type="button" className="cursor-pointer">
                        <IoMdClose className="absolute right-2 top-2 z-40 text-lg border border-gray-300 rounded-full p-0.5 bg-white/90 size-6 " />
                      </button>
                    </div>

                    {/* Title */}
                    <div className="p-2.5 flex flex-col">
                      <p className="truncate text-center">{product.title}</p>

                      <div className="flex justify-center flex-wrap items-center text-xs 300:text-sm lg:text-base lg:tracking-wider gap-1 lg:gap-2 mt-1">
                        <span className="font-semibold">{formatedPrice(product.price)}</span>

                        <span className="text-gray-500 line-through">{formatedPrice(product.originalPrice)}</span>
                        <span className="text-discount flex items-center tracking-wider"><FaArrowDown className="size-2 lg:size-3" /> {discountedPercentage(product.originalPrice, product.price)}%</span>
                      </div>
                    </div>

                    <button className="w-full border-t border-gray-300 py-3 text-brand text-sm tracking-wider font-bold cursor-pointer">
                      ADD TO CART
                    </button>
                  </div>
                ))}
              </div>
            }
          </main>
        )
      }
    </div>
  );
};