/*eslint-disable*/
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Axios from "axios";
import Navbar from "../../../Components/Common/Navbar/Navbar";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import ScrollArea from "react-scrollbar";
import TextError from "../../../TextError";
import "react-datepicker/dist/react-datepicker.css";

import "./AdmissionForm.css";

function AdmissionForm() {
  const [dob, setDobDate] = useState();
  const [doj, setDojDate] = useState(new Date());

  const [dbAction, setDbAction] = useState("Create");
  const [formValues, setFormValues] = useState(null);

  const onSubmit = (value, onSubmitProps) => {
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  };

  const formatChange = (date) => {
    let newdate = new Date(date);

    let crtDay = newdate.getDate();
    let crtMonth = newdate.getMonth() + 1;
    let crtYear = newdate.getFullYear();

    if (crtMonth in [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
      newdate = crtDay + "-0" + crtMonth + "-" + crtYear;
    } else {
      newdate = crtDay + "-" + crtMonth + "-" + crtYear;
    }
    console.log(newdate);
    return newdate;
  };

  const newForm = (formData) => {
    Axios.post("http://localhost:3004/createStudent", {
      stdname: formData.fullName,
      stdgender: formData.gender,
      stddob: formatChange(formData.dob),
      stddoj: formatChange(formData.doj),
      stdrel: formData.religion,
      stdcast: formData.cast,
      stdntn: formData.nationality,
      stdclass: formData.class,
      section: formData.section,
      stdroll: formData.rollno,
      stdbg: formData.bloodGroup,
      stdadd: formData.address,
      stdphoto: formData.image,
      stdpg: formData.father,
      stdpo: formData.fatherOccupation,
      stdph: formData.phoneNo,
      stdemail: formData.email,
    }).then(() => {
      console.log("Successfully Created");
    });
  };

  const optionGender = [
    { key: "Select Gender", value: "" },
    { key: "Male", value: "Male" },
    { key: "Female", value: "Female" },
    { key: "Other", value: "Other" },
  ];

  const optionReligion = [
    { key: "Select Religion", value: "" },
    { key: "Hindu", value: "Hindu" },
    { key: "Muslim", value: "Muslim" },
    { key: "Christian", value: "Christian" },
    { key: "Others", value: "Others" },
  ];

  const optionCast = [
    { key: "Select Cast", value: "" },
    { key: "SC/ST", value: "SC/ST" },
    { key: "OBC", value: "OBC" },
    { key: "Gouda", value: "Gouda" },
  ];

  const optionNationality = [
    { key: "Select Nationality", value: "" },
    { key: "Indian", value: "Indian" },
    { key: "NRI", value: "NRI" },
  ];

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

  const optionSection = [
    { key: "Select Section", value: "" },
    { key: "A", value: "A" },
    { key: "B", value: "B" },
    { key: "C", value: "C" },
    { key: "D", value: "D" },
    { key: "E", value: "E" },
  ];

  const optionBlood = [
    { key: "Select BloodGroup", value: "" },
    { key: "A+", value: "A+" },
    { key: "B+", value: "B+" },
    { key: "AB+", value: "AB+" },
    { key: "AB-", value: "AB-" },
    { key: "O+", value: "O+" },
    { key: "O-", value: "O-" },
  ];

  const initialValues = {
    admissionId: "1",
    fullName: "",
    gender: "",
    dob: dob,
    doj: doj,
    religion: "",
    cast: "",
    nationality: "",
    class: "",
    section: "",
    rollno: "",
    bloodGroup: "",
    address: "",
    image: "",
    father: "",
    fatherOccupation: "",
    phoneNo: "",
    email: "",
  };

  const userValidation = Yup.object({
    fullName: Yup.string().required("*This Field is Mandatory"),
    address: Yup.string().required("*This Field is Mandatory"),
    father: Yup.string().required("*This Field is Mandatory"),
    fatherOccupation: Yup.string().required("*This Field is Mandatory"),
    phoneNo: Yup.string().required("*This Field is Mandatory"),
    gender: Yup.string().required("*This Field is Mandatory"),
    dob: Yup.string().required("*This Field is Mandatory"),
    class: Yup.string().required("*This Field is Mandatory"),
    section: Yup.string().required("*This Field is Mandatory"),
    nationality: Yup.string().required("*This Field is Mandatory"),
  });

  return (
    <>
      <Navbar />
      <ScrollArea>
        <div className="card height-auto">
          <div className="card-body">
            <div className="heading-layout1">
              <div className="item-title">
                <h3>Add New Students</h3>
              </div>
            </div>

            <Formik
              initialValues={formValues || initialValues}
              onSubmit={onSubmit}
              validationSchema={userValidation}
              enableReinitialize
            >
              {(formik) => {
                //console.log("Formik props", formik);
                return (
                  <Form className="new-added-form">
                    <div className="row">
                      <div className="col-sm-3   form-group">
                        <label htmlFor="admissionId">Admission No</label>
                        <Field
                          type="text"
                          placeholder="Adm .No"
                          className="form-control"
                          id="admissionId"
                          name="admissionId"
                          disabled
                        />
                      </div>
                      <div className="col-sm-3 form-group">
                        <label htmlFor="fullName">Full Name </label>
                        <Field
                          type="text"
                          placeholder="Name"
                          className="form-control"
                          id="fullName"
                          name="fullName"
                        />
                        <ErrorMessage name="fullName" component={TextError} />
                      </div>
                      <div className="col-md-3 form-group">
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
                        <label>Date Of Birth</label>
                        <DatePicker
                          className="form-control air-datepicker"
                          selected={dob}
                          onChange={(date) => setDobDate(date)}
                          placeholder="DD/MM/YYYY"
                          dateFormat="dd-MM-yyyy"
                        />

                        <ErrorMessage name="dob" component={TextError} />
                      </div>

                      <div className="col-xl-3 col-lg-6 col-12 form-group">
                        <label>Date Of Join</label>
                        <DatePicker
                          className="form-control air-datepicker"
                          selected={doj}
                          onChange={(date) => setDojDate(date)}
                          placeholder="DD/MM/YYYY"
                          dateFormat="dd-MM-yyyy"
                          disabled
                        />
                      </div>
                      <div className="col-xl-3 col-lg-6 col-12 form-group">
                        <label htmlFor="gender">Relegion</label>
                        <Field
                          as="select"
                          id="religion"
                          name="religion"
                          className="form-control"
                        >
                          {optionReligion.map((optionReligion) => {
                            return (
                              <option
                                key={optionReligion.key}
                                value={optionReligion.value}
                              >
                                {optionReligion.key}
                              </option>
                            );
                          })}
                        </Field>
                      </div>
                      <div className="col-xl-3 col-lg-6 col-12 form-group">
                        <label htmlFor="cast">Cast</label>
                        <Field
                          as="select"
                          id="cast"
                          name="cast"
                          className="form-control"
                        >
                          {optionCast.map((optionCast) => {
                            return (
                              <option
                                key={optionCast.key}
                                value={optionCast.value}
                              >
                                {optionCast.key}
                              </option>
                            );
                          })}
                        </Field>
                      </div>
                      <div className="col-xl-3 col-lg-6 col-12 form-group">
                        <label htmlFor="nationality">Nationality</label>
                        <Field
                          as="select"
                          id="nationality"
                          name="nationality"
                          className="form-control"
                        >
                          {optionNationality.map((optionNationality) => {
                            return (
                              <option
                                key={optionNationality.key}
                                value={optionNationality.value}
                              >
                                {optionNationality.key}
                              </option>
                            );
                          })}
                        </Field>
                        <ErrorMessage
                          name="nationality"
                          component={TextError}
                        />
                      </div>

                      <div className="col-sm-3   form-group">
                        <label>Roll Number</label>
                        <Field
                          type="text"
                          placeholder=""
                          className="form-control"
                          id="rollno"
                          name="rollno"
                        />
                      </div>
                      <div className="col-xl-3 col-lg-6 col-12 form-group">
                        <label htmlFor="class">Class</label>
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
                        <label htmlFor="section">Section</label>
                        <Field
                          type="text"
                          placeholder="section"
                          className="form-control"
                          id="section"
                          name="section"
                        />
                        <ErrorMessage name="section" component={TextError} />
                      </div>
                      <div className="col-lg-3 col-12 form-group mg-t-30">
                        <label className="text-dark-medium">
                          Upload Student Photo
                        </label>
                        <input type="file" className="form-control-file" />
                      </div>
                      <div className="col-xl-3 col-lg-6 col-12 form-group">
                        <label htmlFor="bloodgroup">bloodgroup</label>
                        <Field
                          as="select"
                          id="bloodGroup"
                          name="bloodGroup"
                          className="form-control"
                        >
                          {optionBlood.map((optionBlood) => {
                            return (
                              <option
                                key={optionBlood.key}
                                value={optionBlood.value}
                              >
                                {optionBlood.key}
                              </option>
                            );
                          })}
                        </Field>
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
                          <h3>Parents details</h3>
                        </div>
                      </div>
                      <div className="col-sm-3 form-group">
                        <label>Father/Gaurdian Name </label>
                        <Field
                          type="text"
                          placeholder=""
                          className="form-control"
                          name="father"
                          id="father"
                        />
                        <ErrorMessage name="father" component={TextError} />
                      </div>
                      <div className="col-sm-3 form-group">
                        <label>Father/Gaurdian Occupation </label>
                        <Field
                          type="text"
                          placeholder=""
                          className="form-control"
                          name="fatherOccupation"
                          id="fatherOccupation"
                        />
                        <ErrorMessage
                          name="fatherOccupation"
                          component={TextError}
                        />
                      </div>

                      <div className="col-xl-3 col-lg-6 col-12 form-group">
                        <label>Phone No </label>
                        <Field
                          type="text"
                          placeholder=""
                          className="form-control"
                          name="phoneNo"
                          id="phoneNo"
                        />
                        <ErrorMessage name="phoneNo" component={TextError} />
                      </div>
                      <div className="col-xl-3 col-lg-6 col-12 form-group">
                        <label>E-Mail ID</label>
                        <Field
                          type="text"
                          placeholder=""
                          className="form-control"
                          name="email"
                          id="email"
                        />
                      </div>
                      <div className="col-12 form-group mg-t-8">
                        <button
                          type="submit"
                          className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark "
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
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </ScrollArea>
    </>
  );
}

export default AdmissionForm;
