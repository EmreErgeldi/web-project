import BlogPreviewer from "@/components/Blog/BlogPreviewer";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <hr className="m-1" />
      <BlogPreviewer />
    </div>
  );
}
