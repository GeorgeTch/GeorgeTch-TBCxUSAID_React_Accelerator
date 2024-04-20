import "../globals.css";
import Header from "../../../public/components/Header";
import Footer from "../../../public/components/Footer";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Logout from "../../../public/components/Logout";

export default async function DashLayout({ children }) {
  const cookiesStore = cookies();
  const cookie = cookiesStore.get("auth");
  console.log("coockie on layout page: ", cookie);
  if (!cookie) {
    console.log("redirect from layout to login nocoockie");
    redirect("/login");
  }
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
