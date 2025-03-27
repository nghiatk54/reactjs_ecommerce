import styles from "./Footer.module.scss";
import LogoFooter from "@image/LogoFooter.png";
import BannerFooter from "@image/BannerFooter.png";
import { dataMenu } from "./constant";

function Footer() {
  const { container, boxNav, title, boxGuarantee, boxNavItem, copyRight } =
    styles;
  return (
    <div className={container}>
      <div>
        <img src={LogoFooter} alt="LogoFooter" width={160} height={60} />
      </div>
      <div className={boxNav}>
        {dataMenu.map((item) => (
          <a className={boxNavItem} href={item.href} key={item.id}>
            {item.content}
          </a>
        ))}
      </div>
      <div className={boxGuarantee}>
        <p className={title}>Guaranteed safe checkout</p>
        <img src={BannerFooter} alt="BannerFooter" />
      </div>
      <div className={copyRight}>
        <p>Copyright © 2024 XStore theme. Created by nghiatk54.</p>
      </div>
    </div>
  );
}

export default Footer;
