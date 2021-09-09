// eslint-disable-next-line
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Navbar from "../../Common/Navbar/Navbar";
import axios from "axios";

function Teacher() {
  const [doj, setDojDate] = useState();
  const [doe, setDoeDate] = useState(new Date());
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [reason, setReason] = useState();

  const handleChange = (e) => {
    //console.log(e.target.value);

    const input = e.target.name;
    if (input === "doj") {
      setDojDate(e.target.value);
    } else if (input === "doe") {
      setDoeDate(e.target.value);
    } else if (input === "id") {
      setId(e.target.value);
    } else if (input === "name") {
      setName(e.target.value);
    } else if (input === "reason") {
      setReason(e.target.value);
    }
  };

  const getTchData = () => {
    axios
      .post("http://localhost:3004/getTeacherBasedOnExitId", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
        tchId: id,
      })
      .then((res) => {
        if (res.data.length > 0) {
          //console.log(res.data);
          //setStdId(res.data[0].STUDENT_ID);
          setName(res.data[0].TCH_NAME);
          setDojDate(res.data[0].TCH_DOJ);
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

  const onSubmit = (e) => {
    e.preventDefault();
    
    if (id && name) {
      axios
        .post("http://localhost:3004/insertTeacherExit", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
          tchId: id,
          tchName: name,
          tchDoe: setDateFormat(doe),
          tchDoj: doj,
          tchReason: reason,
          tchSts: "Transferd",
        })
        .then(() => {
          console.log("Successfully Created");
          setDojDate("");
          setDoeDate();
          setId("");
          setName("");
          setReason("");
        });
    }
  };

  return (
    <>
      <Navbar />
      <div className="card height-auto">
        <div className="card-body">
          <div className="heading-layout1">
            <div className="item-title">
              <h3 style={{ padding: "50px" }}>Exit From </h3>
            </div>
          </div>

          <form className="new-added-form" onSubmit={onSubmit}>
            <div className="row">
              <div className="col-sm-3   form-group">
                <label> ID</label>
                <input
                  type="text"
                  placeholder="Teacher ID"
                  className="form-control"
                  id="id"
                  name="id"
                  value={id}
                  onChange={(e) => handleChange(e)}
                  onBlur={getTchData()}
                />
              </div>
              <div className="col-sm-3 form-group">
                <label> Name </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => handleChange(e)}
                  disabled
                />
              </div>
              <div className="col-xl-3 col-lg-6 col-12 form-group">
                <label>Date Of Exit</label>
                <DatePicker
                  className="form-control air-datepicker"
                  selected={doe}
                  onChange={(date) => setDoeDate(date)}
                  placeholder="DD/MM/YYYY"
                  dateFormat="dd-MM-yyyy"
                  id="doe"
                  name="doe"
                />
              </div>

              <div className="col-xl-3 col-lg-6 col-12 form-group">
                <label>Date Of Join</label>
                <input
                  type="text"
                  className="form-control air-datepicker"
                  value={doj}
                  onChange={(date) => setDojDate(date)}
                  placeholder="DD/MM/YYYY"
                  dateFormat="dd-MM-yyyy"
                  id="doj"
                  name="doj"
                  disabled
                />
              </div>
              <div
                className="col-lg-6 col-12 form-group"
                style={{ height: "100px" }}
              >
                <label>Reason For Leaving</label>
                <input
                  className="textarea form-control"
                  as="textarea"
                  name="reason"
                  id="reason"
                  cols="10"
                  rows="3"
                  value={reason}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="col-12 form-group mg-t-8">
                <button
                  type="submit"
                  className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Teacher;
