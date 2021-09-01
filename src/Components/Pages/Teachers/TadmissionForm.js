/*eslint-disable*/
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";

import Axios from "axios";

import TextError from "../../../TextError";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../../Common/Navbar/Navbar";

function TadmissionForm() {
  const [dob, setDobDate] = useState(new Date());
  const [doj, setDojDate] = useState(new Date());

  const [dbAction, setDbAction] = useState("Create");

  const optionGender = [
    { key: "Select Gender", value: "" },
    { key: "Male", value: "Male" },
    { key: "Female", value: "Female" },
    { key: "Other", value: "Other" },
  ];

  const initialValues = {
    teacherId: "",
    name: "",
    gender: "",
    dob: dob,
    doj: doj,
    address: "",
    image: "",
    phoneNo: "",
    YOE: "",
    prevSchool: "",
    email: "abc@gmail.com",
  };

  const savedValues = {
    teacherId: "121",
    name: "hello",
    gender: "Male",
    dob: dob,
    doj: doj,
    address: "new",
    image: "",
    phoneNo: "815089213",
    YOE: "3",
    prevSchool: "hello school",
  };

  const userValidation = Yup.object({
    teacherId: Yup.string().required("*This Field is Mandatory"),
    name: Yup.string().required("*This Field is Mandatory"),
    address: Yup.string().required("*This Field is Mandatory"),
    gender: Yup.string().required("*This Field is Mandatory"),
    phoneNo: Yup.string().required("*This Field is Mandatory"),
    dob: Yup.string().required("*This Field is Mandatory"),
    YOE: Yup.string().required("*This Field is Mandatory"),
    prevSchool: Yup.string().required("*This Field is Mandatory"),
  });

  const onSubmit = (value, onSubmitProps) => {
    console.log("Submitted Data : ", value);
    //console.log("submit props : ", onSubmitProps);
    onSubmitProps.setSubmitting(false);
    setDobDate("");
    onSubmitProps.resetForm();
  };

  const newForm = (formData) => {
    if (dbAction === "Create") {
      Axios.post("http://localhost:3004/createTeacher", {
        tch_name: formData.name,
        tch_gender: formData.gender,
        tch_dob: formData.dob,
        tch_doj: formData.doj,
        tch_phone: formData.phoneNo,
        tch_exp: formData.YOE,
        tch_photo: formData.image,
        tch_address: formData.address,
        tch_pus: formData.prevSchool,
        tch_email: formData.email,
      }).then(() => {
        console.log("Successfully Created");
      });
    }
  };

  return (
    <>
    <Navbar/>
      <div className="card height-auto">
        <div className="card-body">
          <div className="heading-layout1">
            <div className="item-title">
              <h3 style={{ padding: "50px" }}>Teacher Admission Form </h3>
            </div>
          </div>

          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={userValidation}
            enableReinitialize
          >
            {(formik) => {
              console.log("Formik props", formik);
              return (
                <Form className="new-added-form">
                  <div className="row">
                    <div className="col-sm-3   form-group">
                      <label>Teacher ID</label>
                      <Field
                        type="text"
                        placeholder="Teacher ID"
                        className="form-control"
                        id="teacherId"
                        name="teacherId"
                      />
                      <ErrorMessage name="teacherId" component={TextError} />
                    </div>
                    <div className="col-sm-3 form-group">
                      <label>Name</label>
                      <Field
                        type="text"
                        placeholder="Full Name"
                        className="form-control"
                        id="name"
                        name="name"
                      />
                      <ErrorMessage name="name" component={TextError} />
                    </div>
                    <div className="col-md-3  form-group">
                      <label htmlFor="gender">Gender</label>
                      <Field
                        as="select"
                        id="gender"
                        name="gender"
                        className="form-control"
                      >
                        {optionGender.map((optionGender) => {
                          return (
                            <option
                              key={optionGender.key}
                              value={optionGender.value}
                            >
                              {optionGender.key}
                            </option>
                          );
                        })}
                      </Field>
                      <ErrorMessage name="gender" component={TextError} />
                    </div>
                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <label htmlFor="dob">Date Of Birth</label>
                      <DatePicker
                        className="form-control air-datepicker"
                        placeholder="DD/MM/YYYY"
                        selected={dob}
                        onChange={(date) => {
                          setDobDate(date);
                        }}
                        dateFormat="dd-MM-yyyy"
                      />

                      <ErrorMessage name="dob" component={TextError} />
                    </div>
                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <label>Phone Number</label>
                      <Field
                        type="text"
                        placeholder="Ph. Number"
                        className="form-control"
                        id="phoneNo"
                        name="phoneNo"
                      />
                      <ErrorMessage name="phoneNo" component={TextError} />
                    </div>
                    <div className="col-lg-3 col-12 form-group mg-t-30">
                      <label className="text-dark-medium">
                        Upload Student Photo
                      </label>
                      <input type="file" className="form-control-file" />
                    </div>
                    <div
                      className="col-lg-6 col-12 form-group"
                      style={{ height: "100px" }}
                    >
                      <label>Address</label>
                      <Field
                        className="textarea form-control"
                        as="textarea"
                        name="address"
                        id="address"
                        cols="10"
                        rows="3"
                      />
                      <ErrorMessage name="address" component={TextError} />
                    </div>

                    <hr style={{ width: "1028px" }} />
                    <div className="heading-layout1">
                      <div className="item-title">
                        <h3 style={{ padding: "50px" }}>Education Details</h3>
                      </div>
                    </div>

                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <label htmlFor="dob">Date Of join</label>

                      <DatePicker
                        className="form-control air-datepicker"
                        selected={doj}
                        onChange={(date) => setDojDate(date)}
                        placeholder="DD/MM/YYYY"
                        dateFormat="dd-MM-yyyy"
                        disabled
                      />

                      <ErrorMessage name="doj" component={TextError} />
                    </div>

                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <label>Years Of Exp</label>
                      <Field
                        type="number"
                        placeholder="Years Of Exp."
                        className="form-control"
                        id="YOE"
                        name="YOE"
                      />
                      <ErrorMessage name="YOE" component={TextError} />
                    </div>
                  </div>

                  <div
                    className="col-lg-6 col-12 form-group"
                    style={{ height: "100px" }}
                  >
                    <label>Previous University/School</label>
                    <Field
                      className="textarea form-control"
                      as="textarea"
                      name="prevSchool"
                      id="prevSchool"
                      cols="10"
                      rows="3"
                    />
                    <ErrorMessage name="prevSchool" component={TextError} />
                  </div>
                  <div className="col-12 form-group mg-t-8">
                    <button
                      type="submit"
                      className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark"
                      style={{ marginTop: "40px" }}
                      disabled={
                        !formik.isValid || !formik.dirty || formik.isSubmitting
                      }
                      onClick={() => {
                        console.log(
                          "Calling locally submit server dbaction ",
                          dbAction
                        );
                        //setDbAction("Create");
                        newForm(formik.values);
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default TadmissionForm;
