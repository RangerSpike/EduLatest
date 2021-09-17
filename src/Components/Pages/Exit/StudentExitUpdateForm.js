/* eslint-disable no-unused-vars */
// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import Axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Navbar from "../../Common/Navbar/Navbar";
import axios from "axios";
import { useHistory } from "react-router-dom";

function StudentExitUpdate(props) {
  const history = useHistory();
  let newId = "";
  newId = props.match.params.id;

  const [doj, setDojDate] = useState();
  const [doe, setDoeDate] = useState();
  const [id, setId] = useState();
  const [stdId, setStdId] = useState();
  const [name, setName] = useState();
  const [cci, setCci] = useState();
  const [reason, setReason] = useState();
  const [SClass, setSClass] = useState();
  const [stdSts, setStdSts] = useState("Transferd");

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
    } else if (input === "cci") {
      setCci(e.target.value);
    } else if (input === "reason") {
      setReason(e.target.value);
    } else if (input === "SClass") {
      setSClass(e.target.value);
    }
  };

  useEffect(() => {
    axios
      .post("http://localhost:3004/getStudentExitOnId", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
        stdId: newId,
      })
      .then((res) => {
        if (res.data.length > 0) {
          console.log(res.data);
          setId(res.data[0].STUDENTS_ID);
          setName(res.data[0].STD_NAME);
          setSClass(res.data[0].STD_CLASS);
          setDojDate(res.data[0].STD_DOJ);
          setDoeDate(res.data[0].STD_DOE);
          setCci(res.data[0].STD_CHR_CERT);
          setReason(res.data[0].STD_REASON);
        }
      });
  }, [newId]);

  const optionClass = [
    { key: "Select Class", value: "" },
    { key: "1", value: "1" },
    { key: "2", value: "2" },
    { key: "3", value: "3" },
    { key: "4", value: "4" },
    { key: "5", value: "5" },
    { key: "6", value: "6" },
    { key: "7", value: "7" },
    { key: "8", value: "8" },
    { key: "9", value: "9" },
    { key: "10", value: "10" },
  ];

  const optionCCI = [
    { key: "Select Class", value: "" },
    { key: "Positive", value: "Positive" },
    { key: "Negetive", value: "Negetive" },
  ];

  const onSubmit = (e) => {
    e.preventDefault();

    Axios.post("http://localhost:3004/updateStudentExit", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
      studentId: newId,
      stdCharC: cci,
      stdReason: reason,
    }).then(() => {
      console.log("Successfully Created");
      history.push("/StdERep");
    });
  };

  return (
    <>
      <Navbar />
      <div className="card height-auto">
        <div className="card-body">
          <div className="heading-layout1">
            <div className="item-title">
              <h3 style={{ padding: "50px" }}>Student Exit Update </h3>
            </div>
          </div>

          <form className="new-added-form" onSubmit={onSubmit}>
            <div className="row">
              <div className="col-sm-3   form-group">
                <label>Std ID</label>
                <input
                  type="text"
                  placeholder="ID"
                  className="form-control"
                  id="id"
                  name="id"
                  value={id}
                  onChange={(e) => handleChange(e)}
                  required
                  disabled
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
                  required
                />
              </div>
              <div className="col-xl-3 col-lg-6 col-12 form-group">
                <label htmlFor="gender">Class</label>
                <select
                  as="select"
                  id="SClass"
                  name="SClass"
                  className="form-control"
                  value={SClass}
                  onChange={(e) => handleChange(e)}
                  disabled
                  required
                >
                  {optionClass.map((optionClass) => {
                    return (
                      <option key={optionClass.key} value={optionClass.value}>
                        {optionClass.key}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="col-xl-3 col-lg-6 col-12 form-group">
                <label>Date Of Exit</label>
                <input
                  type="text"
                  className="form-control air-datepicker"
                  selected={doe}
                  onChange={(date) => setDoeDate(date)}
                  placeholder="DD/MM/YYYY"
                  dateFormat="dd-MM -yyyy"
                  id="doe"
                  name="doe"
                  value={doe}
                  onChange={(e) => handleChange(e)}
                  disabled
                />
              </div>
              <div className="col-xl-3 col-lg-6 col-12 form-group">
                <label>Date Of Join</label>
                <input
                  type="text"
                  className="form-control air-datepicker"
                  //placeholder="DD/MM/YYYY"
                  //dateFormat="dd-MM -yyyy"
                  id="doj"
                  name="doj"
                  value={doj}
                  onChange={(e) => handleChange(e)}
                  disabled
                />
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-12 form-group">
                <label htmlFor="gender">Charecter Certificate Issued</label>
                <select
                  as="select"
                  id="cci"
                  name="cci"
                  value={cci}
                  className="form-control"
                  onChange={(e) => handleChange(e)}
                >
                  {optionCCI.map((optionCCI) => {
                    return (
                      <option key={optionCCI.key} value={optionCCI.value}>
                        {optionCCI.key}
                      </option>
                    );
                  })}
                </select>
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

export default StudentExitUpdate;
