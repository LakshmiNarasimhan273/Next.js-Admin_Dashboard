"use client";
import styles from "./chart.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Sunday",

    Visit: 2000,
    Click: 9800,
    amt: 2400,
  },
  {
    name: "Monday",
    Visit: 3000,
    Click: 1398,
    amt: 2210,
  },
  {
    name: "Tuesday",
    Visit: 4000,
    Click: 2400,
    amt: 2290,
  },
  {
    name: "Wednesday",
    Visit: 2780,
    Click: 3908,
    amt: 2000,
  },
  {
    name: "Thrusday",
    Visit: 1890,
    Click: 4800,
    amt: 2181,
  },
  {
    name: "Friday",
    Visit: 2390,
    Click: 3800,
    amt: 2500,
  },
  {
    name: "Saturday",
    Visit: 3490,
    Click: 4300,
    amt: 2100,
  },
];

const Chart = (props) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{props.title}</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
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
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ background: "var(--bg)", border: "none" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="Visit"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="Click"
            stroke="#82ca9d"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
