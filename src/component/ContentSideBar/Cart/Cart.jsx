import styles from "./Cart.module.scss";
import HeaderSidebar from "@component/ContentSideBar/component/HeaderSidebar/HeaderSidebar";
import ItemProduct from "@component/ContentSideBar/component/ItemProduct/ItemProduct";
import Button from "@component/Button/Button";
import { PiShoppingCartThin } from "react-icons/pi";
function Cart() {
  const {
    container,
    boxContent,
    boxButton,
    boxFooter,
    boxSubtotal,
    subtotal,
    price,
  } = styles;
  return (
    <div className={container}>
      <div className={boxContent}>
        <HeaderSidebar icon={<PiShoppingCartThin size={30} />} title="CART" />
        <ItemProduct />
      </div>
      <div className={boxFooter}>
        <div className={boxSubtotal}>
          <p className={subtotal}>SUBTOTAL:</p>
          <p className={price}>$119.99</p>
        </div>
        <div className={boxButton}>
          <Button content={"VIEW CART"} />
          <Button content={"CHECKOUT"} isPrimary={false} />
        </div>
      </div>
    </div>
  );
}

export default Cart;
