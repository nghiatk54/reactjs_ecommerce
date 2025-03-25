import Layout from "@component/Layout/Layout";
import styles from "./AdvanceHeadling.module.scss";

function AdvanceHeadling() {
  const { container, headline, containerMiddleBox, description, title } =
    styles;
  return (
    <Layout>
      <div className={container}>
        <div className={headline}></div>
        <div className={containerMiddleBox}>
          <span className={description}>don't miss super offers</span>
          <span className={title}>Our best products</span>
        </div>
        <div className={headline}></div>
      </div>
    </Layout>
  );
}

export default AdvanceHeadling;
