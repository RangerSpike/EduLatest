/* eslint-disable no-unused-vars */
/*eslint-disable*/
import React, { useState } from "react";
import Axios from "axios";
import Navbar from "../../../Components/Common/Navbar/Navbar";
import DatePicker from "react-datepicker";
import ScrollArea from "react-scrollbar";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./AdmissionForm.css";

function AdmissionForm() {
  const [dob, setDobDate] = useState();
  const [doj, setDojDate] = useState(new Date());

  const [admissionId, setAdmissionId] = useState();
  const [fullName, setFullName] = useState();
  const [gender, setGender] = useState();
  const [religion, setReligion] = useState();
  const [cast, setCast] = useState();
  const [nationality, setNationality] = useState();
  const [Sclass, setSclass] = useState();
  const [Ssection, setSSection] = useState();
  const [rollno, setRollNo] = useState();
  const [bloodGroup, setBloodGroup] = useState();
  const [address, setAddress] = useState();
  const [image, setImage] = useState();
  const [father, setFather] = useState();
  const [fatherOccupation, setFatherOccupation] = useState();
  const [phoneNo, setPhone] = useState();
  const [email, setEmail] = useState();

  const notifymin = () => toast("Min 10 Charecters Required For Phone Number");
  const notifyRoll = () => toast("Roll Number Already Exist!!");

  const handleChange = (e) => {
    console.log(e.target.value);
    //console.log(e.target.files[0]);

    const input = e.target.name;
    if (input === "fullName") {
      setFullName(e.target.value);
    } else if (input === "gender") {
      setGender(e.target.value);
    } else if (input === "religion") {
      setReligion(e.target.value);
    } else if (input === "cast") {
      setCast(e.target.value);
    } else if (input === "nationality") {
      setNationality(e.target.value);
    } else if (input === "Sclass") {
      setSclass(e.target.value);
    } else if (input === "Ssection") {
      setSSection(e.target.value);
    } else if (input === "rollno") {
      setRollNo(e.target.value);
    } else if (input === "bloodGroup") {
      setBloodGroup(e.target.value);
    } else if (input === "address") {
      setAddress(e.target.value);
    } else if (input === "image") {
      setImage(e.target.files[0]);
      console.log(e.target.files[0]);
    } else if (input === "father") {
      setFather(e.target.value);
    } else if (input === "fatherOccupation") {
      setFatherOccupation(e.target.value);
    } else if (input === "phoneNo") {
      setPhone(e.target.value);
    } else if (input === "email") {
      setEmail(e.target.value);
    }
  };

  const checkRollNumber = () => {
    Axios.post("https://db.edusoft.entema-software.com/countRollNo", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
      stdroll: rollno,
    }).then((res) => {
      if (res.data[0].ROLLCOUNT > 0) {
        notifyRoll();
        setRollNo("");
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

  const handleSubmit = (e) => {
    e.preventDefault();    
    if (phoneNo.length === 10) {
      uploadImages()        
      } else {
        notifymin();
    }
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
    { key: "Others", value: "Others" },
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

  const uploadImages = () => {    
      const data = new FormData();
      console.log(image.name);
      data.append("image", image, image.name);

      // Make an AJAX upload request using Axios
      return Axios.post('https://db.edusoft.entema-software.com/upload', data)
        .then(response => {
          console.log(response.data.imageUrl);
          //setImageName(response.data.imageUrl)
          Axios.post("https://db.edusoft.entema-software.com/createStudent", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
          stdname: fullName,
          stdgender: gender,
          stddob: setDateFormat(dob),
          stddoj: setDateFormat(doj),
          stdrel: religion,
          stdcast: cast,
          stdntn: nationality,
          stdclass: Sclass,
          stdsec: Ssection,
          stdroll: rollno,
          stdbg: bloodGroup,
          stdadd: address,
          stdphoto: response.data.imageUrl,
          stdpg: father,
          stdpo: fatherOccupation,
          stdph: phoneNo,
          stdemail: email,          
        }).then(() => {          
          console.log("Successfully Created");
          setAdmissionId("");
          setFullName("");
          setGender("");
          setDobDate("");
          setReligion("");
          setCast("");
          setNationality("");
          setSclass("");
          setSSection("");
          setRollNo("");
          setBloodGroup("");
          setAddress("");
          setImage();
          setFather("");
          setFatherOccupation("");
          setPhone("");
          setEmail("");
          window.scrollTo(0, 0);
        });          
        })
   

    // Once all the files are uploaded 
    axios.all(uploaders).then(() => {
      console.log('done');
    }).catch(err => alert(err.message));
  }

  return (
    <>
      <Navbar />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ScrollArea>
        <div className="card height-auto">
          <div className="card-body">
            <div className="heading-layout1">
              <div className="item-title">
                <h3>Add New Students</h3>
              </div>
            </div>
            <form className="new-added-form" onSubmit={handleSubmit}>
              <div className="row">
                {/* <div className="col-sm-3   form-group">
                  <label htmlFor="admissionId">Admission No</label>
                  <input
                    type="text"
                    placeholder="Adm .No"
                    className="form-control"
                    id="admissionId"
                    name="admissionId"
                    disabled
                    value={admissionId}
                    onChange={(e) => handleChange(e)}
                  />
               </div>*/}
                <div className="col-sm-3 form-group">
                  <label htmlFor="fullName">Full Name*</label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    id="fullName"
                    name="fullName"
                    value={fullName}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
                <div className="col-md-3 form-group">
                  <label htmlFor="gender">Gender*</label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    id="gender"
                    name="gender"
                    className="form-control"
                    value={gender}
                    onChange={(e) => handleChange(e)}
                    required
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
                  </select>
                </div>

                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label>Date Of Birth*</label>
                  <DatePicker
                    className="form-control air-datepicker"
                    selected={dob}
                    onChange={(date) => setDobDate(date)}
                    placeholder="DD/MM/YYYY"
                    dateFormat="dd-MM-yyyy"
                    required
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
                    disabled
                  />
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label htmlFor="gender">Relegion*</label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    id="religion"
                    name="religion"
                    className="form-control"
                    value={religion}
                    onChange={(e) => handleChange(e)}
                    required
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
                    onChange={(e) => handleChange(e)}
                    required
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
                  <label htmlFor="nationality">Nationality*</label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    id="nationality"
                    name="nationality"
                    className="form-control"
                    value={nationality}
                    onChange={(e) => handleChange(e)}
                    required
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
                    onBlur={checkRollNumber}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label htmlFor="class">Class*</label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    id="Sclass"
                    name="Sclass"
                    className="form-control"
                    value={Sclass}
                    onChange={(e) => handleChange(e)}
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
                  <label htmlFor="Ssection">Section</label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    id="Ssection"
                    name="Ssection"
                    className="form-control"
                    value={Ssection}
                    onChange={(e) => handleChange(e)}
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
                  <label className="text-dark-medium">
                    Upload Student Photo
                  </label>
                  <input type="file" name="image" onChange={(e)=>handleChange(e)} />
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label htmlFor="bloodgroup">bloodgroup</label>
                  <select
                    as="select"
                    id="bloodGroup"
                    name="bloodGroup"
                    className="form-control"
                    value={bloodGroup}
                    onChange={(e) => handleChange(e)}
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
                  <label>Address*</label>
                  <input
                    className="textarea form-control"
                    as="textarea"
                    name="address"
                    id="address"
                    cols="10"
                    rows="3"
                    value={address}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>

                <hr style={{ width: "1028px" }} />
                <div className="heading-layout1">
                  <div className="item-title">
                    <h3>Parents details</h3>
                  </div>
                </div>
                <div className="col-sm-3 form-group">
                  <label>Father/Gaurdian Name *</label>
                  <input
                    type="text"
                    placeholder=""
                    className="form-control"
                    name="father"
                    id="father"
                    value={father}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
                <div className="col-sm-3 form-group">
                  <label>Father/Gaurdian Occupation *</label>
                  <input
                    type="text"
                    placeholder=""
                    className="form-control"
                    name="fatherOccupation"
                    id="fatherOccupation"
                    value={fatherOccupation}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>

                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label>Phone No *</label>
                  <input
                    type="text"
                    placeholder=""
                    className="form-control"
                    name="phoneNo"
                    id="phoneNo"
                    value={phoneNo}
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label>E-Mail ID</label>
                  <input
                    type="email"
                    placeholder=""
                    className="form-control"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => handleChange(e)}
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
      </ScrollArea>
    </>
  );
}

export default AdmissionForm;
