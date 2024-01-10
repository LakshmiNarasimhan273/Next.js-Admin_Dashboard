import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={25} />
      <div className={styles.texts}>
        <span className={styles.title}>Total Users</span>
        <span className={styles.number}>193</span>
        <span className={styles.details}>
          <span className={styles.highlight}>14</span> Users newly joined this
          week
        </span>
      </div>
    </div>
  );
};

export default Card;
