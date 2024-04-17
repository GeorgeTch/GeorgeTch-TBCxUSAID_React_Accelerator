"use client";
import { useEffect, useState } from "react";
import blogData from "./blogData";
import Image from "next/image";
import Link from "next/link";

function BlogList() {
  // const handleImageError = (event) => {
  //   event.target.onerror = null; // Prevent infinite loop in case the backup image also fails to load
  //   event.target.src =
  //     "https://images.unsplash.com/photo-1669568625853-9a5ae8de190e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXJyb3IlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D";
  // };
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((res) => setBlogData(res.recipes));
  }, []);

  return (
    <div className="blog-list-container">
      {blogData.map((blog) => (
        <div key={blog.id} className="blog-item">
          <div className="image-container">
            <Image
              src={blog.image}
              alt={blog.name}
              className="blog-item-photo"
              width={400}
              height={200}
              objectFit="cover"
              objectPosition="center"
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
