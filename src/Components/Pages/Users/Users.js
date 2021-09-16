/*eslint-disable*/
import React, { useState } from "react";
import Navbar from "../../Common/Navbar/Navbar";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import DatePicker from "react-datepicker";

function Users() {
  const optionRole = [
    { key: "Select Role", onChange: "" },
    { key: "Admin", onChange: "Admin" },
    { key: "Teacher", onChange: "Teacher" },
  ];

  const setDateFormat = (onChange) => {
    let currentDate;
    if (onChange) {
      currentDate = new Date(onChange);
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

  const [fullName, setFullName] = useState();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();
  const [phone, setPhone] = useState();
  const [cfmPassword, setcfmPassword] = useState();
  const [actDate, setActDate] = useState(new Date);
  const [deActDate, setDActDate] = useState();

  const handleChange = (e) => {
    console.log(e.target.value);

    const input = e.target.name;
    if (input === "fullName") {
      setFullName(e.target.value);
    } else if (input === "userName") {
      setUserName(e.target.value);
    } else if (input === "password") {
      setPassword(e.target.value);
    } else if (input === "cfmPassword") {
      setcfmPassword(e.target.value);
    } else if (input === "actDate") {
      setActDate(e.target.value);
    } else if (input === "deActDate") {
      setDActDate(e.target.value);
    } else if (input === "role") {
      setRole(e.target.value);
    } else if (input === "phone") {
      setPhone(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();  
    if (cfmPassword === password) {
      axios
        .post("http://localhost:3004/createUser", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
          fullName: fullName,
          userName: userName,
          password: password,
          role: role,
          phone: phone,
          actDate: setDateFormat(actDate),
          deActDate: deActDate ? setDateFormat(deActDate) : deActDate
        })
        .then(() => {
          console.log("Successfully Created");
          setFullName("");
          setUserName("");
          setPassword("");
          setRole("");
          setPhone("");
          setcfmPassword("");          
          setDActDate("");
          window.scroll(0,0)
        });
    }else{
      alert('Passwords Do Not Match')
    }
  };

  return (
    <div>
      <Navbar />{" "}
      <div className="row">
        <div className="card">
          <div className="card-body">
            <div className="heading-layout1">
              <div className="item-title">
                <h3>CREATE USER</h3>
              </div>
            </div>
            <form className="new-added-form" onSubmit={handleSubmit}>
              <div classname="text-centre">
                <div
                  className="col-md-6 form-group"
                  //style={{ paddingTop: "50px" }}
                >
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="fullName"
                    id="fullName"
                    name="fullName"
                    className="form-control"
                    value={fullName}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div
                  className="col-md-6 form-group"
                  //style={{ paddingTop: "50px" }}
                >
                  <label>User Name</label>
                  <input
                    type="text"
                    placeholder="userName"
                    id="userName"
                    name="userName"
                    className="form-control"
                    value={userName}
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <div
                  className="col-md-6 form-group"
                  //style={{ paddingTop: "50px" }}
                >
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="password"
                    id="password"
                    name="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div
                  className="col-md-6 form-group"
                  //style={{ paddingTop: "50px" }}
                >
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    id="cfmPassword"
                    name="cfmPassword"
                    className="form-control"
                    value={cfmPassword}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div
                  className="col-md-6 form-group"
                  //style={{ paddingTop: "50px" }}
                >
                  <label>Phone Number</label>
                  <input
                    type="text"
                    placeholder="phone"
                    id="phone"
                    name="phone"
                    className="form-control"
                    value={phone}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>

              <div
                className="col-md-6 form-group"
                //style={{ paddingTop: "50px" }}
              >
                <label>ACTIVATION DATE</label>
                <DatePicker
                  className="form-control air-datepicker"
                  selected={actDate}
                  onChange={(date) => setActDate(date)}
                  placeholder="DD/MM/YYYY"
                  dateformat="dd-MM-yyyy"
                  onChange={(e) => handleChange(e)}
                  disabled
                />
              </div>
              <div
                className="col-md-6 form-group"
                //style={{ paddingTop: "50px" }}
              >
                <label>DEACTIVATION DATE</label>
                <input
                  type="date"
                  placeholder="DD/MM/YYYY"
                  id="deActDate"
                  select={deActDate}
                  name="deActDate"
                  className="form-control"
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="col-md-3 form-group">
                <label htmlFor="role">Role</label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  id="role"
                  name="role"
                  className="form-control"
                  value={role}
                  onChange={(e) => handleChange(e)}
                  required
                >
                  {optionRole.map((optionRole) => {
                    return (
                      <option
                        key={optionRole.key}
                        onChange={optionRole.onChange}
                      >
                        {optionRole.key}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="col-12 form-group mg-t-8">
                <button
                  type="submit"
                  className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark"
                  style={{ marginLeft: "356px" }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
