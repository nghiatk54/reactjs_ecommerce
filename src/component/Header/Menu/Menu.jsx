import styles from "../Header.module.scss";
import { useContext, useState } from "react";
import { SideBarContext } from "@context/SideBarProvider";
import { StoreContext } from "@context/StoreProdiver";
import Cookies from "js-cookie";
function Menu({ content, href, type }) {
  const { setIsOpen, setType } = useContext(SideBarContext);
  const { menu, subMenu } = styles;
  const { userInfo, handleLogout } = useContext(StoreContext);
  const [isShowSubMenu, setIsShowSubMenu] = useState(false);
  const handleOpenSideBar = () => {
    if (type === "login" && !userInfo) {
      setIsOpen(true);
      setType(type);
    }
  };
  const handleRenderText = (type) => {
    if (type == "login" && userInfo) {
      return `${userInfo?.username}`;
    }
    return content;
  };
  const handleHover = () => {
    if (type === "login" && userInfo) {
      setIsShowSubMenu(true);
    }
  };
  const handleCloseSubMenu = () => {
    setIsShowSubMenu(false);
  };
  const handleClickLogout = () => {
    handleLogout();
    setIsShowSubMenu(false);
  };
  return (
    <div
      className={menu}
      onMouseEnter={handleHover}
      onClick={handleOpenSideBar}
    >
      {handleRenderText(type)}
      {isShowSubMenu && (
        <div
          onMouseLeave={handleCloseSubMenu}
          onClick={handleClickLogout}
          className={subMenu}
        >
          LOG OUT
        </div>
      )}
    </div>
  );
}

export default Menu;
