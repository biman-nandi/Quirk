import { blogsData } from "@/data/blogsData";
import Image from "next/image";
import { MdOutlineDateRange, MdAccessTime } from "react-icons/md";
import Link from "next/link";
import { formatedDate } from "@/utils";

export default function BlogPage() {
    return (
    <div className="grid grid-cols-1 sm:grid-cols-2 902:grid-cols-3 1192:grid-cols-4 1679:grid-cols-5 2120:grid-cols-6 justify-items-center gap-3 sm:mt-5 sm:px-5 mb-15">
      {
        blogsData.map(blog => (
          <div key={blog.id} className="w-full max-w-100 min-h-125 sm:border border-gray-300 rounded-md p-7">
            <div className="w-full aspect-square relative mb-4">
              <Image
                src={blog.coverImage}
                alt={blog.author}
                fill
                loading='eager'
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="rounded-md object-cover"
              />
            </div>

            <div className="flex items-center gap-1 sm:gap-3 text-gray-500 text-xs ">
              <div className="flex items-center gap-1.5 border border-gray-300 rounded-2xl py-1 px-2 sm:px-4">
                <MdOutlineDateRange />
                <span>{formatedDate(blog.publishedAt)}</span>
              </div>

              <div className="flex items-center gap-1.5 border border-gray-300 rounded-2xl py-1 px-2 sm:px-4">
                <MdAccessTime />
                {blog.readTime}
                <span>min</span>
              </div>
            </div>

            <h1 className="font-(family-name:--font-sanchez) text-2xl my-3 line-clamp-3">
              {blog.title}
            </h1>

            <p className="font-(family-name:--font-arvo) mb-5 text-base text-gray-500 line-clamp-2">
              {blog.excerpt}
            </p>

            <Link href={`/blogs/${blog.slug}/${blog.id}`}>
              <button
                type="button"
                className="font-(family-name:--font-arvo) border-2 border-gray-300 hover:bg-gray-200 py-2 px-4 cursor-pointer"
              >
                Read more
              </button></Link>
          </div>
        ))
      }
    </div>
  );
};