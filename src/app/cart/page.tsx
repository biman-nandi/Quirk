import { cartProducts } from "@/data/cartProducts";
import { discountedPercentage, formatedPrice } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaArrowDown } from "react-icons/fa";
import { GoDot } from "react-icons/go";

export default function CartPage() {
  const checkoutPrice = cartProducts.reduce((sum, item) => sum + item.price, 0)

  return (
    <main className="px-3 sm:px-10 mt-15">
      <div className="border-b pb-10 mb-4.5 w-full flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl w-fit relative font-bold">
          YOUR BAG
          <span className="hidden sm:block font-normal absolute right-0 top-0 -mt-3.5 -mr-3.5 text-base sm:text-lg">9</span>
        </h1>

        <Link href='/' className="text-sm text-brand cursor-pointer underline">←Continue Shopping</Link>
      </div>

      {
        true
          ?
          <div className="md:flex justify-between">
            <div className="md:w-[65%]">
              {cartProducts.map((item, index) => (
                <div key={item.id} className="md:flex justify-between items-center border-b border-gray-300 py-7.5">
                  <div className="flex">
                    <div className="bg-white rounded w-45 md:h-60 flex justify-center items-center shrink-0">
                      <div className="relative w-45 aspect-3/4">
                        <Image
                          src={item.thumbnail}
                          alt={`product-${index + 1}`}
                          fill
                          sizes="180px"
                          loading={index === 0 ? "eager" : "lazy"}
                          className="object-cover"
                        />
                      </div>
                    </div>

                    <div className="px-5 md:py-3">
                      <h6 className="font-semibold">{item.title}</h6>

                      <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                        <span>{item.selectedColor}</span>
                        <GoDot className="text-xs" />
                        <span>{item.selectedSize}</span>
                      </div>

                      <div className="flex flex-wrap items-center text-xs 300:text-sm lg:text-base lg:tracking-wider gap-1 lg:gap-2 mt-2">
                        <span className="font-semibold">{formatedPrice(item.price)}</span>

                        <span className="text-gray-500 line-through">{formatedPrice(item.originalPrice)}</span>
                        <span className="text-discount flex items-center tracking-wider"><FaArrowDown className="size-2 lg:size-3" /> {Math.floor(discountedPercentage(item.originalPrice, item.price))}%</span>
                      </div>

                      <div className="flex items-center justify-between mt-2 md:mt-4">
                        <div className="flex items-center border rounded-md px-2 py-1">
                          <AiOutlineMinus
                            className="cursor-pointer"
                          />
                          <span
                            className="mx-3"
                          >
                            {item.quantity}
                          </span>
                          <AiOutlinePlus className="cursor-pointer" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="text-sm underline cursor-pointer text-black"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="md:w-[30%] md:sticky top-5 h-fit p-6 border border-gray-300 shadow-md mt-3 md:mt-0 rounded-md">
              <h1 className="text-lg font-semibold mb-3">Order Summary</h1>

              <hr className="my-2 text-gray-400" />

              <div>
                {cartProducts.length > 0 &&
                  cartProducts.map((item, idx) => (
                    <div key={item.id} className="mb-1 flex justify-between">
                      <p className="py-1 flex mr-2">
                        <span>{idx + 1}.{"\u00A0"}</span> <span>{item.title} ({item.quantity} items)</span>
                      </p>
                      <p>₹{(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
              </div>

              <hr className="my-2 text-gray-400" />

              <div className="flex justify-between">
                <p>Total :</p>
                <p className="font-bold">₹{checkoutPrice.toFixed(2)}</p>
              </div>

              <div className="w-full flex justify-center">
                <button className="mt-6 bg-brand cursor-pointer hover:scale-[1.02] transition-all duration-300 text-white px-6 py-3">Proceed to Checkout</button>
              </div>
            </div>
          </div>
          :
          <div className="flex flex-col items-center justify-center py-20">
            <h2 className="text-2xl font-semibold">
              Your Bag Is Empty
            </h2>

            <p className="text-gray-500 mt-3">
              Looks like you haven't added any products yet.
            </p>

            <Link href='/'>
              <button
                type="button"
                className="mt-6 bg-black cursor-pointer hover:scale-[1.02] transition-all duration-300 text-white px-6 py-3"
              >
                CONTINUE SHOPPING
              </button>
            </Link>
          </div>
      }
    </main>
  );
};