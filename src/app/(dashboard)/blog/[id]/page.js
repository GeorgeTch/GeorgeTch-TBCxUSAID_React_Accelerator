"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import "../../../../../public/styles/blog.css";

function ItemPage({ params }) {
  const [item, setItem] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://dummyjson.com/recipes/${params.id}`
      );
      const data = await response.json();
      setItem(data);
      console.log(data);
    }
    fetchData();
  }, [params.id]);

  return (
    <>
      <Head>
        <link rel="preload" href={item.image} as="image" />
      </Head>
      <div className="blog-item-page">
        <div className="image-container">
          <Image
            src={item.image}
            alt={item.name}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div>
          <div className="blog-item-details">
            <h2 className="blog-item-title">{item.name}</h2>
            <p className="blog-item-description">{item.ingredients}</p>
            <p className="blog-item-description">{item.instructions}</p>
            <p className="blog-item-publish-date">Rating: {item.rating}</p>
            <Link href={"/blog"}>
              <button className="blog-item-read-more">
                Return to the Blog Page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemPage;
