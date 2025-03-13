import styles from "./Button.module.scss";

function Button({ content }) {
  const { btn } = styles;
  return (
    <div>
      <button className={btn}>{content}</button>
    </div>
  );
}

export default Button;
