import Image from "next/image";
import Link from "next/link";
import { Product } from "../types/types";
import AddToCartBtn from "./AddToCartBtn";

export default function ProductCard({
  id,
  title,
  description,
  images,
}: Product) {
  // const t = useTranslations("Index.Product");

  return (
    <div className="flex flex-col justify-between items-center h-full p-10 pt-5 pr-6 pb-6 border-r border-b border-gray-500 ">
      <Link className="text-inherit flex flex-col gap-2" href={`/${id}`}>
        <div>
          <Image src={images[0]} alt={title} width={250} height={200} />
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
      </Link>

      <AddToCartBtn id={id} />
    </div>
  );
}
