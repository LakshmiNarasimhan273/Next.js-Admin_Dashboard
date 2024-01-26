import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

const Card = (props) => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={25} />
      <div className={styles.texts}>
        <span className={styles.title}>{props.title}</span>
        <span className={styles.number}>{props.value}</span>
        <span className={styles.details}>
          <span className={styles.highlight}>{props.count}</span>
          {props.info}
        </span>
      </div>
    </div>
  );
};

export default Card;
