import { useState, useEffect } from "react";
import Header from "@component/Header/Header";
import Banner from "@component/Banner/Banner";
import Info from "@component/Info/Info";
import AdvanceHeadling from "@component/AdvanceHeadling/AdvanceHeadling";
import HeadlingListProduct from "@component/HeadlingListProduct/HeadlingListProduct";
import { getProducts } from "@api/productService";
import PopularProduct from "@component/PopularProduct/PopularProduct";
import SaleHomepage from "@component/SaleHomepage/SaleHomepage";
import Footer from "@component/Footer/Footer";
function HomePage() {
  const [listProduct, setListProduct] = useState([]);
  useEffect(() => {
    getProducts().then((res) => {
      setListProduct(res.contents);
    });
  }, []);
  return (
    <>
      <Header />
      <Banner />
      <Info />
      <AdvanceHeadling />
      <HeadlingListProduct data={listProduct.slice(0, 2)} />
      <PopularProduct data={listProduct.slice(2, 10)} />
      <SaleHomepage />
      <Footer />
    </>
  );
}

export default HomePage;
