import Link from "next/link";
import Image from "next/image";
import { blogsData } from "@/data/blogsData";
import { formatedDate } from "@/utils";

import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";



export default async function SelectedBlogPage({
  params
}: {
  params: Promise<{ blogSlug: string[] }>
}) {
  const { blogSlug } = await params
  const id = Number(blogSlug[blogSlug.length - 1])
  const filteredBlog = blogsData.find(blog => blog.id === Number(id))

  const relatedBlogs = [
    ...blogsData.slice(id + 1),
    ...blogsData.slice(0, id)
  ].slice(0, 6)

  const visibilityClasses = [
    "",
    "hidden sm:block",
    "hidden 902:block",
    "hidden 1192:block",
    "hidden 1679:block",
    "hidden 2120:block"
  ]

  if (!filteredBlog)
    return <div>Blog not found</div>

  return (
    <div className="mt-10 mb-15 px-3 sm:px-5 md:px-[5%] font-(family-name:--font-sanchez)">
      <p className="uppercase mb-4 sm:mb-8 text-xs tracking-widest">
        <Link href='/blogs' className="hover:underline">Blog</Link>
        {' > '}
        <span>Blog Details</span>
      </p>

      <div className="border-b-2 border-gray-300 rounded-lg pb-3">
        <div className="w-full h-50 sm:h-100 relative">
          <Image
            src={filteredBlog?.coverImage}
            alt={filteredBlog.title}
            fill
            className="object-cover rounded-lg"
          />

          <h1 className="font-(family-name:--font-arvo) text-sm sm:text-xl md:text-2xl text-white font-bold tracking-wider absolute left-5 bottom-4 z-105 w-[75%] line-clamp-4">
            {filteredBlog?.title}
          </h1>
        </div>

        <div className="mt-5 flex justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div>
              <Image
                src={filteredBlog.authorAvatar}
                alt={filteredBlog.author}
                height={40}
                width={40}
                className="rounded-full"
              />
            </div>

            <div>
              <div className="text-green-900 font-bold tracking-wider">
                {filteredBlog.author}
              </div>

              <div className="text-gray-500">
                {formatedDate(filteredBlog.publishedAt)}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-gray-300 rounded-2xl px-3 py-1">{filteredBlog.tags.map((ele, idx) => `${ele}${idx !== filteredBlog.tags.length - 1 ? ' | ' : ""}`)}</div>
            <div>{filteredBlog.readTime} min read</div>
          </div>

          <div>
            <div className="text-green-900 font-bold">
              Share this post
            </div>

            <div className="flex gap-4 mt-3">
              <a href="https://instagram.com" target="_blank">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="https://x.com" target="_blank">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="https://facebook.com" target="_blank">
                <FaFacebook className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        {filteredBlog.qa.map((item, idx) => (
          <div key={idx}>
            <div className="font-(family-name:--font-arvo) text-sm sm:text-xl md:text-2xl text-green-900 font-bold tracking-wider line-clamp-4 my-5">
              {item.question}
            </div>

            <div className="text-gray-500 my-2.5">
              {item.answer}
            </div>
          </div>
        ))}
      </div>

      <h1 className="mt-20 my-b font-(family-name:--font-arvo) text-sm sm:text-xl md:text-2xl text-green-950 font-bold tracking-wider line-clamp-4">Other Popular Post</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 902:grid-cols-3 1192:grid-cols-4 1679:grid-cols-5 2120:grid-cols-6 justify-items-center gap-3 sm:mt-5 sm:px-5">
        {
          relatedBlogs.map((blog, idx) => (
            <div 
              key={blog.id} 
              className={`w-full max-w-100 min-h-110 sm:border border-gray-300 rounded-md p-5 ${visibilityClasses[idx] ?? "hidden"}`}
            >
              <div className="w-full h-[50%] relative mb-4">
                <Image
                  src={blog.coverImage}
                  alt={blog.author}
                  fill
                  loading='eager'
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="rounded-md object-cover"
                />
              </div>

              <div className="flex items-center text-sm">
                <p className="text-gray-400 mr-2">{formatedDate(blog.publishedAt)}</p>
                <p className="text-green-900">By {blog.author}</p>
              </div>

              <h6 className="text-base my-2.5 text-green-950 line-clamp-2">{blog.title}</h6>

              <p className="text-sm mb-1 line-clamp-3">{blog.excerpt}</p>

              <Link href={`/blogs/${blog.slug}/${blog.id}`} className="text-yellow-400 hover:text-yellow-500 text-sm my-2.5 cursor-pointer">
                <span>Learn More</span>
                <FaArrowRight className="inline ml-2" />
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
};