import styles from "../Header.module.scss";
import FbIcon from "@icon/svg/fbIcon.svg";
import InsIcon from "@icon/svg/insIcon.svg";
import YtbIcon from "@icon/svg/ytbIcon.svg";

function BoxIcon({ type, href }) {
  const { boxIcon, icon } = styles;
  const iconObject = {
    fb: <FbIcon className={icon} />,
    ins: <InsIcon className={icon} />,
    ytb: <YtbIcon className={icon} />,
  };
  return <div className={boxIcon}>{iconObject[type]}</div>;
}

export default BoxIcon;
