import BlogPreviewer from "@/components/Blog/BlogPreviewer";
import Navbar from "@/components/Navbar/Navbar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function user() {
  const id = useRouter().query.user_id;
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    const res = await fetch("https://localhost:7030/api/Blog/user/" + id);
    const data = await res.json();
    console.log(data);
    setBlogs(data);
  };

  useEffect(() => {
    if (id > 0) getBlogs(id);
  }, [id]);

  return (
    <div className="flex flex-col items-center">
      <Navbar isLoggedIn={true} />
      <hr className="m-1" />
      <BlogPreviewer blogs={blogs} withDelete={true} />
    </div>
  );
}
