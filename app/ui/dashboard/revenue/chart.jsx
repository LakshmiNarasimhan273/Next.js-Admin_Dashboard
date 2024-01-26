"use client";
import styles from "./chart.module.css";
import {
  BarChart,
  Bar,
  XAxis,
  Rectangle,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  {
    name: "January",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feburary",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "March",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "April",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "June",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "July",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "August",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "September",
    uv: 2000,
    pv: 3800,
    amt: 2290,
  },
  {
    name: "October",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "November",
    uv: 3000,
    pv: 3398,
    amt: 2210,
  },
  {
    name: "December",
    uv: 5000,
    pv: 6098,
    amt: 2210,
  },
  {
    name: "January",
    uv: 5000,
    pv: 2398,
    amt: 2210,
  },
];

const BarCharts = (props) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{props.title}</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="pv"
            fill="#8884d8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
          <Bar
            dataKey="uv"
            fill="#82ca9d"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarCharts;
