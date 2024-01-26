import Card from "../ui/dashboard/card/card";
import Chart from "../ui/dashboard/chart/chart";
import styles from "../ui/dashboard/dashboard.module.css";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Transaction from "../ui/dashboard/transaction/transaction";

function Dashboardpage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card
            title="Total Users"
            value="200"
            count="12%"
            info=" more than previous week"
          />
          <Card
            title="Total Orders"
            value="358"
            count="24%"
            info=" total orders today"
          />
          <Card
            title="New Users"
            value="126"
            count="7%"
            info=" than previous month"
          />
        </div>
        <Transaction />
        <Chart title="Weekly Report" />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
}

export default Dashboardpage;
