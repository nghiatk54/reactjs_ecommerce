import styles from "./ProductItem.module.scss";
import EyeIcon from "@icon/svg/eyeIcon.svg";
import BagIcon from "@icon/svg/bagIcon.svg";
import HeartIcon from "@icon/svg/heartIcon.svg";
import ReloadIcon from "@icon/svg/reloadIcon.svg";

function ProductItem({ src, prevSrc, name, price }) {
  const {
    boxImg,
    showImgWhenHover,
    showFuncWhenHover,
    boxIcon,
    icon,
    nameClass,
    priceClass,
  } = styles;
  return (
    <div>
      <div className={boxImg}>
        <img src={src} alt="Product item image" />
        <img
          src={prevSrc}
          alt="Product item image"
          className={showImgWhenHover}
        />
        <div className={showFuncWhenHover}>
          <div className={boxIcon}>
            <BagIcon className={icon} />
          </div>
          <div className={boxIcon}>
            <HeartIcon className={icon} />
          </div>
          <div className={boxIcon}>
            <ReloadIcon className={icon} />
          </div>
          <div className={boxIcon}>
            <EyeIcon className={icon} />
          </div>
        </div>
      </div>
      <div className={nameClass}>{name}</div>
      <div className={priceClass}>${price}</div>
    </div>
  );
}

export default ProductItem;
