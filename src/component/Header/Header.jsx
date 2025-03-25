import BoxIcon from "./BoxIcon/BoxIcon";
import { dataBoxIcon, dataMenu } from "./constant";
import styles from "./Header.module.scss";
import Menu from "./Menu/Menu";
import Logo from "@icon/image/Logo-retina.png";
import ReloadIcon from "@icon/svg/reloadIcon.svg";
import HeartIcon from "@icon/svg/heartIcon.svg";
import CartIcon from "@icon/svg/cartIcon.svg";
function Header() {
  const {
    containerBoxIcon,
    containerMenu,
    containerHeader,
    containerBox,
    container,
    icon,
  } = styles;
  return (
    <div className={container}>
      <div className={containerHeader}>
        <div className={containerBox}>
          <div className={containerBoxIcon}>
            {dataBoxIcon.map((item) => (
              <BoxIcon key={item.id} type={item.type} href={item.href} />
            ))}
          </div>
          <div className={containerMenu}>
            {dataMenu.slice(0, 3).map((item) => (
              <Menu key={item.id} content={item.content} href={item.href} />
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
              <Menu key={item.id} content={item.content} href={item.href} />
            ))}
          </div>
          <div className={containerBoxIcon}>
            <ReloadIcon className={icon} />
            <HeartIcon className={icon} />
            <CartIcon className={icon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
