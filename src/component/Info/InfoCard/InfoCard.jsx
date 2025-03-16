import styles from "./InfoCard.module.scss";

function InfoCard({ item }) {
  const { containerCard, containerContent, title, description } = styles;
  return (
    <div className={containerCard}>
      <img src={item.src} alt={item.alt} width={40} height={41} />
      <div className={containerContent}>
        <div className={title}>{item.title}</div>
        <div className={description}>{item.description}</div>
      </div>
    </div>
  );
}

export default InfoCard;
