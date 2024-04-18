"use client";
import { useState, useEffect } from "react";
// import productsData from "../../components/productsData";
import ProductsGallery from "../../../components/ProductsGallery";
import Search from "../../../components/Search";
import "/public/styles/home.css";

function Home() {
  const [isSorted, setIsSorted] = useState(false);
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setProductsList(res.products));
  }, []);

  const handleSortClick = () => {
    setProductsList(
      isSorted
        ? productsList
        : productsList.slice().sort((a, b) => a.title.localeCompare(b.title))
    );
    setIsSorted(!isSorted);
  };

  const debounceHandler = (value) => {
    setTimeout(() => {
      const filteredProducts = productsData.filter((product) =>
        product.title.toLowerCase().includes(value.toLowerCase())
      );
      setProductsList(filteredProducts);
    }, 1500);
  };

  return (
    <>
      <Search
        onSort={handleSortClick}
        onSearch={debounceHandler}
        isSorted={isSorted}
      />
      <ProductsGallery products={productsList} />
    </>
  );
}

export default Home;
