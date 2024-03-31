import { useState } from "react";
import productsData from "../components/productsData";
import Search from "../components/Search";
import ProductsGallery from "../components/ProductsGallery";
import "./Home.css";

function Home() {
  const [isSorted, setIsSorted] = useState(false);
  const [productsList, setProductsList] = useState(productsData);

  const handleSortClick = () => {
    setProductsList(
      isSorted
        ? productsData
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
