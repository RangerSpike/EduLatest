/* eslint-disable no-unused-vars */
/*eslint-disable*/
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";

import Axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../../Common/Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TeacherLeaveForm() {
  const [dol, setDoLDate] = useState(new Date());
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [reason, setReason] = useState();
  const [TeachersLov, setTeacherLov] = useState([]);
  const [Teachers, setTeacher] = useState("");
  const notifymin = () => toast("Teacher Id And Name Is Not Available");
  const notifyTeacher = () => toast("Teacher Id Is Not Valid");

  const getTchLov = () => {
    Axios.get("https://db.edusoft.entema-software.com/getTeacherList", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    }).then((res) => {
      //console.log(res.data);
      setTeacherLov(res.data);
      //console.log("result set in effect: ", res.data);
    });
  };

  useEffect(() => {
    getTchLov();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    if (name) {
      Axios.post("https://db.edusoft.entema-software.com/insertTeacherLeave", {
        teacherId: id,
        teacherName: name,
        dol: setDateFormat(dol),
        reason: reason,
        createdBy: localStorage.getItem("UserName"),
      }).then(() => {
        setId("");
        setName("");
        setDoLDate("");
        setReason("");
        window.scrollTo(0, 0);
      });
    } else {
      notifymin();
    }
  };

  const handleChange = (e) => {
    //console.log(e.target.value);
    const input = e.target.name;
    if (input === "name") {
      setName(e.target.value);
    } else if (input === "prevSchool") {
      setPrevSchool(e.target.value);
    } else if (input === "email") {
      setEmail(e.target.value);
    } else if (input === "id") {
      setId(e.target.value);
    } else if (input === "reason") {
      setReason(e.target.value);
    }
  };
  const checkTeacher = () => {
    Axios.post("https://db.edusoft.entema-software.com/teacherLeaveValidate", {
      teacherId: id,
    }).then((res) => {
      //console.log("SAMAN ", res.data);
      if (res.data.length > 0) {
        //console.log(res.data);
        setName(res.data[0].TCH_NAME);
      } else {
        notifyTeacher();
        setName("");
        setName("");
      }
    });
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

  return (
    <>
      <Navbar />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="card height-auto">
        <div className="card-body">
          <div className="heading-layout1">
            <div className="item-title">
              <h3 style={{ padding: "50px" }}>Teacher Leave form </h3>
            </div>
          </div>
          <form className="new-added-form" onSubmit={onSubmit}>
            <div className="row">
              <div className="col-sm-3 form-group">
                <label>ID*</label>
                <select
                  className="select3 select2-hidden-accessible"
                  id="id"
                  name="id"
                  value={id}
                  onChange={(e) => {
                    setId(e.target.value);
                    //console.log(e.target.value);
                  }}
                  onBlur={checkTeacher}
                >
                  <option value="" data-select2-id="9">
                    Select Teacher
                  </option>
                  {TeachersLov.map((data) => (
                    <option key={data.TEACHERS_ID} value={data.TEACHERS_ID}>
                      {data.TCH_NAME}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="form-control"
                  id="ID"
                  name="id"
                  value={id}
                  onChange={(e) => handleChange(e)}
                  required
                  style={{ marginTop: "10px" }}
                  onBlur={checkTeacher}
                  disabled
                />
              </div>
              <div className="col-sm-3 form-group">
                <label>Name*</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="form-control"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => handleChange(e)}
                  required
                  disabled
                />
              </div>
              <div className="col-xl-3 col-lg-6 col-12 form-group">
                <label htmlFor="dob">Date Of Leave*</label>
                <DatePicker
                  className="form-control air-datepicker"
                  placeholder="DD/MM/YYYY"
                  dateformat="dd-MM-yyyy"
                  selected={dol}
                  onChange={(date) => {
                    setDoLDate(date);
                  }}
                  required
                />
              </div>
              <div
                className="col-lg-6 col-12 form-group"
                //style={{ height: "100px" }}
              >
                <label>Reason For Leave*</label>
                <input
                  className="textarea form-control"
                  type="textarea"
                  name="reason"
                  id="reason"
                  //cols="9"
                  rows="3"
                  value={reason}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
            </div>

            <div className="col-12 form-group mg-t-8">
              <button
                type="submit"
                className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark"
                style={{ marginTop: "40px" }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default TeacherLeaveForm;
