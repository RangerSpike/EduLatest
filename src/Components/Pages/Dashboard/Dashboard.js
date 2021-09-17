import "./Dashboard.css";
import Navbar from "../../Common/Navbar/Navbar";
import hello from "../../../assets/hello.svg";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";
import { useEffect, useState } from "react";

export default function Dashboard() {  

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const data1 = [
    { name: "Total", value: 100000 },
    { name: "onhold", value: 3000 },
    { name: "running", value: 80000 },
    { name: "rejected", value: 5000 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <>
      <Navbar />
      <div className="main__container">
        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>Hello Admin</h1>
            <p>Welcome to the dashboard</p>
          </div>
        </div>

        <h1>
          <text className="overallstats">OVERALL STATISTICS</text>
        </h1>
      </div>
      <div style={{ marginLeft: "40px" }}>
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
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </div>

      <div className="chart2" style={{ marginLeft: "700px" }}>
        <PieChart width={400} height={400}>
          <Pie
            data={data1}
            dataKey="value"
            cx={200}
            cy={200}
            outerRadius={140}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </div>
      <div style={{ marginLeft: "40px" }}>
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
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </div>
      <div className="featured">
        <div className="featuredItem" style={{ background: "lightgrey" }}>
          <span className="featuredTitle">Students</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">100000</span>
            <span className="featuredMoneyRate"></span>
          </div>
          <span className="featuredSub">By whole Year</span>
        </div>
        <div className="featuredItem" style={{ background: "lightgrey" }}>
          <span className="featuredTitle">
            Overall Students Passed This Year
          </span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">8000</span>
            <span className="featuredMoneyRate"></span>
          </div>
          <span className="featuredSub">This Year</span>
        </div>
        <div className="featuredItem" style={{ background: "lightgrey" }}>
          <span className="featuredTitle">Students Failed This Year</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">2000</span>
            <span className="featuredMoneyRate"></span>
          </div>
          <span className="featuredSub">This YEar</span>
        </div>

        <div className="featuredItem" style={{ background: "lightgrey" }}>
          <span className="featuredTitle">Students Failed This Year</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">2000</span>
            <span className="featuredMoneyRate"></span>
          </div>
          <span className="featuredSub">This YEar</span>
        </div>
      </div>
    </>
  );
}
