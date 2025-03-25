import Layout from "@component/Layout/Layout";
import CountdownBanner from "@component/CountdownBanner/CountdownBanner";
import styles from "./HeadlingListProduct.module.scss";
import ProductItem from "@component/ProductItem/ProductItem";

function HeadlingListProduct({ data }) {
  const { container, containerItem } = styles;
  return (
    <Layout>
      {/* <CountdownTimer targetDate={targetDate} /> */}
      <div className={container}>
        <CountdownBanner />
        <div className={containerItem}>
          {data.map((item) => (
            <ProductItem
              key={item.id}
              src={item.images[0]}
              prevSrc={item.images[1]}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default HeadlingListProduct;
