/* eslint-disable no-unused-vars */
import React from 'react'
import "./TeacherDash.css"
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

function TeacherDash() {

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
          <text className="overallstats">OVERALL TEACHERS STATISTICS</text>
        </h1>
      </div>

        
      <h1 style={{marginLeft:"850px"}}>Classes Taken </h1>

      <div style={{ marginLeft: "40px",marginTop:"80px" }}>

      

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

        <h1 style={{marginLeft:"70px",marginTop:"20px"}}>Teachers Attendence </h1>
        
      </div>

      <div className="chart2" style={{ marginLeft: "750px" ,marginTop:"-440px"}}>

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

      </>
    )
}

export default TeacherDash
