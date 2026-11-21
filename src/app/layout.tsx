import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import localFont from 'next/font/local'
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const helveticaNeue = localFont({
  src: '../../public/fonts/Helvetica Neue LT W05 55 Roman.woff2',
  display: 'swap',
})

const agravePro = localFont({
  src: '../../public/fonts/AgraveProSC-Bold.ttf',
  display: 'swap',
  variable: '--font-agrave-pro'
})


export const metadata: Metadata = {
  title: "Online shopping site for fashion, gadgets, home essentials, beauty products, and everyday essentials. Quirk brings you a wide range of products at great prices, making shopping easier, smarter, and more convenient.",
  description: "Discover the latest in fashion, electronics, beauty, and home essentials at Quirk. Shop quality products at great prices and enjoy a seamless online shopping experience.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(helveticaNeue.className, agravePro.variable, "font-sans", geist.variable)}
    >
      <body>
        <Navbar />
        
        {children}

        <Footer />
      </body>
    </html>
  );
}
