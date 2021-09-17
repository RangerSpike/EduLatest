// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import Navbar from "../../Common/Navbar/Navbar";
import axios from "axios";

function Message() {
  const [title, setTitle] = useState();
  const [message, setMessage] = useState();

  const [sendTo, setSendTo] = useState();
  const [Standard, setStandard] = useState();
  const [Section, setSection] = useState();
  const [currentUser, setCurrentUser] = useState();
  const [isDisabled, setIsDisabled] = useState(false);

  const [isTeacher, setIsTeacher] = useState(false);

  const [Contacts, setContacts] = useState();

  useEffect(() => {
    getStdSecDetails();
  }, [Section, Standard]);

  const getTchDetails = () => {
    //console.log("getStdSecDetails is Called");

    axios
      .get("http://localhost:3004/getTeacherPno", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      })
      .then((res) => {
        //console.log(res.data);
        let x = "";
        for (let i = 0; i < res.data.length; i++) {
          if (x === "") {
            if (res.data[i].TCH_PHONE !== null) x = res.data[i].TCH_PHONE;
          } else {
            if (res.data[i].TCH_PHONE !== null)
              x = x + "," + res.data[i].TCH_PHONE;
          }
        }
        setContacts(x);
        //console.log(x);
      });
  };

  const getStdSecDetails = () => {
    axios
      .post("http://localhost:3004/getFilterdStudentContactData", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
        stdClass: Standard,
        stdsec: Section,
      })
      .then((res) => {
        //console.log("RES AK DATA", res.data);
        let x = "";
        for (let i = 0; i < res.data.length; i++) {
          if (x === "") {
            if (res.data[i].STD_PHONE !== null) x = res.data[i].STD_PHONE;
          } else {
            if (res.data[i].STD_PHONE !== null)
              x = x + "," + res.data[i].STD_PHONE;
          }
        }
        setContacts(x);     
      });
  };

  const handleChange = (e) => {

    const input = e.target.name;
    if (input === "title") {
      setTitle(e.target.value);
    } else if (input === "message") {
      setMessage(e.target.value);
    } else if (input === "sendTo") {
      setContacts("");
      setSendTo(e.target.value);
      checkSendTo(e.target.value);
    } else if (input === "Standard") {
      setStandard(e.target.value);
    } else if (input === "Section") {
      setSection(e.target.value);
      getStdSecDetails();
    }
  };

  const checkSendTo = (e) => {
    //console.log(e);
    if (e === "Teacher") {
      setIsTeacher(true);
      getTchDetails();
    } else {
      setIsTeacher(false);
    }
  };

  // useEffect(() => {
  //   getStdSecDetails();
  // }, [Standard]);

  useEffect(() => {
    if (localStorage.getItem("Role") === "Teacher") {
      setIsDisabled(true);
      setSendTo("Student");
    }
    //console.log(localStorage.getItem("Role"));
    setCurrentUser(localStorage.getItem("Role"));
  }, []);

  const handleSumit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3004/getMessage", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
        message:
          "Title : " + title + `\nDetails : ${message}` + `\nRegards : EduSoft`,
        numbers: Contacts,
      })
      .then(() => {
        console.log("SMS SENT");
        setTitle("");
        setMessage("");
        setStandard("");
        setSection("");
      });
    //console.log("HANDLE SUB");
  };
  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body">
              <div className="heading-layout1">
                <div className="item-title">
                  <h3>Write New Message</h3>
                </div>
              </div>
              <form
                className="new-added-form"
                onChange={handleChange}
                onSubmit={handleSumit}
              >
                <div classname="text-centre" style={{ marginLeft: "100px" }}>
                  <div className="row">
                    <div className="col-xl-3 col-lg-6 col-12 form-group-1">
                      <label>Send to</label>
                      <select
                        className="select3 select2-hidden-accessible"
                        data-select2-id="1"
                        tabIndex="-1"
                        aria-hidden="true"
                        id="sendTo"
                        name="sendTo"
                        value={sendTo}
                        onChange={(e) => handleChange(e)}
                        disabled={isDisabled}
                      >
                        <option value="" data-select2-id="3">
                          Select{" "}
                        </option>
                        <option value="Teacher">Teacher</option>
                        <option value="Student">Student</option>
                      </select>
                    </div>
                    {sendTo != "Teacher" ? (
                      <>
                        <div className="col-xl-3 col-lg-6 col-12 form-group-1">
                          <label>standard</label>
                          <select
                            className="select3 select2-hidden-accessible"
                            data-select2-id="1"
                            tabIndex="-1"
                            aria-hidden="true"
                            id="Standard"
                            name="Standard"
                            value={Standard}
                            onChange={(e) => handleChange(e)}
                          >
                            <option value="" data-select2-id="3">
                              Select
                            </option>
                            <option value="1">1 </option>
                            <option value="2">2 </option>
                            <option value="3">3 </option>
                            <option value="4">4 </option>
                            <option value="5">5 </option>
                            <option value="6">6 </option>
                            <option value="7">7 </option>
                            <option value="8">8 </option>
                            <option value="9">9 </option>
                            <option value="10">10 </option>
                          </select>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-12 form-group-1">
                          <label>Section</label>
                          <select
                            className="select3 select2-hidden-accessible"
                            data-select2-id="1"
                            tabIndex="-1"
                            aria-hidden="true"
                            id="Section"
                            name="Section"
                            value={Section}
                            onChange={(e) => handleChange(e)}
                          >
                            <option value="" data-select2-id="3">
                              Select
                            </option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C </option>
                            <option value="D">D</option>
                            <option value="E">E</option>
                          </select>
                        </div>
                      </>
                    ) : null}
                  </div>
                </div>
                <div
                  className="col-10 form-group"
                  style={{ paddingTop: "50px" }}
                >
                  <label>Title</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="col-10 form-group">
                  <label>Message</label>
                  <textarea
                    className="textarea form-control"
                    cols="10"
                    rows="9"
                    placeholder="type a message"
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => handleChange(e)}
                  ></textarea>
                </div>
                <div className="col-12 form-group mg-t-8">
                  <button
                    type="submit"
                    className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark"
                    style={{ marginLeft: "356px" }}
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Message;
