import Navbar from "@/components/Navbar/Navbar";
import { useRouter } from "next/router";
import { authors } from "@/constants/authors";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  const loaderProp = ({ src }) => {
    return src;
  };
  const id = useRouter().query.blog_id;

  const getBlogs = async (id) => {
    const res = await fetch("https://localhost:7030/api/Blog/" + id);
    const blog = await res.json();
    let sections = {
      subTitles: blog.subTitles ? blog.subTitles.split(" || ") : [],
      paragraphs: blog.paragraphs ? blog.paragraphs.split(" || ") : [],
      images: blog.extraImages ? blog.extraImages.split(" || ") : [],
    };

    let BlogObj = {
      id: blog.id,
      title: blog.title,
      description: blog.description,
      enteranceText: blog.enteranceText,
      mainImage: blog.mainImage,
      contents: sections.subTitles?.map((subTitle, index) => {
        return {
          title: subTitle,
          paragraphs: sections.paragraphs[index] ? sections.paragraphs[index].split(" \\/ ") : null,
          image: sections.images[index] ? sections.images[index] : null,
        };
      }),
      createdAt: blog.createdAt,
      createdBy: blog.createdBy,
      approxReadTime: blog.approxReadTime,
      tags: blog.tags?.split(" || "),
    };
    setBlogs(BlogObj);
  };

  useEffect(() => {
    if (id > 0) getBlogs(id);
  }, [id]);

  return (
    id &&
    blogs.id && (
      <div className="flex flex-col tracking-tighter">
        <Navbar />
        <hr className="m-1" />
        <div className="flex flex-col m-auto mb-12">
          <div className="flex items-center">
            <Image
              src={
                authors[blogs.createdBy - 1].image
                  ? authors[blogs.createdBy - 1].image
                  : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }
              alt="author image"
              width={48}
              height={48}
              className="rounded-full"
              loader={loaderProp}
            />
            <div className="flex flex-col">
              <p className="text-md font-semibold mx-2">{authors[blogs.createdBy - 1].name}</p>
              <div className="flex opacity-50">
                <p className="text-sm mx-2">{new Date(blogs.createdAt).toDateString()}</p>
                <p className="text-sm mx-2">{blogs.approxReadTime} read</p>
              </div>
            </div>
          </div>
          <div className="mt-6 mb-10">
            <h1 className="font-bold text-3xl max-w-2xl">{blogs.title}</h1>
            <h2 className="max-w-2xl pt-1 text-2xl opacity-50">{blogs.description}</h2>
          </div>
          <div className="flex justify-between">
            <div className=" max-w-2xl">
              {blogs.mainImage && (
                <Image src={blogs.mainImage} alt="blog image" width={640} height={480} loader={loaderProp} />
              )}
              <p className="text-xl opacity-70 tracking-normal mt-6">{blogs.enteranceText}</p>
              <div>
                {blogs.contents.map((section) => (
                  <div key={section.title}>
                    <h2 className="font-bold text-2xl mt-6">{section.title}</h2>
                    {section.paragraphs.map((content, idx) => (
                      <div key={idx}>
                        <p className="text-xl opacity-70 tracking-normal mt-2">{content}</p>
                        {section.image && idx === 0 && (
                          <Image src={section.image} alt="blog image" width={640} height={480} loader={loaderProp} />
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
