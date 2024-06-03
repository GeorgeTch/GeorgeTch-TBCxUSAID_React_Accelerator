import { getCartItems } from "../src/app/api/api-functions";
import CartItem from "./CartItem";
import ResetCartBtn from "./ResetCartBtn";

interface Item {
  id: number;
  quantity: number;
  productid: number;
}
export const revalidate = 0;

export default async function CartGallery() {
  // await new Promise(resolve => setTimeout(resolve, 1500))
  const cartItems = await getCartItems();
  return (
    <div className="min-h-screen dark:bg-slate-700 p-4 flex flex-col items-center">
      {cartItems.length > 0 ? <ResetCartBtn /> : "Currently the Cart is empty"}
      <div className="flex flex-col place-items-center gap-10 dark:bg-slate-700 w-full">
        {cartItems.map((item: Item) => (
          <CartItem
            key={item.productid}
            productId={item.productid}
            quantity={item.quantity}
          />
        ))}
      </div>
    </div>
  );
}
