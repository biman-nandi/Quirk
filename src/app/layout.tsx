import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import { Arvo, Sanchez } from "next/font/google";
import { cn } from "@/lib/utils";


const helveticaNeue = localFont({
  src: '../../public/fonts/Helvetica Neue LT W05 55 Roman.woff2',
  display: 'swap',
})

const agravePro = localFont({
  src: '../../public/fonts/AgraveProSC-Bold.ttf',
  display: 'swap',
  variable: '--font-agrave-pro'
})

const sanchez = Sanchez({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-sanchez'
})

const arvo = Arvo({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-arvo'
})

export const metadata: Metadata = {
  title: "Online shopping site for fashion, gadgets, home essentials, beauty products, and everyday essentials. Quirk brings you a wide range of products at great prices, making shopping easier, smarter, and more convenient.",
  description: "Discover the latest in fashion, electronics, beauty, and home essentials at Quirk. Shop quality products at great prices and enjoy a seamless online shopping experience.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(helveticaNeue.className, agravePro.variable, "font-sans", arvo.variable, sanchez.variable)}
    >
      <body>
        {children}
      </body>
    </html>
  );
}
