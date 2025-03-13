import Header from "@component/Header/Header";
import Banner from "@component/Banner/Banner";
import styles from "./HomePage.module.scss";
function HomePage() {
  const { container } = styles;
  return (
    <div>
      <div className={container}>
        <Header />
        <Banner />
      </div>
    </div>
  );
}

export default HomePage;
