import Link from "next/link";
import Image from "next/image";
import { RiEditBoxFill } from "react-icons/ri";

export default function ProfilePage() {
  return (
    <main className="my-15 grid grid-cols-3 gap-10 px-[10vw] lg:px-[15vw]">
      <ul className="col-span-1">
        <li>
          <Link href='/profile' className="block px-3 py-2 my-3 hover:bg-[#121212] hover:text-white text-lg rounded-2xl cursor-pointer border border-black">
            Personal Information
          </Link>
        </li>

        <li>
          <Link href='/orders' className="block px-3 py-2 my-3 hover:bg-[#121212] hover:text-white text-lg rounded-2xl cursor-pointer border border-gray-300 w-full" >
            My Orders
          </Link>
        </li>

        <li>
          <Link href='/manage-address' className="block px-3 py-2 my-3 hover:bg-[#121212] hover:text-white text-lg rounded-2xl cursor-pointer border border-gray-300">
            Manage Address
          </Link>
        </li>

        <li>
          <button type="button" className="w-full text-left px-3 py-2 hover:bg-[#121212] hover:text-white text-lg rounded-2xl cursor-pointer border border-gray-300">
            Log out
          </button>
        </li>
      </ul>

      <div className="col-span-2">
        <div className="w-30 h-30 rounded-full relative overflow-hidden">
          <Image
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="profile picture"
            fill
            loading="eager"
            sizes="120px"
            className="object-cover"
          />
          <RiEditBoxFill className="absolute right-5 bottom-0 text-3xl cursor-pointer z-10 text-white" />
        </div>

        <div className="flex justify-between mt-5">
          <label>
            <span className="font-bold">First Name</span>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="John"
              className="
                p-2 
                mt-1
                flex
                w-[20vw]
                border 
                rounded-2xl
                border-gray-400 
              "
            />
          </label>

          <label>
            <span className="font-bold">Last Name</span>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Doe"
              className="
                p-2 
                mt-1
                flex
                w-[20vw]
                border 
                mb-5
                rounded-2xl
                border-gray-400 
              "
            />
          </label>
        </div>

        <label htmlFor="mobile" className="w-full">
          <span className="font-bold">Phone</span>
          <input
            type="text"
            name="mobile"
            id="mobile"
            placeholder="Enter your mobile number"
            className="
              p-2 
              mt-1
              flex
              w-full
              border 
              mb-5
              rounded-2xl
              border-gray-400 
            "
          />
        </label>

        <label htmlFor="email" className="w-full">
          <span className="font-bold">Email</span>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email address"
            className="
              p-2 
              mt-1
              flex
              w-full
              border 
              mb-5
              rounded-2xl
              border-gray-400 
            "
          />
        </label>

        <label htmlFor="gender" className="block">
          <span className="font-bold">Gender</span>

          <div className="relative w-full">
            <select
              id="gender"
              name="gender"
              defaultValue=""
              className="
                p-2 
                mt-1
                w-full
                border 
                mb-5
                outline-none
                rounded-2xl
                border-gray-400
                appearance-none
              "
            >
              <option value="" hidden disabled>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>

            <div className="pointer-events-none absolute inset-y-0 right-3 top-2.5 flex items-center mb-5">
              <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-black"></div>
            </div>
          </div>
        </label>

        <button className="bg-[#121212] py-2 px-4 text-white rounded-2xl text-lg hover:scale-[1.02] cursor-pointer duration-200 transition-all">Update Changes</button>
      </div>
    </main>
  );
};