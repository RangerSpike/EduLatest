// eslint-disable-next-line
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../../Common/Navbar/Navbar";
import "./Notice.css";
import axios from "axios";

function Notice() {
  const [title, setTitle] = useState();
  const [details, setDetails] = useState();
  const [postedto, setPostedto] = useState();
  const [date, setDate] = useState();

  const [data, setData] = useState([]);
  const [pno, setPno] = useState();

  const handleChange = (e) => {
    //console.log(e.target.value);

    const input = e.target.name;
    if (input === "title") {
      setTitle(e.target.value);
    } else if (input === "details") {
      setDetails(e.target.value);
    } else if (input === "postedto") {
      setPostedto(e.target.value);
    }
  };

  const getTimeFormat = (datePar) => {
    //console.log(datePar);
    var myDate = new Date(datePar);

    var minutes = myDate.getMinutes();
    var hours = myDate.getHours();

    return hours + ":" + minutes;
  };

  const setDateFormat = (value) => {
    let currentDate;
    if (value) {
      currentDate = new Date(value);
    } else {
      currentDate = new Date();
    }

    let currentYear = new Intl.DateTimeFormat("en", { year: "numeric" }).format(
      currentDate
    );
    let currentMonth = new Intl.DateTimeFormat("en", {
      month: "numeric",
    }).format(currentDate);
    let currentDay = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(
      currentDate
    );

    // let formatedDate = currentDay + "-0" + currentMonth + "-" + currentYear;

    let formatedDate;

    if (currentMonth in [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
      formatedDate = currentDay + "-0" + currentMonth + "-" + currentYear;
    } else {
      formatedDate = currentDay + "-" + currentMonth + "-" + currentYear;
    }

    return formatedDate;
  };

  let pList = {
    pno: 0,
  };
  const getData = () => {
    axios
      .get("https://db.edusoft.entema-software.com/getNotice", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      })
      .then((res) => {
        setData(res.data);
        setDate(res.data[0].DATE);
        //console.log("result set in effect: ", res.data);
      });

    axios
      .get("https://db.edusoft.entema-software.com/getStudentPno", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      })
      .then((res) => {
        let rows = "";
        for (let i = 0; i < res.data.length; i++) {
          if (rows === "") {
            rows = res.data[i].STD_PHONE;
          } else {
            rows = rows + "," + res.data[i].STD_PHONE;
          }
        }
        console.log("rows:", rows);
        setPno(rows);
        //console.log("result set in effect: ", res.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://db.edusoft.entema-software.com/insertNotice", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
        title: title,
        details: details,
        postedTo: postedto,
      })
      .then(() => {
        axios
          .post("https://db.edusoft.entema-software.com/getNoticeSms", {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods":
                "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            },
            message: "Title : "+title + `\nDetails : ${details}`+ `\nRegards : ${postedto}`,
            numbers: pno,
          })
          .then(() => {
            console.log("SMS SENT");
          });
        console.log("Successfully Created");
        setTitle("");
        setDetails("");
        setPostedto("");
        getData();
      });
  };
  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col-4-xxxl col-12">
          <div className="card height-auto">
            <div className="card-body">
              <div className="heading-layout1">
                <div className="item-title">
                  <h3>Create A Notice</h3>
                </div>
              </div>
              <form className="new-added-form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-10-xxxl col-lg-5 col-12 form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Title"
                      id="title"
                      name="title"
                      value={title}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="col-12-xxxl col-lg-5 col-12 form-group">
                    <label>Details</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Details"
                      id="detail"
                      name="details"
                      value={details}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="col-12-xxxl col-lg-5 col-12 form-group">
                    <label>Posted By </label>
                    <input
                      type="text"
                      placeholder=""
                      className="form-control"
                      placeholder="posted By"
                      className="form-control"
                      id="postedto"
                      name="postedto"
                      value={postedto}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  {/*<div className="col-12-xxxl col-lg-5 col-12 form-group">
                    <label>Date</label>

                    <input
                      type="text"
                      placeholder=""
                      className="form-control air-datepicker"
                      type="text"
                      placeholder="Date"
                      className="form-control"
                      id="date"
                      name="date"
                      value={date}
                      onChange={(e) => handleChange(e)}
                    />
                     </div>*/}
                  <div className="col-12 form-group mg-t-8">
                    <button
                      type="submit"
                      className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="col-8-xxxl col-12">
        <div className="card height-auto">
          <div className="card-body">
            <div className="heading-layout1">
              <div className="item-title">
                <h3>Notice Board</h3>
              </div>
            </div>
            <form className="mg-b-20">
              <div className="row gutters-8">
                <div className="col-lg-5 col-12 form-group">
                  <input
                    type="text"
                    placeholder="Search by Date ..."
                    className="form-control"
                  />
                </div>
                <div className="col-lg-5 col-12 form-group">
                  <input
                    type="text"
                    placeholder="Search by Title ..."
                    className="form-control"
                  />
                </div>
                <div className="col-lg-2 col-12 form-group">
                  <button
                    type="submit"
                    className="fw-btn-fill btn-gradient-yellow"
                  >
                    SEARCH
                  </button>
                </div>
              </div>
            </form>
            {data.map((data) => (
              <div className="notice-board-wrap">
                <div className="notice-list">
                  <div className="post-date bg-skyblue">
                    {setDateFormat(data.DATE)}
                  </div>
                  <h6 className="notice-title">
                    <NavLink to="#">{data.DETAILS}</NavLink>
                  </h6>
                  <div className="entry-meta">
                    {" "}
                    {data.POSTED_TO} / <span>{getTimeFormat(date)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Notice;
