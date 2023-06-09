import BlogPreviewer from "@/components/Blog/BlogPreviewer";
import Navbar from "@/components/Navbar/Navbar";
import { useEffect, useState } from "react";

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    const res = await fetch("https://localhost:7030/api/Blog");
    const data = await res.json();
    console.log(data);
    setBlogs(data);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <hr className="m-1" />
      <BlogPreviewer blogs={blogs} />
    </div>
  );
}
