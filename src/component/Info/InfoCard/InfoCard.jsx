import styles from "./InfoCard.module.scss";
import TruckIcon from "@icon/svg/truckIcon.svg";
import DebitCardIcon from "@icon/svg/debitCardIcon.svg";
import BoxIcon from "@icon/svg/boxIcon.svg";
import ChatIcon from "@icon/svg/chatIcon.svg";

function InfoCard({ item }) {
  const { containerCard, containerContent, title, description } = styles;
  const iconObject = {
    TruckIcon: <TruckIcon width={40} height={41} fill={"#707070"} />,
    DebitCardIcon: <DebitCardIcon width={40} height={41} fill={"#707070"} />,
    BoxIcon: <BoxIcon width={40} height={41} fill={"#707070"} />,
    ChatIcon: <ChatIcon width={40} height={41} fill={"#707070"} />,
  };
  return (
    <div className={containerCard}>
      {iconObject[item.svg]}
      <div className={containerContent}>
        <div className={title}>{item.title}</div>
        <div className={description}>{item.description}</div>
      </div>
    </div>
  );
}

export default InfoCard;
