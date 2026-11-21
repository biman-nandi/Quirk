import Link from "next/link";
import Image from "next/image";
import { MdArrowForward } from "react-icons/md";
import { newArrivalsData } from "@/data/newArrivals";
import { bestSellerData } from "@/data/bestSellerData";
import { BestSellerCarousel } from "@/components/ProductsCarousel";
import { exploreCollectionData } from "@/data/exploreCollectionsData";
import { ExploreCollectionsCarousel } from "@/components/CategoryCarousel";

export default function Home() {
  return (
    <div>
      {/* ===================================================================================================== */}
      {/* Discover Collection */}
      {/* ===================================================================================================== */}
      <div className="w-full h-[85vh] relative">
        <picture className="absolute h-full w-full block">
          <source
            media="(max-width: 768px)"
            srcSet="https://images.only.com/15363431/4905280/003/only-jdyhazenshineshortjacketotwyfm-grey.jpg?v=b62e7b5631e58388f797a053bff81653&format=auto&width=1720&quality=90&key=productTile_fullScreen-WIDESCREEN&bg-color=%23f5f5f5&dpr=1"
          />
          <Image
            src="https://www.halfdays.com/cdn/shop/files/Halfdays_Summer_._2026_Matcha_16_2.png?v=1780407011&width=2000"
            alt="Discover collection poster"
            fill
            loading="eager"
            sizes="(min-width: 769px) 100vw"
            className="object-cover"
          />
        </picture>

        <div className="absolute left-1/2 bottom-3 lg:bottom-10 -translate-x-1/2 text-center">
          <h4 className="text-2xl lg:text-5xl text-white mb-5 font-bold">New Arrivals</h4>

          <Link
            href="/collections"
            className="bg-gray-200 hover:bg-[#e7ddbb] flex justify-center items-center gap-2 cursor-pointer p-2"
          >
            <span className="lg:text-2xl font-oswald hover:bg-[#e7ddbb]">
              DISCOVER THE COLLECTION
            </span>

            <MdArrowForward />
          </Link>
        </div>
      </div>


      {/* ===================================================================================================== */}
      {/* Explore Collections */}
      {/* ===================================================================================================== */}
      <div className="mt-10 pt-5 px-2 md:px-5 lg:px-20">
        <h1 className="text-3xl font-semibold">Explore Collections</h1>

        <div className="mt-6 relative">
          <ExploreCollectionsCarousel exploreCollections={exploreCollectionData} />
        </div>
      </div>
          

      {/* ===================================================================================================== */}
      {/* Discover style text */}
      <div className="2xl:mt-10 pt-5 px-1.5 md:px-3 lg:px-15">
        <h1 className="font-bold text-3xl tracking-wider">Discover Your Signature Style</h1>
        <p className="mt-5 text-lg">Elevate your wardrobe with timeless pieces and contemporary trends designed to make every day feel effortlessly stylish.</p>
      </div>


      {/* ===================================================================================================== */}
      {/* New Arrivals */}
      {/* ===================================================================================================== */}
      <div className="my-10 pt-10 px-2 md:px-5 lg:px-20">
        <h1 className="text-3xl font-semibold">New Arrivals</h1>
        <div className="mt-6 relative">
          <BestSellerCarousel productsArray={newArrivalsData} />
        </div>
      </div>


      {/* ===================================================================================================== */}
      {/* Sale Banner */}
      {/* ===================================================================================================== */}
      <div className="relative h-[85vh] w-full">
        <picture className="absolute h-full w-full block">
          <source
            media="(max-width: 768px)"
            srcSet="/sale-banner.png"
          />

          <Image
            src="/sale-banner-desktop.png"
            alt="Sale banner desktop"
            fill
            loading="eager"
            sizes="(min-width: 769px) 100vw"
            className="object-cover"
          />
        </picture>

        <div className="absolute left-1/2 bottom-3 lg:bottom-10 -translate-x-1/2 text-center">
          <Link
            href="/collections"
            className="bg-gray-200 hover:bg-[#e7ddbb] flex justify-center items-center gap-2 cursor-pointer p-2"
          >
            <span className="lg:text-2xl font-oswald hover:bg-[#e7ddbb]">
              DISCOVER MORE
            </span>

            <MdArrowForward />
          </Link>
        </div>
      </div>


      {/* ===================================================================================================== */}
      {/* Best Sellers */}
      {/* ===================================================================================================== */}
      <div className="my-10 pt-10 px-2 md:px-5 lg:px-20">
        <h1 className="text-3xl font-semibold">Top 10 Best Sellers</h1>
        <div className="mt-6 relative">
          <BestSellerCarousel productsArray={bestSellerData} />
        </div>
      </div>
    </div>
  );
}
