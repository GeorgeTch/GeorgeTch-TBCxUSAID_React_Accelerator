import Image from "next/image";
import Link from "next/link";
import "../../../../../styles/home.css";
import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Products, ProductsResponse } from "../../../../../types/types";

export async function generateStaticParams() {
  const response = await fetch("https://dummyjson.com/products");
  const data: ProductsResponse = await response.json();
  const products = data.products;

  return products.map((product) => ({ id: product.id.toString() }));
}

async function ProductItemPage({ params }) {
  // const t = useTranslations("Index"); -- error :  Expected a suspended thenable. why?
  unstable_setRequestLocale(params.locale);
  const response = await fetch(`https://dummyjson.com/products/${params.id}`);
  const item = await response.json();

  return (
    <div className="product-page">
      <Link href={"/"}>
        <button>Go Back</button>
      </Link>

      <div className="product">
        <Image
          loading="lazy"
          src={item.images && item.images[0]}
          alt={item.title}
          width={300}
          height={200}
        />

        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductItemPage;
