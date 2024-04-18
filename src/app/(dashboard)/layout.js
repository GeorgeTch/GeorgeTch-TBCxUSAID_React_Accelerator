import "../globals.css";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function DashLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
