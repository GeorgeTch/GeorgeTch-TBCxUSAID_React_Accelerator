import Image from "next/image";
import Link from "next/link";
import "../../../../../styles/home.css";
import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Product, ProductsResponse } from "../../../../../types/types";
import AddToCartBtn from "../../../../../components/AddToCartBtn";

export async function generateStaticParams() {
  const response = await fetch("https://dummyjson.com/products");
  const data: ProductsResponse = await response.json();
  const products = data.products;

  return products.map((product) => ({ id: product.id.toString() }));
}

async function ProductItemPage({ params }) {
  // const t = useTranslations("Index"); -- error :  Expected a suspended thenable. why?
  unstable_setRequestLocale(params.locale);
  try {
    const response = await fetch(`https://dummyjson.com/products/${params.id}`);
    let item;
    console.log(response.ok);
    if (response.ok) {
      item = await response.json();
    }

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
          <AddToCartBtn id={item.id} />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Invalid Product ID: ", error);
  }
}

export default ProductItemPage;
