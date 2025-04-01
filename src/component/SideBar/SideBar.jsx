import { useContext } from "react";
import styles from "./SideBar.module.scss";
import { SideBarContext } from "@context/SideBarProvider";
import classNames from "classnames";
import { MdClose } from "react-icons/md";
import Login from "@component/ContentSideBar/Login/Login";
import Compare from "@component/ContentSideBar/Compare/Compare";
import WishList from "@component/ContentSideBar/WishList/WishList";
import Cart from "@component/ContentSideBar/Cart/Cart";
function SideBar() {
  const { container, overlay, sideBar, slideSideBar, boxIcon } = styles;
  const { isOpen, setIsOpen, type } = useContext(SideBarContext);
  const handleCloseSideBar = () => {
    setIsOpen(false);
  };
  const renderContent = {
    login: <Login />,
    compare: <Compare />,
    wishlist: <WishList />,
    cart: <Cart />,
  };
  return (
    <div className={container}>
      <div
        className={classNames({
          [overlay]: isOpen,
        })}
        onClick={handleCloseSideBar}
      />
      <div
        className={classNames(sideBar, {
          [slideSideBar]: isOpen,
        })}
      >
        {isOpen && (
          <div className={boxIcon} onClick={handleCloseSideBar}>
            <MdClose size={20} />
          </div>
        )}
        {renderContent[type]}
      </div>
    </div>
  );
}

export default SideBar;
