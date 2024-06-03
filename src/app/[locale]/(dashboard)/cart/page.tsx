import CartGallery from "../../../../../components/CartGallery";

export const revalidate = 0;
export default async function Cart() {
  return (
    <div className=" dark:bg-slate-700 flex justify-center items-center">
      <section className="overflow-y-auto h-[full] py-[50px]">
        <CartGallery />
      </section>
    </div>
  );
}
