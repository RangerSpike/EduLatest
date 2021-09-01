/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Axios from "axios";
import TextError from "../../../TextError";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Navbar from "../../Common/Navbar/Navbar";

function Student() {
  const [doj, setDojDate] = useState(new Date());
  const [doe, setDoeDate] = useState(new Date());

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

  const initialValues = {
    id: "",
    name: "",
    class: "",
    doe: doe,
    doj: doj,
    CCI: "",
    Reason: "",
  };
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

  const savedValues = {
    id: "",
    name: "",
    class: "",
    doe: "",
    doj: "",
    CCI: "",
    Reason: "",
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
    class: Yup.string().required("*This Field is Mandatory"),
    doe: Yup.string().required("*This Field is Mandatory"),
    doj: Yup.string().required("*This Field is Mandatory"),
    CCI: Yup.string().required("*This Field is Mandatory"),
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

          <Formik
            initialValues={initialValues || savedValues}
            validationSchema={userValidation}
            onSubmit={onSubmit}
            enableReinitialize
          >
            {(formik) => {
              return (
                <Form className="new-added-form">
                  <div className="row">
                    <div className="col-sm-3   form-group">
                      <label>Std ID</label>
                      <Field
                        type="text"
                        placeholder="ID"
                        className="form-control"
                        id="id"
                        name="id"
                      />
                      <ErrorMessage name="id" component={TextError} />
                    </div>
                    <div className="col-sm-3 form-group">
                      <label> Name </label>
                      <Field
                        type="text"
                        placeholder="Name"
                        className="form-control"
                        id="name"
                        name="name"
                      />
                      <ErrorMessage name="name" component={TextError} />
                    </div>
                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <label htmlFor="gender">Class</label>
                      <Field
                        as="select"
                        id="class"
                        name="class"
                        className="form-control"
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
                      </Field>
                      <ErrorMessage name="class" component={TextError} />
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
                      />
                      <ErrorMessage name="doe" component={TextError} />
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
                      />
                      <ErrorMessage name="doj" component={TextError} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-3 col-lg-6 col-12 form-group">
                      <label htmlFor="gender">
                        Charecter Certificate Issued
                      </label>
                      <Field
                        as="select"
                        id="CCi"
                        name="CCI"
                        className="form-control"
                      >
                        {optionCCI.map((optionCCI) => {
                          return (
                            <option key={optionCCI.key} value={optionCCI.value}>
                              {optionCCI.key}
                            </option>
                          );
                        })}
                      </Field>
                      <ErrorMessage name="class" component={TextError} />
                    </div>
                    <div
                      className="col-lg-6 col-12 form-group"
                      style={{ height: "100px" }}
                    >
                      <label>Reason For Leaving</label>

                      <Field
                        className="textarea form-control"
                        as="textarea"
                        name="Reason"
                        id="Reason"
                        cols="10"
                        rows="3"
                      />
                      <ErrorMessage name="Reason" component={TextError} />
                    </div>
                  </div>
                  <div className="col-12 form-group mg-t-8">
                    <button
                      type="submit"
                      className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark"
                      style={{ marginTop: "40px" }}
                      disabled={
                        !formik.isValid ||
                        !formik.dirty ||
                        formik.isSubmitting
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

export default Student;
