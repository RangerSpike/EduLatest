/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {  Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Navbar from "../../Common/Navbar/Navbar";

function Student() {
  const [doj, setDojDate] = useState(new Date());
  const [doe, setDoeDate] = useState(new Date());
  const [id,setId] = useState();
  const [name,setName] = useState();
  const [cci,setCci] = useState();
  const [reason,setReason] = useState();
  const [Class,setCLass] = useState();

  const handleChange = (e) => {
    console.log(e.target.value);

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
  } else if (input === "Class") {
    setCLass(e.target.value);};
  };

  const [dbAction, setDbAction] = useState("Create");
  const [formValues, setFormValues] = useState(null);

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

 
  const newForm = (formData) => {
    if (dbAction === "Create") {
      Axios.post("http://localhost:3004/createStdExit", {
        std_name: formData.id,
        std_class: formData.name,
        std_doe: formData.doe,
        std_doj: formData.doj,
        std_chr_cert: formData.CCI,
        std_reason: formData.Reason,
       }).then(() => {
        console.log("Successfully Created");
      });
    }
  };

 

  const onSubmit = (value, onSubmitProps) => {
    console.log("Submitted Data : ", value);
    console.log("submit props : ", onSubmitProps);
    //nSubmitProps.setSubmitting(false);
    //onSubmitProps.resetForm();
  };

  

  return (
    <>
    <Navbar/>
      <div className="card height-auto">
        <div className="card-body">
          <div className="heading-layout1">
            <div className="item-title">
              <h3 style={{ padding: "50px" }}>Exit From </h3>
            </div>
          </div>

         
                <form className="new-added-form">
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
                      />
                    </div>
                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <label htmlFor="gender">Class</label>
                      <select
                        as="select"
                        id="class"
                        name="class"
                        className="form-control"
                       
                        onChange={(e) => handleChange(e)}
                      >
                        {optionClass.map((optionClass) => {
                          return (
                            <option
                              key={optionClass.key}
                              value={optionClass.value}
                            >
                              {optionClass.key}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <label>Date Of Exit</label>
                      <DatePicker
                        className="form-control air-datepicker"
                        selected={doe}
                        onChange={(date) => setDoeDate(date)}
                        placeholder="DD/MM/YYYY"
                        dateFormat="dd-MM -yyyy"
                        id="doe"
                        name="doe"
                        value={doe}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <label>Date Of Join</label>
                      <DatePicker
                        className="form-control air-datepicker"
                        selected={doj}
                        onChange={(date) => setDojDate(date)}
                        placeholder="DD/MM/YYYY"
                        dateFormat="dd-MM -yyyy"
                        id="doj"
                        name="doj"
                        value={doj}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <label htmlFor="gender">
                        Charecter Certificate Issued
                      </label>
                      <select
                        as="select"
                        id="CCi"
                        name="CCI"
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
                        name="Reason"
                        id="Reason"
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
                     
                      onClick={() => {
                        console.log(
                          "Calling locally submit server dbaction ",
                          dbAction
                        );
                        //setDbAction("Create");
                      }}
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

export default Student;
