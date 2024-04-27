import ProductsGallery from "../../../../components/ProductsGallery";
import Search from "../../../../components/Search";
import "../../../../styles/home.css";
import Logout from "../../../../components/Logout";

async function Home() {
  // const [isSorted, setIsSorted] = useState(false);
  // const [productsList, setProductsList] = useState([]);
  // useEffect(() => {
  //   fetch("https://dummyjson.com/products")
  //     .then((res) => res.json())
  //     .then((res) => setProductsList(res.products));
  // }, []);
  // const handleSortClick = () => {
  //   setProductsList(
  //     isSorted
  //       ? productsList
  //       : productsList.slice().sort((a, b) => a.title.localeCompare(b.title))
  //   );
  //   setIsSorted(!isSorted);
  // };
  // const debounceHandler = (value) => {
  //   setTimeout(() => {
  //     const filteredProducts = productsList.filter((product) =>
  //       product.title.toLowerCase().includes(value.toLowerCase())
  //     );
  //     setProductsList(filteredProducts);
  //   }, 1500);
  // };
  // return (
  //   <>
  //     <Search
  //       onSort={handleSortClick}
  //       onSearch={debounceHandler}
  //       isSorted={isSorted}
  //     />
  //     <ProductsGallery products={productsList} />
  //   </>
  // );
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  const productsArr = data.products;

  return <ProductsGallery products={productsArr} />;
}

export default Home;
