import styles from "../Header.module.scss";
import fbIcon from "@icon/svg/fbIcon.svg";
import insIcon from "@icon/svg/insIcon.svg";
import ytbIcon from "@icon/svg/ytbIcon.svg";

function BoxIcon({ type, href }) {
  const { boxIcon } = styles;
  const icon = {
    fb: fbIcon,
    ins: insIcon,
    ytb: ytbIcon,
  };
  return (
    <div className={boxIcon}>
      <img src={icon[type]} alt={type} />
    </div>
  );
}

export default BoxIcon;
