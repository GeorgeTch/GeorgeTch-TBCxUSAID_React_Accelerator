import Image from "next/image";

function Product({ title, description, images }) {
  return (
    <div className="product">
      <div className="product-img-container">
        <Image
          src={images[0]}
          alt={title}
          fill
          // sizes="(max-width: 600px) 300px, 400px"
        />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default function ProductsGallery({ products }) {
  return (
    <div className="products-container">
      {products.map((product, idx) => (
        <Product key={idx} {...product} />
      ))}
    </div>
  );
}
