/*eslint-disable*/
import React, { useState } from "react";
import "./Login.css";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import Axios from "axios";

const LoginFrom = () => {
  const [details, setDetails] = useState({ userName: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  const history = useHistory();

  const adminUser = {
    userName: "",
    password: "",
  };

  const [user, setUser] = useState({ userName: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    // Axios.post("http://localhost:3004/validateUserDetails", {
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    //   },
    //   userName: details.userName,
    // }).then((res) => {
    //   //console.log("Successfully Send For Validation");
    //   console.log("Validate", res.data);
    //   window.localStorage.setItem('Role', res.data.role);
    //   window.localStorage.setItem('UserName', res.data.userName);

    //   if (
    //   details.userName == res.data.userName &&
    //   details.password == res.data.password
    // ) {
    //   //console.log("Logged in");
    //   history.push("/Dashboard");
    //   setUser({
    //     userName: details.userName,
    //   });
    // } else {
    //   //console.log("Details do not match!");
    //   setError("Details do not match!");
    // }
    // });
    history.push("/Dashboard");
  };
  return (
    <>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <div className="login100-pic js-tilt" data-tilt>
              <img src="madcaplogo.jpg" alt="IMG" />
            </div>
            <form className="login100-form" onSubmit={submitHandler}>
              <span className="login100-form-title">User Login</span>
              {error != "" ? <div className="error">{error}</div> : ""}
              <div
                className="wrap-input100 validate-input"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <input
                  className="input100"
                  type="text"
                  name="userName"
                  placeholder="userName"
                  onChange={(e) =>
                    setDetails({ ...details, userName: e.target.value })
                  }
                  value={details.userName}
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa" aria-hidden="true">
                    <FaEnvelope />
                  </i>
                </span>
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Password is required"
              >
                <input
                  className="input100"
                  type="password"
                  name="pass"
                  placeholder="Password"
                  onChange={(e) =>
                    setDetails({ ...details, password: e.target.value })
                  }
                  value={details.password}
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa" aria-hidden="true">
                    <FaLock />
                  </i>
                </span>
              </div>
              <div className="container-login100-form-btn">
                <button className="login100-form-btn">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginFrom;
