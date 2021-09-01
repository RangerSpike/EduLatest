/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Axios from "axios";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
// import TextError from "../../TextError";
import "react-datepicker/dist/react-datepicker.css";
import "./AdmissionForm.css";

function ReportForm(props) {
  let newId = "";
  newId = props.match.params.id;

  const [dob, setDob] = useState();
  const [doj, setDojDate] = useState(new Date());

  const [initialValues, setInitialValues] = useState();

  const [admissionId, setAdmissionId] = useState();
  const [fullName, setFullName] = useState();
  const [gender, setGender] = useState();
  const [religion, setReligion] = useState();
  const [cast, setCast] = useState();
  const [nationality, setNationality] = useState();
  const [Sclass, setSclass] = useState();
  const [section, setSection] = useState();
  const [rollno, setRollNo] = useState();
  const [bloodGroup, setBloodGroup] = useState();
  const [address, setAddress] = useState();
  const [image, setImage] = useState();
  const [father, setFather] = useState();
  const [fatherOccupation, setFatherOccupation] = useState();
  const [phoneNo, setPhone] = useState();
  const [email, setEmail] = useState();

  const handleChange = (e) => {
    console.log(e.target.name);
    const input = e.target.name;
    if (input === "fullName") {
      setFullName(e.target.value)
    }else if(input === "gender"){
      setGender(e.target.value)
    }else if(input === "religion"){
      setGender(e.target.value)
    }else if(input === "cast"){
      setGender(e.target.value)
    }else if(input === "nationality"){
      setGender(e.target.value)
    }else if(input === "Sclass"){
      setGender(e.target.value)
    }else if(input === "section"){
      setGender(e.target.value)
    }else if(input === "rollno"){
      setGender(e.target.value)
    }else if(input === "bloodGroup"){
      setGender(e.target.value)
    }else if(input === "address"){
      setGender(e.target.value)
    }else if(input === "image"){
      setGender(e.target.value)
    }else if(input === "father"){
      setGender(e.target.value)
    }else if(input === "fatherOccupation"){
      setGender(e.target.value)
    }else if(input === "phoneNo"){
      setGender(e.target.value)
    }else if(input === "email"){
      setGender(e.target.value)
    }
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

  useEffect(() => {
    Axios.post("http://localhost:3004/getStudentAdBasedOnId", {
      student_id: newId,      
    }).then((res) => {
      setTimeout(() => {
        // console.log("useEffect Action Value ", dbAction);
      });
      setAdmissionId(res.data[0].STUDENT_ID);
      setFullName(res.data[0].STD_NAME);
      setGender(res.data[0].STD_GENDER);
      //setDob(res.data[0].STD_DOB);
      //setDojDate(formatChange(res.data[0].STD_DOJ));
      setReligion(res.data[0].STD_REL);
      setCast(res.data[0].STD_CAST);
      setNationality(res.data[0].STD_NATION);
      setSclass(res.data[0].STD_CLASS);
      setSection(res.data[0].STD_SECTION);
      setRollNo(res.data[0].STD_ROLL_NO);
      setBloodGroup(res.data[0].STD_BLD_GRP);
      setAddress(res.data[0].STD_ADDRESS);
      setImage(res.data[0].STD_PHOTO);
      setFather(res.data[0].STD_PAR_GARD);
      setFatherOccupation(res.data[0].STD_PAR_OCC);
      setPhone(res.data[0].STD_PHONE);
      setEmail(res.data[0].STD_EMAIL);
      // setNewDate(new Date(res.data[0].STD_DOJ));
      // console.log("doj : "+ newDate);
      console.log("TEST FROM FORMFORMFORM ", initialValues);
    });
  }, []);

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

  const newForm = (formData) => {
    Axios.post("http://localhost:3004/update", {
      stdname: formData.fullName,
      stdgender: formData.gender,
      stddob: formData.dob,
      stddoj: formData.doj,
      stdrel: formData.religion,
      stdcast: formData.cast,
      stdntn: formData.nationality,
      stdclass: formData.class,
      stdsec: formData.section,
      stdroll: formData.rollno,
      stdbg: formData.bloodGroup,
      stdadd: formData.address,
      stdphoto: formData.image,
      stdpg: formData.father,
      stdpo: formData.fatherOccupation,
      stdph: formData.phoneNo,
      stdemail: formData.email,
    }).then(() => {
      console.log("Successfully Updated");
    });
  };

  const onSubmit = (value) => {
    newForm(value);
    console.log("Submitted Data : ", value);
    //console.log("submit props : ", onSubmitProps);
    // onSubmitProps.setSubmitting(false);
    //onSubmitProps.resetForm();
  };

  return (
    <>
      <div className="card height-auto">
        <div className="card-body">
          <div className="heading-layout1">
            <div className="item-title">
              <h3>Add New Students</h3>
            </div>
          </div>
          <form className="new-added-form">
            <div className="row">
              <div className="col-sm-3   form-group">
                <label>Admission No</label>
                <input
                  type="text"
                  placeholder="Adm .No"
                  className="form-control"
                  id="admissionId"
                  name="admissionId"
                  disabled
                  value={admissionId}
                />
              </div>
              <div className="col-sm-3 form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  name="fullName"
                  value={fullName}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="col-md-3 form-group">
                <label htmlFor="gender">Gender</label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  id="gender"
                  name="gender"
                  className="form-control"
                  value={gender}
                >
                  {optionGender.map((optionGender) => {
                    return (
                      <option key={optionGender.key} value={optionGender.value}>
                        {optionGender.key}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="col-xl-3 col-lg-6 col-12 form-group">
                <label>Date Of Birth</label>
                <DatePicker
                  className="form-control air-datepicker"
                  selected={dob}
                  onChange={(date) => setDob(date)}
                  placeholder="DD/MM/YYYY"
                  dateFormat="dd/MM/yyyy"
                  defaultValue={null}
                  value={formatChange(dob)} 
                />
              </div>

              <div className="col-xl-3 col-lg-6 col-12 form-group">
                <label>Date Of Join</label>
                <DatePicker
                  className="form-control air-datepicker"
                  selected={doj}
                  onChange={(date) => setDojDate(date)}
                  placeholder="DD/MM/YYYY"
                  dateFormat="dd/MM/yyyy"
                  disabled
                  value={doj}
                />
              </div>
              <div className="col-xl-3 col-lg-6 col-12 form-group">
                <label htmlFor="gender">Relegion</label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  id="religion"
                  name="religion"
                  className="form-control"
                  value={religion}
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
                </select>
              </div>
              <div className="col-xl-3 col-lg-6 col-12 form-group">
                <label htmlFor="cast">Cast</label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  id="cast"
                  name="cast"
                  className="form-control"
                  value={cast}
                >
                  {optionCast.map((optionCast) => {
                    return (
                      <option key={optionCast.key} value={optionCast.value}>
                        {optionCast.key}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="col-xl-3 col-lg-6 col-12 form-group">
                <label htmlFor="nationality">Nationality</label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  id="nationality"
                  name="nationality"
                  className="form-control"
                  value={nationality}
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
                </select>
              </div>

              <div className="col-sm-3   form-group">
                <label>Roll Number</label>
                <input
                  type="text"
                  placeholder=""
                  className="form-control"
                  id="rollno"
                  name="rollno"
                  value={rollno}
                />
              </div>
              <div className="col-xl-3 col-lg-6 col-12 form-group">
                <label htmlFor="class">Class</label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  id="Sclass"
                  name="Sclass"
                  className="form-control"
                  value={Sclass}
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
                <label htmlFor="section">Section</label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  id="section"
                  name="section"
                  className="form-control"
                  value={section}
                >
                  {optionSection.map((optionSection) => {
                    return (
                      <option
                        key={optionSection.key}
                        value={optionSection.value}
                      >
                        {optionSection.key}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="col-lg-3 col-12 form-group mg-t-30">
                <label className="text-dark-medium">Upload Student Photo</label>
                <input type="file" className="form-control-file" />
              </div>
              <div className="col-xl-3 col-lg-6 col-12 form-group">
                <label htmlFor="bloodgroup">bloodgroup</label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  id="gender"
                  name="gender"
                  className="form-control"
                  value={bloodGroup}
                >
                  {optionBlood.map((optionBlood) => {
                    return (
                      <option key={optionBlood.key} value={optionBlood.value}>
                        {optionBlood.key}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div
                className="col-lg-6 col-12 form-group"
                style={{ height: "100px" }}
              >
                <label>Address</label>
                <input
                  className="textarea form-control"
                  as="textarea"
                  name="address"
                  id="address"
                  cols="10"
                  rows="3"
                  value={address}
                />
              </div>

              <hr style={{ width: "1028px" }} />
              <div className="heading-layout1">
                <div className="item-title">
                  <h3>Parents details</h3>
                </div>
              </div>
              <div className="col-sm-3 form-group">
                <label>Father/Gaurdian Name </label>
                <input
                  type="text"
                  placeholder=""
                  className="form-control"
                  name="father"
                  id="father"
                  value={father}
                />
              </div>
              <div className="col-sm-3 form-group">
                <label>Father/Gaurdian Occupation </label>
                <input
                  type="text"
                  placeholder=""
                  className="form-control"
                  name="fatherOccupation"
                  id="fatherOccupation"
                  value={fatherOccupation}
                />
              </div>

              <div className="col-xl-3 col-lg-6 col-12 form-group">
                <label>Phone No </label>
                <input
                  type="text"
                  placeholder=""
                  className="form-control"
                  name="phoneNo"
                  id="phoneNo"
                  value={phoneNo}
                />
              </div>
              <div className="col-xl-3 col-lg-6 col-12 form-group">
                <label>E-Mail ID</label>
                <input
                  type="text"
                  placeholder=""
                  className="form-control"
                  name="email"
                  id="email"
                  value={email}
                />
              </div>
              <div className="col-12 form-group mg-t-8">
                <button
                  type="submit"
                  className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark "
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ReportForm;
