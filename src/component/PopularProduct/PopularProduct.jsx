import Layout from "@component/Layout/Layout";
import styles from "./PopularProduct.module.scss";
import ProductItem from "@component/ProductItem/ProductItem";

function PopularProduct({ data }) {
  const { container, itemClass } = styles;
  return (
    <Layout>
      <div className={container}>
        {data.map((item) => (
          <div className={itemClass} key={item.id}>
            <ProductItem
              src={item.images[0]}
              prevSrc={item.images[1]}
              name={item.name}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default PopularProduct;
