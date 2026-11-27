import Image from "next/image";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import Link from "next/link";

export default async function NotFoundPage() {
  return (
    <div>
      <NavBar />

      <main className="mt-0.5 py-5 flex justify-center flex-col items-center bg-white overflow-hidden">
        <h1 className="text-2xl text-center font-black mb-5 lg:mb-2.5">Hmm... Where did this page go?</h1>

        <p className="max-w-md px-4 text-center text-sm leading-6 text-gray-500">
          Looks like we can't find what you're looking for. The page might have moved or doesn't exist anymore. Let's get you back on track!
        </p>

        <div className="mt-5 lg:mt-2.5 w-[90vw] sm:w-[75vw] lg:w-[50vw] aspect-3/2 relative">
          <Image
            src="/images/404.png"
            alt="Error page illustration"
            fill
            priority
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 75vw, 50vw"
            className="object-contain"
          />
        </div>

        <Link
          href='/'>
          <button className="mt-5 lg:mt-2.5 rounded bg-brand px-3 py-1.5 sm:px-6 sm:py-3 text-sm font-semibold text-white transition hover:bg-[#066B4D] cursor-pointer">
            Back to Home
          </button>
        </Link>
      </main>

      <Footer />
    </div>
  );
};