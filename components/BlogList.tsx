import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Recipes, BlogsResponse } from "../types/types";
async function BlogList() {
  const response = await fetch("https://dummyjson.com/recipes");
  const data: BlogsResponse = await response.json();
  const blogData: Recipes[] = data.recipes;

  // const t = useTranslations("Blog"); -- Error: `useTranslations` is not callable within an async component
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
