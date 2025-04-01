import styles from "./ItemProduct.module.scss";
import { IoCloseOutline } from "react-icons/io5";
function ItemProduct() {
  const { container, boxContent, title, price, boxClose, size, sku } = styles;
  return (
    <div className={container}>
      <div className={boxClose}>
        <IoCloseOutline size={25} color={"c1c1c1"} />
      </div>
      <img
        src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min-285x340.jpg"
        alt=""
      />
      <div className={boxContent}>
        <div className={title}>10K Yellow Gold</div>
        <div className={size}>Size: M</div>
        <div className={price}>$99.99</div>
        <div className={sku}>SKU: 12349</div>
      </div>
    </div>
  );
}

export default ItemProduct;
