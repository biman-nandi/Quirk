// NavBar Menu Data
export type MenuItemProps = {
  title: string
  slug: string
}

export type MenuSectionProps = {
  heading: string
  slug: string
  items: MenuItemProps[]
}

export type MenuDataProps = {
  title: string
  section1: MenuSectionProps[]
  section2?: MenuSectionProps[]
  section3?: MenuSectionProps[]
  section4?: MenuSectionProps[]
  section5?: MenuSectionProps[]
}


// Footer Data
export type FooterDataProps = {
  heading: string
  links: MenuItemProps[]
}


// Explore Collection Data
export type exploreCollectionProps = {
  id: number
  url: string
  alt: string
  title: string
  slug: string
}


// Other Carousel Data
export type CarouselProps = {
  id: number
  url: string
  title: string
  offer?: number
  price: number
  brand: string
  category: string
}


// products Data
export type ProductsProps = {
  id: number,
  title: string,
  rating: number,
  rating_average: number,
  reviews: number,
  rating_count: number,
  brand: string,
  price: number,
  originalPrice: number,
  thumbnail: string,
  images: string[],
  category: string,
  description: string
}


// Blogs
export type BlogProps = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  qa: {
    question: string,
    answer: string
  }[];
  author: string;
  authorAvatar: string;
  category: string;
  tags: string[];
  coverImage: string;
  readTime: number;
  publishedAt: string;
  featured: boolean;
}