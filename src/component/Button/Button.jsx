import styles from "./Button.module.scss";
import classNames from "classnames";

function Button({ content, isPrimary = true, ...props }) {
  const { btn, primaryBtn, secondaryBtn, container } = styles;
  return (
    <div className={container}>
      <button
        className={classNames(btn, {
          [primaryBtn]: isPrimary,
          [secondaryBtn]: !isPrimary,
        })}
        {...props}
      >
        {content}
      </button>
    </div>
  );
}

export default Button;
