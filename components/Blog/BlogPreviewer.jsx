import { authors } from "@/constants/authors";
import { Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function BlogPreviewer({ blogs, withDelete }) {
  const loaderProp = ({ src }) => {
    return src;
  };
  return blogs.map((blog, i) => (
    <div key={blog.id} className="pb-2 m-3 max-w-3xl min-w-[756px]">
      <hr />
      <div className="flex items-center">
        <Image
          src={
            authors[blog.createdBy - 1].image
              ? authors[blog.createdBy - 1].image
              : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          }
          alt="author image"
          width={24}
          height={24}
          className="rounded-full"
          loader={loaderProp}
        />
        <p className="text-sm mx-2">{authors[blog.createdBy - 1].name}</p>
        <span className="opacity-50 pb-1">.</span>
        <p className="text-sm mx-2">{new Date(blog.createdAt).toDateString()}</p>
        {withDelete && (
          <div className="flex items-center">
            <IconButton
              onClick={() => {
                fetch("https://localhost:7030/api/Blog/" + blog.id, {
                  method: "DELETE",
                });
                window.location.reload();
              }}
            >
              <Delete />
            </IconButton>
          </div>
        )}
      </div>
      <Link href={`/blog/${blog.id}`}>
        <div className="flex justify-between hover:cursor-pointer">
          <div className="h-28">
            <h1 className="font-bold text-2xl max-w-xl">{blog.title}</h1>
            <p className="text-ellipsis max-w-xl pt-1 line-clamp-2">
              {blog.description} - {blog.enteranceText}
            </p>
          </div>
          {blog.mainImage && (
            <Image
              src={blog.mainImage}
              alt="blog image"
              width={112}
              height={112}
              loader={loaderProp}
              crossOrigin="anonymous"
            />
          )}
        </div>
      </Link>
      <div className="m-4">
        {blog.tags?.split(" || ").map((tag) => (
          <span key={tag} className="text-xs text-black bg-gray-200 p-1 mx-1 rounded-2xl">
            {tag} &nbsp;
          </span>
        ))}
        <span className="text-sm mx-2"> {blog.approxReadTime} min read</span>
      </div>
    </div>
  ));
}
