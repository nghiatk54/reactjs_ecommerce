import BoxIcon from "./BoxIcon/BoxIcon";
import { dataBoxIcon, dataMenu } from "./constant";
import styles from "./Header.module.scss";
import Menu from "./Menu/Menu";
import Logo from "@icon/image/Logo-retina.png";
import reloadIcon from "@icon/svg/reloadIcon.svg";
import heartIcon from "@icon/svg/heartIcon.svg";
import cartIcon from "@icon/svg/cartIcon.svg";
function Header() {
  const {
    containerBoxIcon,
    containerMenu,
    containerHeader,
    containerBox,
    container,
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
            <img width={24} height={24} src={reloadIcon} alt="reload" />
            <img width={24} height={24} src={heartIcon} alt="heart" />
            <img width={24} height={24} src={cartIcon} alt="cart" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
