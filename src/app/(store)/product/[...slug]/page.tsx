import { collectionData } from "@/data/collectionData"
import { FaStar } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { MdOutlineShoppingBag, MdFavoriteBorder, MdOutlinePayments, MdOutlineDeliveryDining } from "react-icons/md";
import ProductGalleryMob from "@/components/ProductGalleryMob";
import ProductGalleryDesk from "@/components/ProductGalleryDesk";
import { TbTruckDelivery } from "react-icons/tb";
import { RiExchangeLine, RiFileList3Line } from "react-icons/ri";
import { formatedFullDate } from "@/utils";
import { notFound } from "next/navigation";



export default async function ProductPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params
  const id = slug[slug.length - 1]
  const filteredProduct = collectionData.find(product => product.id === Number(id))


  const formatedPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'INR'
    }).format(price)
  }

  if (!filteredProduct) {
    notFound()
  }


  return (
    <div className="relative mb-15">
      <main className="md:flex gap-8 px-3 sm:px-10 mt-5">

        {/* Mobile screen Images */}
        <ProductGalleryMob productImages={filteredProduct?.images!} />

        {/* Big screen Images */}
        <ProductGalleryDesk productImages={filteredProduct?.images!} />


        {/* Product Section */}
        <div className="
                  mt-10
                  md:mt-0
                  w-full
                  md:w-[40%]
                "
        >
          {/* Brand */}
          <h1 className="text-2xl font-bold tracking-wider">
            {filteredProduct?.brand}
          </h1>



          {/* Title */}
          <h3 className="text-gray-500 tracking-wider text-xl">
            {filteredProduct?.title}
          </h3>



          {/* Rating */}
          <div className="bg-gray-200 rounded-lg px-2 py-1 flex items-baseline w-fit mt-5">
            <span className="font-bold">
              {filteredProduct?.rating_average}
            </span>

            <FaStar className="text-green-700 ml-1" />

            <span
              className="text-gray-500">{'\u00A0'}
              <span
                className="text-xl">|
              </span>
              {'\u00A0'}{filteredProduct?.rating_count} Ratings
            </span>
          </div>



          {/* Product Attriutes */}
          {/* {Object.entries(attributeGroups).map(([name, values]) => (
                  <div key={name} className="my-4">
                    <p className="text-gray-800 my-2">
                      <span className=" text-gray-600 font-bold">
                        {name}:{'\u00A0'}
                      </span>
                      {getCurrentData(name)}
                    </p>

                    <div className="flex gap-2">
                      {values.map(({ value, variant }) => (
                        (!name.includes("Color") ?
                          <button
                            key={value}
                            onClick={() => filteredProduct(variant)}
                            className={`border px-3 py-1 rounded-2xl cursor-pointer ${getCurrentData(name) === value && "border-2 border-gray-500"}`}
                          >
                            {value}
                          </button> :
                          <div key={value} className="flex w-fit gap-2 h-10">
                            <button
                              onClick={() => filteredProduct(variant)}
                              style={{
                                backgroundColor: colorMap[value]
                              }}
                              className={`
                                                            w-10
                                                            h-10
                                                            rounded-full
                                                            ml-3
                                                            cursor-pointer
                                                            ${filteredProduct.id === variant.id
                                  ? "ring-2 ring-offset-2 ring-black"
                                  : ""
                                }
                                                        `}
                            />
                          </div>
                        )
                      ))}
                    </div>
                  </div>
                ))} */}



          {/* Price */}
          <div className="mt-5 flex items-center gap-2 sm:gap-3.5">
            <span className="font-bold text-lg lg:text-2xl">
              {formatedPrice(Math.floor(filteredProduct?.price!))}
            </span>

            <span className="text-gray-500 text-base lg:text-xl">
              MRP <span className="line-through">
                {formatedPrice(Math.floor((Number(filteredProduct?.discount_percentage) + 100) / 100 * filteredProduct?.price!))}
              </span>
            </span>

            <span className="text-discount font-semibold inline text-base lg:text-xl">
              ({Math.floor(filteredProduct?.discount_percentage!)}% OFF)
            </span>
          </div>



          {/* Add to Cart & Wishlist btn */}
          <div className="flex gap-3 mt-5 mb-7 font-semibold">
            <button className="w-[50%] flex justify-center items-center gap-2 bg-brand text-white text-xs sm:text-base cursor-pointer rounded-sm transition-all duration-300 hover:scale-[1.02]">
              < MdOutlineShoppingBag /> {true ? "ADD TO CART" : <span>GO TO CART</span>}
            </button>

            <button className="border border-gray-300 hover:border-black cursor-pointer px-2 py-3 w-[50%] flex justify-center items-center gap-1.5 text-xs sm:text-base rounded-sm transition-all duration-300 hover:scale-[1.02]">
              <MdFavoriteBorder className="sm:text-xl" /> WISHLIST
            </button>
          </div>



          <hr className="mt-5 text-gray-400" />

          {/* Description */}
          <p className="mt-5 text-lg tracking-tight mb-3 text-gray-600">
            {filteredProduct?.description}
          </p>



          {/* Delivery Options  */}
          <div className="border-t border-t-gray-400 py-5">
            <h1 className="font-semibold">Delivery Options <TbTruckDelivery className="inline text-lg ml-1" /></h1>

            <div className="mt-3 py-2 px-3 border border-gray-400 rounded-lg min-w-45 w-2/3 sm:w-1/2 lg:w-1/3 flex justify-between items-center gap-2">
              <input
                type="number"
                name="pin"
                id="pin"
                placeholder="Enter pincode"
                className="flex-1 min-w-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:outline-none"
              />
              {/* <TiTickOutline className="bg-green-700 text-white rounded-full text-lg shrink-0" /> */}

              <button className="text-[#121212] text-sm sm:text-sm font-semibold cursor-pointer w-fit">Check</button>


              {/* <button className="text-[#121212] text-sm sm:text-sm font-semibold cursor-pointer w-fit ">Change</button> */}
            </div>


            <ul className="space-y-4 mt-5 font-semibold text-gray-600">
              <li className="flex items-center">
                <MdOutlineDeliveryDining className="inline shrink-0 text-3xl mr-2" />
                <span>{filteredProduct?.shipping_information}</span>
              </li>
              <li className="flex items-center">
                <MdOutlinePayments className="inline shrink-0 text-3xl mr-2" />
                <span>{filteredProduct?.cod_available}</span>
              </li>
              <li className="flex items-center">
                <RiExchangeLine className="inline shrink-0 text-3xl mr-2" />
                <span>{filteredProduct?.return_policy}</span>
              </li>
            </ul>

            {/*                   <ul className="space-y-4 mt-5 font-semibold text-gray-400">
                    <li className="flex items-center">
                      <MdOutlineDeliveryDining className="inline text-3xl mr-2" />
                      <span>Free Delivery</span>
                    </li>
                    <li className="flex items-center">
                      <MdOutlinePayments className="inline text-3xl mr-2" />
                      <span>Cash on Delivery</span>
                    </li>
                    <li className="flex items-center">
                      <RiExchangeLine className="inline text-3xl mr-2" />
                      <span>7 Day Return</span>
                    </li>
                  </ul> */}
          </div>



          {/* Product Highlights */}
          <div className="border-t border-t-gray-400 py-5">
            <h1 className="font-semibold flex items-center">Product Highlights<RiFileList3Line className="inline ml-1" /></h1>

            <ul className="mt-3 space-y-2 text-gray-700">
              {filteredProduct?.highlights?.map((item, idx) => (
                <li key={idx} className="flex gap-2"><div>✓</div> {item}</li>
              ))}
            </ul>
          </div>



          {/* Specifications */}
          <div className="border-t border-t-gray-400 pt-5">
            <h1 className="font-semibold">Specifications<AiOutlineProduct className="inline ml-1" /></h1>

            {filteredProduct?.specifications?.map((item, idx) => (
              <div key={item.label} className={`mt-3 pb-3 ${idx !== filteredProduct.specifications.length - 1 && "border-b"} border-gray-300 flex justify-between`}>
                <span className="text-gray-600">{item.label}</span>
                <span>{item.value}</span>
              </div>
            ))}
          </div>



          {/* Customer Reviews  */}
          <div className="mt-5 border-t border-t-gray-400 border-b border-b-gray-400 pt-8 pb-5">
            <h1 className="font-semibold">Customer Reviews ({filteredProduct?.reviews.length})</h1>

            {filteredProduct?.reviews.map((item, idx) => (
              <div key={idx}
                className={`${idx !== filteredProduct?.reviews.length - 1 ? `border-b` : 'border-0'}  border-b-gray-300 my-1 flex gap-5 py-2`}
              >
                <div className={`flex items-baseline w-fit ${item.rating < 3 ? "bg-red-700" : "bg-green-700"} text-white px-1 h-fit`}>
                  <span className="text-sm">{item.rating}</span>
                  <FaStar className="text-white text-xs ml-0.5" />
                </div>

                <div>
                  <span>{item.comment}</span>

                  <div className="text-gray-600">
                    <span>{item.reviewerName}</span>
                    <span> | </span>
                    <span>{item.reviewerEmail}</span>
                    <span> | </span>
                    <span>{formatedFullDate(item.date)}
                    </span>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </main>
    </div>
  )
};