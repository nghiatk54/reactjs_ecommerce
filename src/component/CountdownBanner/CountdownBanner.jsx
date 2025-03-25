import CountdownTimer from "@component/CountdownTimer/CountdownTimer";
import styles from "./CountdownBanner.module.scss";
import Button from "@component/Button/Button";

function CountdownBanner() {
  const { container, containerTimer, title, boxBtn } = styles;
  const targetDate = new Date("2025-12-31T00:00:00");
  return (
    <div className={container}>
      <div className={containerTimer}>
        <CountdownTimer targetDate={targetDate} />
      </div>
      <p className={title}>The classics make a comeback</p>
      <div className={boxBtn}>
        <Button content={"Buy now"} />
      </div>
    </div>
  );
}

export default CountdownBanner;
