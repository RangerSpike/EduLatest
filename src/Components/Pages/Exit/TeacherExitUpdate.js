/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-concat */
// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Navbar from "../../Common/Navbar/Navbar";
import axios from "axios";
import { useHistory } from "react-router-dom";

function TeacherExitUpdate(props) {
  const history = useHistory();
  let newId = "";
  newId = props.match.params.id;

  const [doj, setDojDate] = useState();
  const [doe, setDoeDate] = useState();
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [reason, setReason] = useState();

  useEffect(() => {
    axios
      .post("https://db.edusoft.entema-software.com/getTeacherExitOnId", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
        tchId: newId,
      })
      .then((res) => {
        if (res.data.length > 0) {
          console.log(res.data);
          setId(res.data[0].TEACHERS_ID);
          setName(res.data[0].TCH_NAME);     
          setDojDate(res.data[0].TCH_DOJ);
          setDoeDate(res.data[0].TCH_DOE);         
          setReason(res.data[0].TCH_REASON)
        }
      });
  }, [newId]);

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

  const onSubmit = (e) => {
    e.preventDefault();

    if (id || name) {
      axios
        .post("https://db.edusoft.entema-software.com/updateTeacherExit", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
          tchId: newId,
          tchReason: reason,
        })
        .then(() => {
          console.log("Successfully Created");
          history.push("/TeachERep");
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
              <h3 style={{ padding: "50px" }}>Teacher Exit Update </h3>
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
                  //onBlur={getTchData()}
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
                <input
                  type="text"
                  className="form-control air-datepicker"
                  value={doe}
                  onChange={(date) => setDoeDate(date)}
                  placeholder="DD/MM/YYYY"
                  dateFormat="dd-MM-yyyy"
                  id="doe"
                  name="doe"
                  disabled
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

export default TeacherExitUpdate;
