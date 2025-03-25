import Button from "@component/Button/Button";
import styles from "./SaleHomepage.module.scss";
import useTranslateX from "@hook/useTranslateX";

function SaleHomepage() {
  const { container, title, description, boxBtn, boxImage } = styles;
  const { translateXPosition } = useTranslateX();

  return (
    <div className={container}>
      <div
        className={boxImage}
        style={{
          transform: `translateX(${translateXPosition}px)`,
          transition: "transform 0.3s",
        }}
      >
        <img
          src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg"
          alt="Image 1"
        />
      </div>
      <div>
        <h2 className={title}>Sale of the year</h2>
        <p className={description}>
          Libero sed faucibus facilisis fermentum. Est nibh sed massa sodales.
        </p>
        <div className={boxBtn}>
          <Button content="Read more" isPrimary={false} />
        </div>
      </div>
      <div
        className={boxImage}
        style={{
          transform: `translateX(-${translateXPosition}px)`,
          transition: "transform 0.3s",
        }}
      >
        <img
          src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg"
          alt="Image 2"
        />
      </div>
    </div>
  );
}

export default SaleHomepage;
