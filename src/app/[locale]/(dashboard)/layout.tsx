import "../globals.css";
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Logout from "../../../../components/Logout";

export default async function DashLayout({ children }) {
  const cookiesStore = cookies();
  const cookie = cookiesStore.get("auth");
  // console.log("coockie on layout page: ", cookie);
  // if (!cookie) {
  //   console.log("redirect from layout to login nocoockie");
  //   redirect("/login");
  // }
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
