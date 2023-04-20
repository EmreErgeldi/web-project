import { BLOGS } from "@/constants/blogs";
import { authors } from "@/constants/authors";
import Image from "next/image";
import Link from "next/link";

export default function BlogPreviewer() {
  return BLOGS.map(
    (blog, i) =>
      BLOGS && (
        <div key={blog.blog_id} className="pb-2 m-3 max-w-3xl min-w-[756px]">
          <hr />
          <div className="flex items-center">
            <Image src={authors[i].image} alt="author image" width={24} height={24} className="rounded-full" />
            <p className="text-sm mx-2">{authors[i].name}</p>
            <span className="opacity-50 pb-1">.</span>
            <p className="text-sm mx-2">{new Date(blog.cratedAt).toDateString()}</p>
          </div>
          <Link href={`/blog/${blog.blog_id}`}>
            <div className="flex justify-between hover:cursor-pointer">
              <div className="h-28">
                <h1 className="font-bold text-2xl max-w-xl">{blog.title}</h1>
                <p className="text-ellipsis max-w-xl pt-1 line-clamp-2">
                  {blog.description} - {blog.content.intro}
                </p>
              </div>
              <Image src={blog.mainImage} alt="blog image" width={112} height={112} />
            </div>
          </Link>
          <div className="m-4">
            {blog.tags.map((tag) => (
              <span key={tag} className="text-xs text-black bg-gray-200 p-1 mx-1 rounded-2xl">
                {tag} &nbsp;
              </span>
            ))}
            <span className="text-sm mx-2"> {blog.approxReadTime} read</span>
          </div>
        </div>
      )
  );
}
