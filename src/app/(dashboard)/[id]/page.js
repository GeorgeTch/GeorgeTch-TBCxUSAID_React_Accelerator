"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "../../../../public/styles/home.css";

function ProductItemPage({ params }) {
  const [item, setItem] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://dummyjson.com/products/${params.id}`
      );
      const data = await response.json();
      setItem(data);
      console.log(data);
    }
    fetchData();
  }, [params.id]);
  return (
    <div className="product-page">
      <Link href={"/"}>
        <button>Go Back</button>
      </Link>
      <div className="product">
        {/* <div className="product-img-container"> */}
        <Image
          loading="lazy"
          src={item.images && item.images[0]}
          alt={item.title}
          width={300}
          height={200}
        />
      </div>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <button>Add to Cart</button>
      {/* </div> */}
    </div>
  );
}

export default ProductItemPage;
