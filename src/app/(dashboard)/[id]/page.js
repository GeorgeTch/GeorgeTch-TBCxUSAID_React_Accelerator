import Image from "next/image";
import Link from "next/link";
import "../../../../public/styles/home.css";

export async function generateStaticParams() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  const products = data.products;

  return products.map((product) => ({ id: product.id.toString() }));
}

async function ProductItemPage({ params }) {
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
