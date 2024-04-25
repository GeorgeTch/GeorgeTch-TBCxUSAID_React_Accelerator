import Blog from "@/app/(dashboard)/blog/page";
import Image from "next/image";
import Link from "next/link";

async function BlogList() {
  const response = await fetch("https://dummyjson.com/recipes");
  const data = await response.json();
  const blogData = data.recipes;
  return (
    <div className="blog-list-container">
      {blogData.map((blog) => (
        <div key={blog.id} className="blog-item">
          <div className="image-container">
            <Image
              src={blog.image}
              alt={blog.name}
              className="blog-item-photo"
              width={300}
              height={200}
            />
          </div>
          <div>
            <div className="blog-item-details">
              <h2 className="blog-item-title">{blog.name}</h2>
              <p className="blog-item-description">{blog.instructions}</p>
              <p className="blog-item-publish-date">Rating: {blog.rating}</p>
              <Link href={`/blog/${blog.id}`}>
                <button className="blog-item-read-more">Read More</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
