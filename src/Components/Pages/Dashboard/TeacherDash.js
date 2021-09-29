/* eslint-disable */
import "./Dashboard.css";
import React from "react";
import Navbar from "../../Common/Navbar/Navbar";
import hello from "../../../assets/hello.svg";
import axios from "axios";

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

export default function TeacherDash() {
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

  const [onlineCount, setOnlineCount] = useState();
  const [offlineClass, setOfflineClass] = useState();

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
    { name: "Total Students", value: totalStudents },
    { name: "Students Promoted", value: studentsPromoted },
    { name: "Students Failed", value: studentsFailed },
    { name: "Students Exited", value: studentsExited },
  ];

  const data2 = [
    { name: "Offline Classes taken this month", value: offlineClass },
    { name: "Onlice Classes taken this month", value: onlineCount },
  ];

  const getData = () => {
    fetch("https://db.edusoft.entema-software.com/getDashData", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setCurrOne(json[0].Values);
        setPreOne(json[1].Values);

        setCurrTwo(json[2].Values);
        setPreTwo(json[3].Values);

        setCurrThree(json[4].Values);
        setPreThree(json[5].Values);

        setCurrFour(json[6].Values);
        setPreFour(json[7].Values);

        setCurrFive(json[8].Values);
        setPreFive(json[9].Values);

        setCurrSix(json[10].Values);
        setPreSix(json[11].Values);

        setCurrSeven(json[12].Values);
        setPreSeven(json[13].Values);

        setCurrEight(json[14].Values);
        setPreEight(json[15].Values);

        setCurrNine(json[16].Values);
        setPreNine(json[17].Values);

        setCurrTen(json[18].Values);
        setPreTen(json[19].Values);

        setTotalStudents(json[20].Values);
        setStudentsPromoted(json[22].Values);
        setStudentsFailed(json[23].Values);
        setStudentsExited(json[21].Values);

        // console.log("hi  ", json);
      });
  };

  let barDataTemplate = {
    name: "",
    Leaves: 0,
    DOM: 0,
    amt: 5,
  };

  useEffect(() => {
    getData();
    getTeacherData();
    getTeacherPieData();
  }, []);

  let rows = [];

  const [tchBdata, setTchBdata] = useState([]);
  const [overAllTeacher, setOverAllTeacher] = useState([]);

  const getTeacherData = () => {
    axios
      .get("https://db.edusoft.entema-software.com/getTchLeaveMerger", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          //console.log("teachersLengt: ", res.data);
          setOverAllTeacher(res.data.length);
          for (let i = 0; i < res.data.length; i++) {
            rows.push(barDataTemplate);

            rows[i] = {
              name: res.data[i].TCH_NAME,
              Leaves: res.data[i].LEAVES,
              DOM: res.data[i].DOM,
              amt: +5,
            };
          }
          //console.log("Saman ke row", rows);
          setTchBdata(rows);
        }
      });
  };

  const getTeacherPieData = () => {
    fetch("https://db.edusoft.entema-software.com/getTchClassesCount", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setOfflineClass(json[0].CLASSES_TAKEN);
        // console.log('oooo',json)
      });
  };

  const getOnlineClassCount = () => {
    fetch("https://db.edusoft.entema-software.com/getOnlineClassCount", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setOnlineCount(json[0].ONLINE_CLASSES_TAKEN);
        //console.log('oooo',json)
      });
  };

  useEffect(() => {
    getOnlineClassCount();
  }, []);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <>
      <Navbar />
      <div className="main__container">
        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>Hello {localStorage.getItem('UserName')}</h1>
            <p>Welcome to the dashboard</p>
          </div>
        </div>
        <h1>
          <text className="overallstats" style={{ marginLeft: "370px" }}>
            OVERALL TEACHER STATS
          </text>
        </h1>
      </div>

      <div style={{ marginLeft: "40px", marginTop: "60px" }}>
        <BarChart
          width={500}
          height={300}
          data={tchBdata}
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
          <Bar dataKey="DOM" fill="#8884d8" />
          <Bar dataKey="Leaves" fill="#82ca9d" />
        </BarChart>
      </div>

      <div
        className="chart2"
        style={{ marginLeft: "750px", marginTop: "-400px" }}
      >
        {/*<Button
          style={{ marginLeft: "300px" }}
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
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
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>2019</MenuItem>
          <MenuItem onClick={handleClose}>2020</MenuItem>
          <MenuItem onClick={handleClose}>Current Year</MenuItem>
        </Menu>*/}
        <PieChart width={400} height={400}>
          <Pie
            data={data2}
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
  );
}
