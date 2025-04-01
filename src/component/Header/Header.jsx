import BoxIcon from "./BoxIcon/BoxIcon";
import { dataBoxIcon, dataMenu } from "./constant";
import styles from "./Header.module.scss";
import Menu from "./Menu/Menu";
import { TfiReload } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import Logo from "@icon/image/Logo-retina.png";
import useScrollHeadling from "@hook/useScrollHeadling";
import { useState, useEffect, useContext } from "react";
import classNames from "classnames";
import { SideBarContext } from "@context/SideBarProvider";
function Header() {
  const {
    containerBoxIcon,
    containerMenu,
    containerHeader,
    containerBox,
    container,
    icon,
    topHeader,
    fixedHeader,
  } = styles;
  const { scrollPosition } = useScrollHeadling();
  const [isSticky, setIsSticky] = useState(false);
  const { setIsOpen, setType } = useContext(SideBarContext);
  const handleOpenSideBar = (type) => {
    setIsOpen(true);
    setType(type);
  };
  useEffect(() => {
    setIsSticky(scrollPosition > 80);
  }, [scrollPosition]);
  return (
    <div
      className={classNames(container, {
        [topHeader]: !isSticky,
        [fixedHeader]: isSticky,
      })}
    >
      <div className={containerHeader}>
        <div className={containerBox}>
          <div className={containerBoxIcon}>
            {dataBoxIcon.map((item) => (
              <BoxIcon key={item.id} type={item.type} href={item.href} />
            ))}
          </div>
          <div className={containerMenu}>
            {dataMenu.slice(0, 3).map((item) => (
              <Menu
                key={item.id}
                content={item.content}
                href={item.href}
                type={item.type}
              />
            ))}
          </div>
        </div>
        <div>
          <img
            src={Logo}
            alt="logo"
            style={{ width: "153px", height: "53px" }}
          />
        </div>
        <div className={containerBox}>
          <div className={containerMenu}>
            {dataMenu.slice(3).map((item) => (
              <Menu
                key={item.id}
                content={item.content}
                href={item.href}
                type={item.type}
              />
            ))}
          </div>
          <div className={containerBoxIcon}>
            <TfiReload
              className={icon}
              size={20}
              onClick={() => handleOpenSideBar("compare")}
            />
            <CiHeart
              className={icon}
              size={24}
              onClick={() => handleOpenSideBar("wishlist")}
            />
            <PiShoppingCartThin
              className={icon}
              size={24}
              onClick={() => handleOpenSideBar("cart")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
