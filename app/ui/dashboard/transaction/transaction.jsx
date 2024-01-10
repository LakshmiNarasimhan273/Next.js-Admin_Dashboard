import Image from "next/image";
import styles from "./transaction.module.css";

const Transaction = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Latest Transactions</div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Amount</td>
            <td>Date</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="User Image"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Tester
              </div>
            </td>
            <td>$254.02</td>
            <td>14.06.2023</td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="User Image"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Tester
              </div>
            </td>
            <td>$254.02</td>
            <td>14.06.2023</td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelled
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="User Image"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Tester
              </div>
            </td>
            <td>$254.02</td>
            <td>14.06.2023</td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="User Image"
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                Tester
              </div>
            </td>
            <td>$254.02</td>
            <td>14.06.2023</td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
