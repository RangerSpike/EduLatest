/*eslint-disable*/
import React, { useEffect } from "react";
import { useState } from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";
import "react-notifications/lib/notifications.css";
import axios from "axios";
import Navbar from "../../Common/Navbar/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ResponsiblityUpdateForm(props) {
  let newId = "";
  newId = props.match.params.id;

  let PropYear = "";
  PropYear = props.match.params.year;

  const [Year, setYear] = useState("");
  const [YearLov, setYearLov] = useState([]);

  const [Teachers, setTeacher] = useState("");
  const [TeachersLov, setTeacherLov] = useState([]);

  const [SubsLov, setSubsLov] = useState([]);

  const [data, setData] = useState([]);

  const notifyrow = () =>toast("Minimum Of One Row is Required To Submit The Data");

  const list = {
    year: Year,
    teachers: Teachers,
    subjectName: "",
    standardName: "",
    gradeName: "",
    timings: "",
  };

  const [taskList, setTaskList] = useState([]);

  const handleChange = (e, index) => {
    const updatedTaskList = taskList.map((item, i) =>
      index === i
        ? Object.assign(item, { [e.target.name]: e.target.value })
        : item
    );
    //let test = updatedUsers.length - 1;

    setTaskList(updatedTaskList);
  };

  const getLov = () => {
    axios
      .get("http://localhost:3004/getYearLov", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      })
      .then((res) => {
        setYearLov(res.data);
        setYear(PropYear);
        //console.log("result set in effect: ", res.data);
      });
  };

  const getSubsLov = () => {
    axios
      .get("http://localhost:3004/getSubsLov", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      })
      .then((res) => {
        setSubsLov(res.data);
        //console.log("result set in effect: ", res.data);
      });
  };

  const getTchLov = () => {
    axios
      .get("http://localhost:3004/getTeacherList", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      })
      .then((res) => {
        setTeacherLov(res.data);
        setTeacher(newId);
        //console.log("result set in effect: ", res.data);
      });
  };

  const getRecordsAfterFilter = () => {
    console.log("updateDuplicateVar called : ");
    if (Year && Teachers) {
      axios
        .post("http://localhost:3004/getTeacherRespReport", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
          year: Year ? Year : `"` + `"`,
          tacherId: Teachers ? Teachers : `"` + `"`,
        })
        .then((res) => {
          // setData(res.data);
          // setTchName("")
          let rows = [];
          for (let i = 0; i < res.data.length; i++) {
            rows.push(list);
            rows[i] = {
              year: res.data[i].YEAR,
              teachers: res.data[i].TEACHERS_ID,
              subjectName: res.data[i].SUBJECT_NAME,
              standardName: res.data[i].CLASS,
              gradeName: res.data[i].GRADE,
              timings: res.data[i].TIMINGS,
            };
          }
          setTaskList(rows);
          //console.log("result set in: ", rows);
        });
    } else {
      //getData();
    }
  };

  useEffect(() => {
    getLov();
    getTchLov();
    getSubsLov();
    getRecordsAfterFilter();
  }, [Year, Teachers]);

  const addRow = () => {
    setTaskList([...taskList, list]);
  };

  const removeRow = (index) => {
    //console.log("index value :", index);
    const filteredList = [...taskList];
    filteredList.splice(index, 1);

    setTaskList(filteredList);
  };

  const handleSubmit = (e) => {
    console.log("Submit Started", taskList);
    e.preventDefault();
    if (taskList.length > 0) {
      axios
        .post("http://localhost:3004/updateRespForm", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
          formData: taskList,
          testLenth: taskList.length,
          year: Year,
          teacherId: Teachers,
        })
        .then(() => {
          setTaskList([]);
          setYear("");
          setYearLov([]);
          setTeacher("");
          setTeacherLov([]);
          console.log("Values Updated");
        });
    } else {
      notifyrow();
    }
  };

  return (
    <div>
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
      <div className="card height-auto">
        <div className="card-body">
          <div className="heading-layout1">
            <div className="item-title">
              <h3 style={{ padding: "50px" }}>Responsiblity Update Form</h3>
            </div>
          </div>
          <form
            id="test-form"
            className="new-added-form-1"
            onSubmit={handleSubmit}
            onChange={handleChange}
          >
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-12 form-group-1">
                <label>Year</label>
                <select
                  className="select3 select2-hidden-accessible"
                  name="Year"
                  id="Year"
                  disabled
                  value={Year}
                  onChange={(e) => {
                    setYear(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                  <option value="" data-select2-id="9">
                    Select Year
                  </option>
                  {YearLov.map((data) => (
                    <option key={data.ID} value={data.YEAR}>
                      {data.ID}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-xl-3 col-lg-6 col-12 form-group-1">
                <label>Teachers</label>
                <select
                  className="select3 select2-hidden-accessible"
                  name="Teachers"
                  id="Teachers"
                  disabled
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
            </div>
            <br />
            <br />
            <div>
              <table
                className="table display data-table text-nowrap dataTable no-footer"
                id="DataTables_Table_test"
                role="grid"
                style={{ backgroundColor: "#a8x0ff" }}
              >
                <thead>
                  <tr>
                    <th>Subject Name</th>
                    <th>Class</th>
                    <th>Grade</th>
                    <th>Timings</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {taskList.map((item, i) => (
                    <tr key={i}>
                      <td>
                        {/* <input type="text"  name="projectName" data-id={idx} id={projectName} className="form-control " /> */}
                        <div
                          className="col-xl-3 col-lg-6 col-12 form-group"
                          data-select2-id="12"
                        >
                          <select
                            className="select2"
                            name="subjectName"
                            id="subjectName"
                            value={item.subjectName}
                            onChange={(e) => handleChange(e, i)}
                          >
                            <option value="" data-select2-id="12">
                              Select
                            </option>
                            {SubsLov.map((data) => (
                              <option
                                key={data.SUBJECT_ID}
                                value={data.SUBJECT_NAME}
                              >
                                {data.SUBJECT_NAME}
                              </option>
                            ))}
                          </select>
                        </div>
                      </td>
                      <td>
                        {/* <input type="text"  name="task" id={task} data-id={idx} className="form-control " /> */}
                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                          <select
                            className="select2"
                            name="standardName"
                            id="standardName"
                            value={item.standardName}
                            onChange={(e) => handleChange(e, i)}
                          >
                            <option value="" data-select2-id="12">
                              Select
                            </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                          </select>
                        </div>
                      </td>
                      <td>
                        {/* <textarea  name="taskNotes" id={taskNotes} data-id={idx} className="form-control"></textarea> */}
                        <div className="col-xl-3 col-lg-6 col-12 form-group">
                          <select
                            className="select2"
                            name="gradeName"
                            id="gradeName"
                            value={item.gradeName}
                            onChange={(e) => handleChange(e, i)}
                          >
                            <option value="" data-select2-id="12">
                              Select{" "}
                            </option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                            <option value="E">E</option>
                          </select>
                        </div>
                      </td>
                      <td>
                        <input
                          type="text"
                          name="timings"
                          id="timings"
                          className="form-control"
                          value={item.timings}
                          onChange={(e) => handleChange(e, i)}
                        />
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => removeRow(i)}
                        >
                          <i className="fa fa-minus" aria-hidden="true"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {Year && Teachers ? (
                <BsFillPlusSquareFill onClick={() => addRow()} type="button">
                  <i className="fa fa-plus-circle" aria-hidden="true"></i>
                </BsFillPlusSquareFill>
              ) : null}
              <div className="card-footer text-center">
                {" "}
                <button
                  type="submit"
                  className="btn btn-primary text-center float-right"
                >
                  Update
                </button>
              </div>
            </div>
          </form>

          {/* <button type="button" onClick={() => {this.test("STANDARD_NAME")}}>TEST</button> */}
        </div>
      </div>
    </div>
  );
}

export default ResponsiblityUpdateForm;
