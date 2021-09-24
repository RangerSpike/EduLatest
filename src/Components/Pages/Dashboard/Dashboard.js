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

  const [currOne, setCurrOne] = useState();
  const [PreOne, setPreOne] = useState();

  const [currTwo, setCurrTwo] = useState();
  const [PreTwo, setPreTwo] = useState();

  const [currThree, setCurrThree] = useState();
  const [PreThree, setPreThree] = useState();

  const [currFour, setCurrFour] = useState();
  const [PreFour, setPreFour] = useState();

  const [currFive, setCurrFive] = useState();
  const [PreFive, setPreFive] = useState();

  const [currSix, setCurrSix] = useState();
  const [PreSix, setPreSix] = useState();

  const [currSeven, setCurrSeven] = useState();
  const [PreSeven, setPreSeven] = useState();

  const [currEight, setCurrEight] = useState();
  const [PreEight, setPreEight] = useState();

  const [currNine, setCurrNine] = useState();
  const [PreNine, setPreNine] = useState();

  const [currTen, setCurrTen] = useState();
  const [PreTen, setPreTen] = useState();

 

  const [totalStudents, setTotalStudents] = useState();
  const [studentsPromoted, setStudentsPromoted] = useState();
  const [studentsFailed, setStudentsFailed] = useState();
  const [studentsExited, setStudentsExited] = useState();


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
      CurrentYear: [currOne],
      PreviousYear: [PreOne],
      amt: 10,
    },
    {
      name: "class 2",
      CurrentYear: [currTwo],
      PreviousYear: [PreTwo],
      amt: 20,
    },
    {
      name: "class 3",
      CurrentYear: [currThree],
      PreviousYear: [PreThree],
      amt: 30,
    },
    {
      name: "class 4",
      CurrentYear: [currFour],
      PreviousYear: [PreFour],
      amt: 40,
    },
    {
      name: "class 5",
      CurrentYear: [currFive],
      PreviousYear: [PreFive],
      amt: 50,
    },
    {
      name: "class 6",
      CurrentYear: [currSix],
      PreviousYear: [PreSix],
      amt: 60,
    },
    {
      name: "class 7",
      CurrentYear: [currSeven],
      PreviousYear: [PreSeven],
      amt: 70,
    },
    {
      name: "class 8",
      CurrentYear: [currEight],
      PreviousYear: [PreEight],
      amt: 80,
    },
    {
      name: "class 9",
      CurrentYear: [currNine],
      PreviousYear: [PreNine],
      amt: 90,
    },
    {
      name: "class 10",
      CurrentYear: [currTen],
      PreviousYear: [PreTen],
      amt: 100,
    },
  ];

  const studentPieData = [
    { name: "Total Students", value:totalStudents },
    { name: "Students Promoted", value:studentsPromoted},
    { name: "Students Failed", value:studentsFailed },
    { name: "Students Exited", value:studentsExited },
  ];

  
  const data1 = [
    { name: "Total Students", value: 100 },
    { name: "Students Promoted", value: 222 },
    { name: "Students Failed", value: 333 },
    { name: "Students Exited", value: 444 },
  ];

  const getData = () => {
    fetch("https://db.edusoft.entema-software.com/getDashData",{
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
         }
        })
        .then((response) => response.json())
        .then((json) => {
          setCurrOne(json[0].Values)
          setPreOne(json[1].Values)

          setCurrTwo(json[2].Values)
          setPreTwo(json[3].Values)

          setCurrThree(json[4].Values)
          setPreThree(json[5].Values)

          setCurrFour(json[6].Values)
          setPreFour(json[7].Values)

          setCurrFive(json[8].Values)
          setPreFive(json[9].Values)

          setCurrSix(json[10].Values)
          setPreSix(json[11].Values)

          setCurrSeven(json[12].Values)
          setPreSeven(json[13].Values)

          setCurrEight(json[14].Values)
          setPreEight(json[15].Values)

          setCurrNine(json[16].Values)
          setPreNine(json[17].Values)

          setCurrTen(json[18].Values)
          setPreTen(json[19].Values)


          setTotalStudents(json[20].Values)
          setStudentsPromoted(json[22].Values)
          setStudentsFailed(json[23].Values)
          setStudentsExited(json[21].Values)

            console.log('hi  ', json);
          
        });
};

      useEffect(() => {
        getData();
      }, []);


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
            dataKey="PreviousYear"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="CurrentYear" stroke="#82ca9d" />
        </LineChart>
      </div>

      <div className="chart2" style={{ marginLeft: "750px",marginTop:"-420px" }}>

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
            data={studentPieData}
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
          <Bar dataKey="Previous Year" fill="#8884d8" />
          <Bar dataKey="Current Year" fill="#82ca9d" />
        </BarChart>

        
      </div>

      <div className="chart2" style={{ marginLeft: "750px", marginTop:"-400px"}}>

      <Button
         style={{marginLeft:"300px",}}
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
            <span className="featuredMoney">{totalStudents}</span>
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
