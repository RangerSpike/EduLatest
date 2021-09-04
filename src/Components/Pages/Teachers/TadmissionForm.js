/*eslint-disable*/
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import Axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../../Common/Navbar/Navbar";

function Tadmissionform() {
  const [dob, setDobDate] = useState();
  const [doj, setDojDate] = useState(new Date());
  const [teacherId, setTeacherId] = useState();
  const [name, setName] = useState();
  const [gender, setGender] = useState();
  const [address, setAddress] = useState();
  const [img, setImage] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [Yoe, setYoe] = useState();
  const [prevSchool, setPrevSchool] = useState();
  const [email, setEmail] = useState();

  const optionGender = [
    { key: "Select Gender", value: "" },
    { key: "Male", value: "Male" },
    { key: "Female", value: "Female" },
    { key: "Other", value: "Other" },
  ];

  const onSubmit = () => {
    Axios.post("http://localhost:3004/createTeacher", {
      tch_name: name,
      tch_gender: gender,
      tch_dob: formatChange(dob),
      tch_doj: formatChange(doj),
      tch_phone: phoneNo,
      tch_exp: Yoe,
      tch_photo: img,
      tch_address: address,
      tch_pus: prevSchool,
      tch_email: email,
    }).then(() => {
      setDobDate("");
      setDobDate("");      
      setTeacherId("");
      setName("");
      setGender("");
      setAddress("");
      setImage("");
      setPhoneNo("");
      setYoe("");
      setPrevSchool("");
      setEmail("");
    });
  };

  const handleChange = (e) => {
    console.log(e.target.value);

    const input = e.target.name;
    if (input === "name") {
      setName(e.target.value);
    } else if (input === "gender") {
      setGender(e.target.value);
    } else if (input === "address") {
      setAddress(e.target.value);
    } else if (input === "img") {
      setImage(e.target.value);
    } else if (input === "phoneNo") {
      setPhoneNo(e.target.value);
    } else if (input === "Yoe") {
      setYoe(e.target.value);
    } else if (input === "prevSchool") {
      setPrevSchool(e.target.value);
    } else if (input === "email") {
      setEmail(e.target.value);
    } else if (input === "teacherId") {
      setTeacherId(e.target.value);
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

  return (
    <>
      <Navbar />
      <div className="card height-auto">
        <div className="card-body">
          <div className="heading-layout1">
            <div className="item-title">
              <h3 style={{ padding: "50px" }}>Teacher Admission form </h3>
            </div>
          </div>
          <form className="new-added-form">
            <div className="row">
              <div className="col-sm-3 form-group">
                <label>Teacher ID</label>
                <input
                  type="text"
                  placeholder="Teacher ID"
                  className="form-control"
                  id="teacherId"
                  name="teacherId"
                  value={teacherId}
                  onChange={(e) => handleChange(e)}
                  disabled
                />
              </div>
              <div className="col-sm-3 form-group">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="form-control"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
              <div className="col-md-3  form-group">
                <label htmlFor="gender">Gender</label>
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
                      <option key={optionGender.key} value={optionGender.value}>
                        {optionGender.key}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="col-xl-3 col-lg-6 col-12 form-group">
                <label htmlFor="dob">Date Of Birth</label>
                <DatePicker
                  className="form-control air-datepicker"
                  placeholder="DD/MM/YYYY"
                  dateformat="dd-MM-yyyy"
                  selected={dob}
                  onChange={(date) => {
                    setDobDate(date);
                  }}
                  required
                />
              </div>
              <div className="col-xl-3 col-lg-6 col-12 form-group">
                <label>Phone Number</label>
                <input
                  type="text"
                  placeholder="Ph. Number"
                  className="form-control"
                  id="phoneNo"
                  name="phoneNo"
                  value={phoneNo}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
              <div className="col-lg-3 col-12 form-group mg-t-30">
                <label className="text-dark-medium">Upload Student Photo</label>
                <input
                  type="file"
                  className="form-control-file"
                  value={img}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div
                className="col-lg-6 col-12 form-group"
                style={{ height: "100px" }}
              >
                <label>Address</label>
                <input
                  className="textarea form-control"
                  type="textarea"
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
                  dateformat="dd-MM-yyyy"
                  onChange={(e) => handleChange(e)}
                  disabled
                />
              </div>

              <div className="col-xl-3 col-lg-6 col-12 form-group">
                <label>Years Of Exp</label>
                <input
                  type="number"
                  placeholder="Years Of Exp."
                  className="form-control"
                  id="Yoe"
                  name="Yoe"
                  value={Yoe}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
              <div className="col-xl-3 col-lg-6 col-12 form-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>

            <div
              className="col-lg-6 col-12 form-group"
              style={{ height: "100px" }}
            >
              <div className="heading-layout1">
                <div className="item-title">
                  <h3>Previous University/School</h3>
                </div>
              </div>
              <input
                className="textarea form-control"
                type="textarea"
                name="prevSchool"
                id="prevSchool"
                cols="10"
                rows="3"
                value={prevSchool}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="col-12 form-group mg-t-8">
              <button
                type="submit"
                className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark"
                style={{ marginTop: "40px" }}
                onClick={() => onSubmit()}
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

export default Tadmissionform;
