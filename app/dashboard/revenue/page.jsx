import Chart from "@/app/ui/dashboard/chart/chart";
import BarCharts from "@/app/ui/dashboard/revenue/chart";
import Transaction from "@/app/ui/dashboard/transaction/transaction";
function page() {
  return (
    <div>
      <div style={{ marginTop: "10px" }}>
        <Chart title="Transaction Chart" />
      </div>
      <div style={{ marginTop: "10px" }}>
        <Transaction />
      </div>
      <BarCharts title="Revenue Income" />
    </div>
  );
}

export default page;
