import Layout from "@component/Layout/Layout";
import { dataInfo } from "./constant";
import InfoCard from "./InfoCard/InfoCard";
import styles from "./Info.module.scss";

function Info() {
  const { container } = styles;
  return (
    <Layout>
      <div className={container}>
        {dataInfo.map((item) => (
          <InfoCard key={item.id} item={item} />
        ))}
      </div>
    </Layout>
  );
}

export default Info;
