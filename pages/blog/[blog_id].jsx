import Navbar from "@/components/Navbar/Navbar";
import { useRouter } from "next/router";
import { authors } from "@/constants/authors";
import { BLOGS } from "@/constants/blogs";
import Image from "next/image";

export default function Blog() {
  const id = useRouter().query.blog_id;
  console.log(id, BLOGS[id], authors[id]);
  return (
    id && (
      <div className="flex flex-col tracking-tighter">
        <Navbar />
        <hr className="m-1" />
        <div className="flex flex-col m-auto mb-12">
          <div className="flex items-center">
            {console.log(authors[id])}
            <Image src={authors[id].image} alt="author image" width={48} height={48} className="rounded-full" />
            <div className="flex flex-col">
              <p className="text-md font-semibold mx-2">{authors[id].name}</p>
              <div className="flex opacity-50">
                <p className="text-sm mx-2">{new Date(BLOGS[id].cratedAt).toDateString()}</p>
                <p className="text-sm mx-2">{BLOGS[id].approxReadTime} read</p>
              </div>
            </div>
          </div>
          <div className="mt-6 mb-10">
            <h1 className="font-bold text-3xl max-w-2xl">{BLOGS[id].title}</h1>
            <h2 className="max-w-2xl pt-1 text-2xl opacity-50">{BLOGS[id].description}</h2>
          </div>
          <div className="flex justify-between">
            <div className=" max-w-2xl">
              <Image src={BLOGS[id].mainImage} alt="blog image" width={640} height={480} />
              <p className="text-xl opacity-70 tracking-normal mt-6">{BLOGS[id].content.intro}</p>
              <div>
                {BLOGS[id].content.sections.map((section) => (
                  <div key={section.title}>
                    <h2 className="font-bold text-2xl mt-6">{section.title}</h2>
                    {section.contents.map((content, idx) => (
                      <div key={content}>
                        <p className="text-xl opacity-70 tracking-normal mt-2">{content}</p>
                        {section.images[idx] && (
                          <Image src={section.images[idx]} alt="blog image" width={640} height={480} />
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
