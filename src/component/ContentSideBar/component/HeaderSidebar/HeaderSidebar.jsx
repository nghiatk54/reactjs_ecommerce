import { TfiReload } from "react-icons/tfi";
import styles from "./HeaderSidebar.module.scss";
function HeaderSidebar({ icon, title }) {
  const { container, titleStyle } = styles;
  return (
    <div className={container}>
      {icon}
      <div className={titleStyle}>{title}</div>
    </div>
  );
}

export default HeaderSidebar;
