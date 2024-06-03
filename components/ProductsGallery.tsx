import ProductCard from "./ProductCard";
import { Product } from "../types/types";

export default function ProductsGallery({ products }) {
  return (
    <div className="products-container flex items-center ">
      {products.map((product: Product, id: number) => (
        <ProductCard key={id} {...product} />
      ))}
    </div>
  );
}
