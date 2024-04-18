import "../globals.css";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function dashLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
