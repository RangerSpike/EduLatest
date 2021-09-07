import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "../../../TextError";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Navbar from "../../Common/Navbar/Navbar";

function Teacher() {
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


  const initialValues = {
    id: "1",
    name: "2",
    doe: "19-04-2001",
    doj: "19-04-2001",
    Reason: "SOMETIHNG",
  };
  const savedValues = {
    id: "1",
    name: "dsad",
    doe: "19-04-2001",
    doj: "21-02-2202",
    Reason: "SOMETIHNG",
  };

  const onSubmit = (value, onSubmitProps) => {
    console.log("Submitted Data : ", value);
    //console.log("submit props : ", onSubmitProps);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  };
  const userValidation = Yup.object({
    id: Yup.string().required("*This Field is Mandatory"),
    name: Yup.string().required("*This Field is Mandatory"),
    doe: Yup.string().required("*This Field is Mandatory"),
    doj: Yup.string().required("*This Field is Mandatory"),
    Reason: Yup.string().required("*This Field is Mandatory"),
  });

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
                  <label> ID</label>
                  <input
                    type="text"
                    placeholder="Teacher ID"
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
                  <DatePicker
                    className="form-control air-datepicker"
                    selected={doj}
                    onChange={(date) => setDojDate(date)}
                    placeholder="DD/MM/YYYY"
                    dateFormat="dd-MM-yyyy"
                    id="doj"
                    name="doj"
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
                    name="Reason"
                    id="Reason"
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
                    onSubmit={onSubmit}
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
