import "./Dashboard.css";
import React from 'react';
import Navbar from "../../Common/Navbar/Navbar";
import hello from "../../../assets/hello.svg";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
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

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const data = [

    {
      name: "class 1",
      uv: 4000,
      pv: 2400,
      amt: 500,
    },
    {
      name: "class 2",
      uv: 3000,
      pv: 1398,
      amt: 1000,
    },
    {
      name: "class 3",
      uv: 2000,
      pv: 9800,
      amt: 1500,
    },
    {
      name: "class 4",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "class 5",
      uv: 1890,
      pv: 4800,
      amt: 2500,
    },
    {
      name: "class 6",
      uv: 2390,
      pv: 3800,
      amt: 3000,
    },
    {
      name: "class 7",
      uv: 3490,
      pv: 4300,
      amt: 3500,
    },
    {
      name: "class 8",
      uv: 3490,
      pv: 4300,
      amt: 4000,
    },
    {
      name: "class 9",
      uv: 3490,
      pv: 4300,
      amt: 4500,
    },
    {
      name: "class 10",
      uv: 3490,
      pv: 4300,
      amt: 5000,
    },
  ];

  const data1 = [
    { name: "Total Students", value: 10000},
    { name: "Students Promoted", value: 9700 },
    { name: "Students Failed", value: 300 },
    { name: "Students Exited", value: 100 },
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
          <text className="overallstats"  
          style={{marginLeft:"370px"}}
          >OVERALL STATISTICS</text>
        </h1>
      </div>
      <div style={{ marginLeft: "40px" ,marginTop:"60px"}}>
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

      <div className="chart2" style={{ marginLeft: "750px" }}>

      <Button
         style={{marginLeft:"300px"}}
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Select Year
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>2019</MenuItem>
        <MenuItem onClick={handleClose}>2020</MenuItem>
        <MenuItem onClick={handleClose}>Current Year</MenuItem>
      </Menu>

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
      <div style={{ marginLeft: "40px" ,marginTop:"60px"}}>
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

      <div className="chart2" style={{ marginLeft: "750px" }}>

      <Button
         style={{marginLeft:"300px",marginTop:"40px"}}
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Select Year
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>2019</MenuItem>
        <MenuItem onClick={handleClose}>2020</MenuItem>
        <MenuItem onClick={handleClose}>Current Year</MenuItem>
      </Menu>
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

      
      <div className="featured">
        <div className="featuredItem" style={{ background: "lightgrey" }}>
          <span className="featuredTitle">Overall Students</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">100000</span>
            <span className="featuredMoneyRate"></span>
          </div>
          <span className="featuredSub"></span>
        </div>
        <div className="featuredItem" style={{ background: "lightgrey" }}>
          <span className="featuredTitle">
            Overall Teachers
          </span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">8000</span>
            <span className="featuredMoneyRate"></span>
          </div>
          <span className="featuredSub"></span>
        </div>
        <div className="featuredItem" style={{ background: "lightgrey" }}>
          <span className="featuredTitle">Yearly Expense</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">2000</span>
            <span className="featuredMoneyRate"></span>
          </div>
          <span className="featuredSub"></span>
        </div>

        <div className="featuredItem" style={{ background: "lightgrey" }}>
          <span className="featuredTitle">Yearly Income</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">2000</span>
            <span className="featuredMoneyRate"></span>
          </div>
          <span className="featuredSub"></span>
        </div>
      </div>
    </>
  );
}
