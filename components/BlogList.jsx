"use client";
import blogData from "./blogData";
import Image from "next/image";

function BlogList() {
  // const handleImageError = (event) => {
  //   event.target.onerror = null; // Prevent infinite loop in case the backup image also fails to load
  //   event.target.src =
  //     "https://images.unsplash.com/photo-1669568625853-9a5ae8de190e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXJyb3IlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D";
  // };
  return (
    <div className="blog-list-container">
      {blogData.map((blog) => (
        <div key={blog.id} className="blog-item">
          <img
            src={blog.photo}
            alt={blog.title}
            className="blog-item-photo"
            // onError={handleImageError}
          />
          <div className="blog-item-details">
            <h2 className="blog-item-title">{blog.title}</h2>
            <p className="blog-item-description">{blog.description}</p>
            <p className="blog-item-publish-date">
              Published on: {blog.publishDate}
            </p>
            <button href={blog.readMoreLink} className="blog-item-read-more">
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
