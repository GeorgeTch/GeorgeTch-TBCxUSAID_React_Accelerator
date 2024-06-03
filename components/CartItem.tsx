import Image from "next/image";
import CartActions from "./CartActions";
// import IncreaseItemQuantity from "./IncreaseItemQuantity";
// import DecreaseItemQuantity from "./DecreaseItemQuantity";
// import ItemQuantity from "./ItemQuantity";
// import RemoveCartItem from "./RemoveCartItem";

// export const revalidate = 0;

export default async function CartItem({
  productId,
  quantity,
}: {
  productId: number;
  quantity: number;
}) {
  const response = await fetch(`https://dummyjson.com/products/${productId}`);
  const product = await response.json();
  return (
    <div className="flex flex-row items-center  dark:bg-slate-500 rounded-xl cursor-pointer">
      <div className="p-2">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={150}
          height={150}
          className="rounded-lg  object-cover"
        />
      </div>
      <div className="px-4 py-8 pb-2">
        <h2 className="text-lg">{product.title}</h2>
        <p className="font-semibold">Price</p>
        <p>{product.price}$</p>
        <p className="font-semibold">Rating</p>
        <p>{product.rating}</p>
        <div className="flex mt-5 w-full justify-center">
          <div className="flex items-center mr-2">
            Quantity:
            <span className="ml-2">{quantity}</span>
          </div>
          <CartActions id={product.id} />
        </div>
      </div>
      {/* <RemoveCartItem id={product.id} /> */}
    </div>
  );
}
