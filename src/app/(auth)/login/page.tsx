import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center h-screen relative bg-[#EAF2EE]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 sm:left-10 sm:translate-x-0">
        <div className="relative h-25 w-35 sm:h-30 sm:w-45">
          <Image
            src="/logo.png"
            alt="Quirk-logo"
            fill
            priority
            sizes="(max-width: 640px) 140px, 180px"
            className="object-contain"
          />
        </div>
      </div>

      <div className="w-[90%] max-w-xl h-fit p-5 sm:p-8 lg:p-10 shadow-md shadow-gray-400 rounded-md bg-white">
        <h6 className="text-2xl font-bold text-center">Login <span className="font-normal">or</span> Signup</h6>
        <p className="text-gray-600 tracking-wide text-center pt-3 pb-7">One OTP is all you need. Enter your email or phone number to securely access your account or create a new one instantly.</p>

        <div>
          <label htmlFor="contact">Email or Phone</label>

          <input
            type="text"
            id="contact"
            name="contact"
            placeholder="example@mail.com or 1234567890"
            required
            pattern="^([^\s@]+@[^\s@]+\.[^\s@]+|[6-9][0-9]{9})$"
            title="Enter a valid email address or a 10–15 digit phone number"
            className="w-full outline-none border border-gray-400 my-4 p-2 bg-gray-300 rounded"
          />

          <button type="submit" className="w-full bg-brand text-white py-3 rounded mt-1.5 cursor-pointer hover:bg-[#066B4D] active:scale-[0.98] transition-all duration-300">Get OTP</button>
        </div>
      </div>
    </div>
  );
};