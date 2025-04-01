import HeaderSidebar from "@component/ContentSideBar/component/HeaderSidebar/HeaderSidebar";
import { TfiReload } from "react-icons/tfi";
import styles from "./Compare.module.scss";
import ItemProduct from "@component/ContentSideBar/component/ItemProduct/ItemProduct";
import Button from "@component/Button/Button";
function Compare() {
  const { container, boxContent, boxButton } = styles;
  return (
    <div className={container}>
      <div className={boxContent}>
        <HeaderSidebar icon={<TfiReload size={30} />} title="COMPARE" />
        <ItemProduct />
      </div>
      <div className={boxButton}>
        <Button content={"VIEW COMPARE"} />
      </div>
    </div>
  );
}

export default Compare;
