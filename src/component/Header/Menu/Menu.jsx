import styles from "../Header.module.scss";
import { useContext } from "react";
import { SideBarContext } from "@context/SideBarProvider";

function Menu({ content, href, type }) {
  const { setIsOpen, setType } = useContext(SideBarContext);
  const { menu } = styles;
  const handleOpenSideBar = () => {
    if (type === "login") {
      setIsOpen(true);
      setType(type);
    }
  };
  return (
    <div className={menu} onClick={handleOpenSideBar}>
      {content}
    </div>
  );
}

export default Menu;
