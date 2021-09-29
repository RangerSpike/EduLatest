/* eslint-disable no-unused-vars */
/*eslint-disable*/
import React, { useEffect, useState } from "react";
import Axios from "axios";
import Navbar from "../Components/Common/Navbar/Navbar";
import ScrollArea from "react-scrollbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";

function CallDetails() {
  const history = useHistory() 
  const [TeachersLov, setTeacherLov] = useState([]);
  const [Teachers, setTeacher] = useState("");
  const [timings, setTimings] = useState("");
  const [Sclass, setSclass] = useState();
  const [Ssection, setSSection] = useState();

  const notifymin = () => toast("Submitted");

  const handleChange = (e) => {
    console.log(e.target.value);
    //console.log(e.target.files[0]);

    const input = e.target.name;
    if (input === "Sclass") {
      setSclass(e.target.value);
    } else if (input === "Ssection") {
      setSSection(e.target.value);
    } else if (input === "Teachers") {
      setTeacher(e.target.value);
    } else if (input === "timings") {
      setTimings(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    Axios.post("http://localhost:3004/insertOnlineClass", {
        header: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
        stdclass: Sclass,
        stdsec: Ssection,
        Teachers:Teachers,
        timings:timings,
      }).then(() => {
        console.log("Successfully Created");
        //history.push('/EduCallLoginPage');
        notifymin()
      });
  };

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

  const getTchLov = () => {
    Axios.get("https://db.edusoft.entema-software.com/getTeacherList", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    }).then((res) => {
      setTeacherLov(res.data);
      //console.log("result set in effect: ", res.data);
    });
  };

  useEffect(() => {
    getTchLov();
  }, []);

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
                <h3>Online Details</h3>
              </div>
            </div>
            <form className="new-added-form" onSubmit={handleSubmit}>
              <div className="row">
                <div
                  className="col-xl-3 col-lg-6 col-12 form-group-1"
                  style={{ marginTop: "15px", marginLeft: "40px" }}
                >
                  <label>Teachers</label>
                  <select
                    className="select3 select2-hidden-accessible"
                    name="Teachers"
                    id="Teachers"
                    value={Teachers}
                    onChange={(e) => {
                      setTeacher(e.target.value);
                      console.log(e.target.value);
                    }}
                  >
                    <option value="" data-select2-id="9">
                      Select Teacher
                    </option>
                    {TeachersLov.map((data) => (
                      <option key={data.TEACHERS_ID} value={data.TEACHERS_ID}>
                        {data.TCH_NAME}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-xl-3 col-lg-6 col-12 form-group">
                  <label htmlFor="gender">Class*</label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    id="Sclass"
                    name="Sclass"
                    className="form-control"
                    value={Sclass}
                    onChange={(e) => handleChange(e)}
                    required
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
                  <label htmlFor="gender">Section*</label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    id="Ssection"
                    name="Ssection"
                    className="form-control"
                    value={Ssection}
                    onChange={(e) => handleChange(e)}
                    required
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
                <div className="col-sm-3   form-group">
                  <label>Timings</label>
                  <input
                    type="text"
                    placeholder=""
                    className="form-control"
                    id="timings"
                    name="timings"
                    value={timings}                    
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

export default CallDetails;
