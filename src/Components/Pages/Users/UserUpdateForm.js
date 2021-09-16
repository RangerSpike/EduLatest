/*eslint-disable*/
import React, { useEffect, useState } from "react";
import Navbar from "../../Common/Navbar/Navbar";
import axios from "axios";
import { useHistory } from "react-router";

function UserUpdateForm(props) {
  let id = props.match.params.id;

  const history = useHistory();
  const [fullName, setFullName] = useState();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();
  const [phone, setPhone] = useState();
  const [cfmPassword, setcfmPassword] = useState();
  const [actDate, setActDate] = useState();
  const [deActDate, setDActDate] = useState();
  const [deActCheck, setDeactCheck] = useState();

  const optionRole = [
    { key: "Select Role", onChange: "" },
    { key: "Admin", onChange: "Admin" },
    { key: "Teacher", onChange: "Teacher" },
  ];

  const getData = () => {
    axios
      .post("http://localhost:3004/getUserDetailsBasedOnId", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
        userId: id,
      })
      .then((res) => {
        console.log(res.data);
        setFullName(res.data[0].FULL_NAME);
        setUserName(res.data[0].USERNAME);
        setPassword(res.data[0].PASSWORD);
        setcfmPassword(res.data[0].PASSWORD);
        setRole(res.data[0].ROLE);
        setPhone(res.data[0].PHONE);
        setActDate(res.data[0].USER_ACT_DATE);
        setDActDate(res.data[0].USER_DEACT_DATE);
        setDeactCheck(res.data[0].USER_DEACT_DATE ? res.data[0].USER_DEACT_DATE : "");
      });
  };

  useEffect(() => {
    getData();
  }, [id]);

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

  const handleChange = (e) => {
    //console.log(e.target.value);

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
    if (password === cfmPassword) {
      axios
        .post("http://localhost:3004/updateUser", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
          userId: id,
          fullName: fullName,
          userName: userName,
          password: password,
          role: role,
          phone: phone,
          actDate: actDate,
          deActDate: deActDate ? setDateFormat(deActDate) : null,
        })
        .then(() => {
          //console.log("Successfully Created");
          history.push("/UsersReport");
        });
    } else {
      alert("Passwords Do Not Match!");
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
                <h3>UPDATE USER</h3>
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
                <label>Activation Date</label>
                <input
                  type="text"
                  placeholder="DD/MM/YYYY"
                  id="actDate"
                  name="actDate"
                  className="form-control"
                  disabled
                  value={actDate}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div
                className="col-md-6 form-group"
                //style={{ paddingTop: "50px" }}
              >
                <label>Deactivation Date</label>
                {deActCheck ? (
                  <input
                    className="form-control"
                    type="text"
                    placeholder="DD/MM/YYYY"
                    id="deActDate"
                    value={deActDate}
                    name="deActDate"
                    onChange={(e) => handleChange(e)}
                    disabled
                  />
                ) : (
                  <input
                    type="date"
                    placeholder="DD/MM/YYYY"
                    id="deActDate"
                    select={deActDate}
                    name="deActDate"
                    className="form-control"
                    onChange={(e) => handleChange(e)}
                  />
                )}
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
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserUpdateForm;
