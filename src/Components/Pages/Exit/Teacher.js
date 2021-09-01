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
          <Formik
            initialValues={initialValues || savedValues}
            validationSchema={userValidation}
            enableReinitialize
            onSubmit={onsubmit}
          >
            <Form className="new-added-form">
              <div className="row">
                <div className="col-sm-3   form-group">
                  <label> ID</label>
                  <Field
                    type="text"
                    placeholder="Teacher ID"
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
                  <ErrorMessage name="doe" component={TextError} />
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
                  <ErrorMessage name="doj" component={TextError} />
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
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}

export default Teacher;
