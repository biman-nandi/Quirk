import { FooterDataProps } from "@/types"

export const footerData: FooterDataProps[] = [
  {
    heading: "Shop",
    links: [
      { title: "SHOP ALL", slug: "/collections" },
      { title: "MEN", slug: "/collections/men" },
      { title: "WOMEN", slug: "/collections/women" },
      { title: "KIDS", slug: "//collectionskids" },
      { title: "ACCESSORIES", slug: "/collections/accessories" },
    ],
  },
  {
    heading: "Help",
    links: [
      { title: "FAQ", slug: "/faq" },
      { title: "ORDER TRACK", slug: "/track-order" },
      { title: "RETURNS", slug: "/returns" },
      { title: "SHIPPING", slug: "/shipping" },
      { title: "CONTACT US", slug: "/contact-us" },
    ],
  },
  {
    heading: "Company",
    links: [
      { title: "ABOUT US", slug: "/about" },
      { title: "CAREERS", slug: "/careers" },
      { title: "STORE LOCATOR", slug: "/stores" },
      { title: "BLOG", slug: "/blogs" },
      { title: "ACCESSIBILITY", slug: "/accessibility" },
    ],
  },
  {
    heading: "Account",
    links: [
      { title: "MY PROFILE", slug: "/profile" },
      { title: "MY ORDERS", slug: "/profile/orders" },
      { title: "WISHLIST", slug: "/wishlist" },
      { title: "COUPONS", slug: "/coupons" },
      { title: "SAVED ADDRESS", slug: "/profile/manage-address" },
    ],
  },
]