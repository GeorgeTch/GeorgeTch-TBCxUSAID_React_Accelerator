import Link from "next/link";
import cartsvg from "../public/cart.svg";
import Image from "next/image";
import { getCartItems } from "../src/app/api/api-functions";

export default async function CartIcon() {
  const cart = await getCartItems();
  const cartQuantity = cart?.reduce(
    (acc: number, item: { quantity: number }) => acc + item.quantity,
    0
  );

  return (
    <Link href={"/cart"} className="bg-gray-100 p-2 rounded-xl relative">
      {cartQuantity > 0 && (
        <span className="font-bold bg-white rounded-full min-w-4 flex justify-center items-center text-red-500 text-sm absolute right-3 -top-1">
          {cartQuantity}
        </span>
      )}
      <Image src={cartsvg} alt="cart icon" width={30} height={30} />
    </Link>
  );
}
