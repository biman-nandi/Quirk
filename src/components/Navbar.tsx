import Link from "next/link"
import { IoSearchSharp } from "react-icons/io5";
import { MdFavoriteBorder, MdOutlineShoppingBag } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { menuData } from "@/data/menudata";
import MegaMenu from '@/components/MegaMenu'
import { MenuDataProps } from "@/types";


export default function() {
  return (
    <header className="bg-[#f1f1f1] shadow-md shadow-gray-300">
      <nav className="flex justify-around items-center">
        <div className="flex items-center gap-2.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="cursor-pointer md:hidden"
          >
            <g mask="url(#mask0_1943_854)"> <path d="M4 17.2692V16.2692H15V17.2692H4ZM4 12.5V11.5H20V12.5H4ZM4 7.73071V6.73071H20V7.73071H4Z" fill="#121212"></path> </g> </svg>

          <Link href="/">
            <h1
              className="
                font-(family-name:--font-agrave-pro)
                text-black
                text-xl 
                sm:text-4xl 
                cursor-pointer
              "
            >
              Quirk
            </h1>
          </Link>


          <div
            className="
              hidden 
              md:flex 
              items-center 
              gap-[2.5vw]
              xl:gap-[4.5vw] 
              text-gray-500
              relative
            "
          >

            {menuData.map((menu: MenuDataProps) => (
              <MegaMenu key={menu.title} menu={menu} />
            ))}

            <Link 
              href='/blogs' 
              className="addHoverEffect py-7 cursor-pointer"
            >
              BLOGS
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-5 lg:gap-8">
          <div
            className="
              hidden 
              lg:flex 
              items-center 
              gap-2 
              bg-gray-500/15 
              p-2 
              rounded-full 
            "
          >
            <IoSearchSharp className="text-lg sm:text-2xl" />

            <input
              type="text"
              placeholder="Search"
              className="outline-none"
            />
          </div>

          <IoSearchSharp className="hidden sm:block text-lg sm:text-2xl lg:hidden cursor-pointer" />

          <Link 
            href='/wishlist'
            className="hidden sm:block text-lg sm:text-2xl cursor-pointer"
          >
            <MdFavoriteBorder />
          </Link>

          <div className="relative">
            <Link
              href='/cart'
              className="text-lg sm:text-2xl cursor-pointer"
            >
              <MdOutlineShoppingBag />
            </Link>

            <span className="absolute top-0 right-0 -mt-2.5 -mr-3 text-sm ">
              {/* <div className="w-full px-1 rounded-full h-full bg-red-500 text-white shrink-0">{props.cartLength}</div> */}
            </span>
          </div>

          <div className="relative group">
              <Link
                href='/profile'
                className="text-lg sm:h-24 cursor-pointer py-7"
              >
               <FaRegUser />
              </Link>

            <ul className="absolute top-5 -right-5 mt-0 hidden group-hover:flex bg-[#ebebeb] flex-col z-50 p-3 whitespace-nowrap border border-gray-400 rounded-md space-y-1 w-60 text-gray-600 text-sm">
              <li className="text-black font-bold">Hello, John Doe</li>
              <li>1234567890</li>

              <hr className="text-gray-300" />

              <li>
                <Link 
                  href='/profile/orders' 
                  className="hover:underline cursor-pointer"
                >
                  Orders
                </Link>
              </li>

              <li>
                <Link 
                  href='/wishlist'
                  className="hover:underline cursor-pointer"
                >
                  Wishlist
                </Link>
              </li>

              <li>
                <Link 
                  href='/contact-us' 
                  className="hover:underline cursor-pointer"
                >
                  Contact Us
                </Link>
              </li>

              <hr className="text-gray-300" />

              <li>
                <Link 
                  href='/coupons' 
                  className="hover:underline cursor-pointer"
                >
                  Coupons
                </Link>
              </li>

              <li>
                <Link 
                  href='/profile/manage-address' 
                  className="hover:underline cursor-pointer"
                >
                  Saved Address
                </Link>
              </li>

              <hr className="text-gray-300" />

              <li>
                <Link 
                  href='/profile' 
                  className="hover:underline cursor-pointer"
                >
                  Edit Profile
                </Link>
              </li>

              <li>
                <span 
                  className="hover:underline cursor-pointer"
                >
                  Logout
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}