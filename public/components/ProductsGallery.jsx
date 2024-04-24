import Image from "next/image";
import Link from "next/link";

function Product({ id, title, description, images }) {
  return (
    <div className="product">
      <div className="product-img-container">
        <Image src={images[0]} alt={title} width={250} height={200} />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <Link href={`/${id}`}>
        console.log(title);
        <button>Add to Cart</button>
      </Link>
    </div>
  );
}

export default function ProductsGallery({ products }) {
  return (
    <div className="products-container">
      {products.map((product, id) => (
        <Product key={id} {...product} />
      ))}
    </div>
  );
}
