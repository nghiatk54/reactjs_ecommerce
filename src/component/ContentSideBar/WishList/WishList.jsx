import { CiHeart } from "react-icons/ci";
import HeaderSidebar from "@component/ContentSideBar/component/HeaderSidebar/HeaderSidebar";
import ItemProduct from "@component/ContentSideBar/component/ItemProduct/ItemProduct";
import styles from "./WishList.module.scss";
import Button from "@component/Button/Button";
function WishList() {
  const { container, boxContent, boxButton } = styles;
  return (
    <div className={container}>
      <div className={boxContent}>
        <HeaderSidebar icon={<CiHeart size={30} />} title="WISHLIST" />
        <ItemProduct />
      </div>

      <div className={boxButton}>
        <Button content={"VIEW WISHLIST"} />
        <Button content={"ADD ALL TO CART"} isPrimary={false} />
      </div>
    </div>
  );
}

export default WishList;
