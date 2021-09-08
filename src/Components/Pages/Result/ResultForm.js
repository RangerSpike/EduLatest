// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import Navbar from "../../Common/Navbar/Navbar";
import axios from "axios";

function ResultForm() {
  const [RegNo, setRegNo] = useState();
  const [fullName, setFullName] = useState();
  const [Sclass, setSclass] = useState();
  const [id, setStdId] = useState();
  const [CalulatedFor, SetCalulatedFor] = useState(600);
  const [SubsLov, setSubsLov] = useState([]);

  const [iaResult, setIaResult] = useState(0);
  const [extResult, setExtResult] = useState(0);
  const [finalResult, setFinalResult] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [result, setResult] = useState("Pass");

  const list = {
    subject: "",
    iAMarks: "",
    extMarks: "",
  };

  const [resultList, setResultList] = useState([]);

  const getStdData = () => {
    console.log("hi");
    axios
      .post("http://localhost:3004/getStudentBasedOnRegno", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
        stdRollNo: RegNo,
      })
      .then((res) => {
        if (res.data.length > 0) {
          console.log(res.data);
          setStdId(res.data[0].STUDENT_ID);
          setFullName(res.data[0].STD_NAME);
          setSclass(res.data[0].STD_CLASS);
        }
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

  useEffect(() => {
    getSubsLov();
  }, []);

  const addRow = () => {
    setResultList([...resultList, list]);
  };

  const removeRow = (index) => {
    const filteredList = [...resultList];
    filteredList.splice(index, 1);

    setResultList(filteredList);
  };

  const handleChange = (e, index) => {
    const updatedTaskList = resultList.map((item, i) =>
      index === i
        ? Object.assign(item, { [e.target.name]: e.target.value })
        : item
    );
    //let test = updatedUsers.length - 1;

    setResultList(updatedTaskList);
  };

  const handleChangeLast = (e) => {
    //console.log(e.target.value);

    const input = e.target.name;
    if (input === "iaResult") {
      setIaResult(e.target.value);
    } else if (input === "extResult") {
      setExtResult(e.target.value);
    } else if (input === "finalResult") {
      setFinalResult(e.target.value);
    } else if (input === "percentage") {
      setPercentage(e.target.value);
    } else if (input === "result") {
      setResult(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    console.log(
      "Submit Started" + "-" + CalulatedFor + "-" + RegNo,
      +"-" + fullName + "-" + Sclass
    );

    console.log("Submit Started", resultList);
    e.preventDefault();

    // axios.post("http://localhost:3004/insertRespForm", {
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    //   },
    //   formData: taskList,
    //   testLenth:taskList.length
    // }).then(() => {
    //   setTaskList([]);
    //   setYear("");
    //   setYearLov([]);
    //   setTeacher("");
    //   setTeacherLov([]);
    //   console.log("Values Submitted");
    // });
  };

  const handleCalculation = (e,i)=>{
    console.log(resultList)
  }
  return (
    <>
      <Navbar />
      <div className="card height-auto">
        <div className="card-body">
          <form
            id="test-form"
            className="new-added-form-4"
            onSubmit={handleSubmit}
            onChange={handleChange}
          >
            <div className="row gutters-9">
              <div
                className="col-lg-4  form-group"
                style={{ marginLeft: "50px" }}
              >
                <label>Register Number</label>
                <input
                  type="text"
                  placeholder="Search by Roll Number ..."
                  className="form-control"
                  id="RegNo"
                  name="RegNo"
                  value={RegNo}
                  onChange={(e) => setRegNo(e.target.value)}
                />
              </div>
              <div className="col-lg-4 col-12 form-group">
                <button
                  type="button"
                  className="fw-btn-fill btn-gradient-yellow"
                  onClick={() => getStdData()}
                  style={{
                    width: "100px",
                    marginTop: "36px",
                    marginLeft: "150px",
                  }}
                >
                  SEARCH
                </button>
              </div>{" "}
            </div>

            <div className="row gutters-9 form-group">
              <div
                className="col-lg-4  form-group"
                style={{ marginLeft: "50px" }}
              >
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Name..."
                  className="form-control"
                  id="fullName"
                  name="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  disabled
                />
              </div>
              <div
                className="col-lg-4  form-group"
                style={{ marginLeft: "50px" }}
              >
                <label>Class</label>
                <input
                  type="text"
                  placeholder="Class..."
                  className="form-control"
                  id="Sclass"
                  name="Sclass"
                  value={Sclass}
                  onChange={(e) => setSclass(e.target.value)}
                  disabled
                />
              </div>
            </div>

            <div className="row gutters-9">
              <div
                className="col-lg-4 col-sm form-group"
                style={{ marginLeft: "50px", marginTop: "20px" }}
              >
                <input
                  type="text"
                  placeholder="Subject To Be Calculated For..."
                  className="form-control"
                  id="CalulatedFor"
                  name="CalulatedFor"
                  value={CalulatedFor}
                  onChange={(e) => SetCalulatedFor(e.target.value)}
                />
              </div>
              <div
                className="col-lg-4 col-sm form-group"
                style={{ marginLeft: "50px", marginTop: "20px" }}
              >
                <label>{/*<Checkbox /> Exclude IA Marks*/}</label>
              </div>

              <div
                className="col-sm-6  form-group"
                style={{
                  marginLeft: "150px",
                  fontSize: "larger",
                  fontWeight: "500",
                  marginTop: "30px",
                }}
              ></div>
            </div>

            <div>
              <table
                className="table display data-table text-nowrap dataTable no-footer table-striped"
                id="DataTables_Table_0"
                role="grid"
              >
                <thead>
                  <tr role="row">
                    <th
                      className="sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Admission iD: activate to sort column ascending"
                      style={{ width: "42.6667px" }}
                    >
                      Subject
                    </th>
                    <th
                      className="sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="photo: activate to sort column ascending"
                      style={{ width: "42.6667px" }}
                    >
                      IA marks
                    </th>

                    <th
                      className="sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Name: activate to sort column ascending"
                      style={{ width: "81.3333px" }}
                    >
                      External Marks
                    </th>
                    <th
                      className="sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Name: activate to sort column ascending"
                      style={{ width: "81.3333px" }}
                    >
                      Add/Delete
                    </th>
                    <th
                      className="sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Name: activate to sort column ascending"
                      style={{ width: "81.3333px" }}
                    >
                      Save
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {resultList.map((item, i) => (
                    <tr role="row" className="odd " key={i}>
                      <td>
                        <select
                          className="select2"
                          name="subjectName"
                          id="subjectName"
                          value={item.subjectName}
                          onChange={(e) => handleChange(e, i)}
                          onBlur={handleCalculation}
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
                      </td>

                      <td>
                        <input
                          type="text"
                          placeholder="Marks ..."
                          className="form-control"
                          style={{ width: "200px", marginLeft: "140px" }}
                          name="IAmarks"
                          id="IAmarks"
                          value={item.IAmarks}
                          onBlur={handleCalculation}
                          onChange={(e) => handleChange(e, i)}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Marks ..."
                          className="form-control"
                          style={{ width: "200px", marginLeft: "140px" }}
                          name="extMarks"
                          id="extMarks"
                          value={item.extMarks}
                          onBlur={handleCalculation}
                          onChange={(e) => handleChange(e, i)}
                        />
                      </td>
                      <td>
                        <button
                          className="btn btn-danger "
                          onClick={() => removeRow(i)}
                        >
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </button>
                      </td>
                      <td></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="col-xs-3  form-group">
                {fullName ? (
                  <button
                    onClick={() => addRow()}
                    type="button"
                    className="btn btn-primary text-center"
                  >
                    <i className="fa fa-plus-circle" aria-hidden="true"></i>
                  </button>
                ) : null}
              </div>
              <div className="row">
                <div className="heading-layout1">
                  <div className="item-title">
                    <h4 style={{ padding: "50px" }}>Total</h4>
                  </div>
                  <div
                    className="col-sm-3   form-group"
                    style={{ marginRight: "60px" }}
                  >
                    <label>IA Total</label>
                    <input
                      type="text"
                      placeholder="IA TOTAL"
                      className="form-control"
                      id="iaResult"
                      name="iaResult"
                      value={iaResult}
                      onChange={(e)=>handleChangeLast(e)}                      
                      disabled
                    />
                  </div>
                  <div
                    className="col-sm-3   form-group"
                    style={{ marginRight: "60px" }}
                  >
                    <label>External Total</label>
                    <input
                      type="text"
                      placeholder="EXTERNAL TOTAL"
                      className="form-control"
                      id="extResult"
                      name="extResult"
                      value={extResult}
                      onChange={(e)=>handleChangeLast(e)}
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div className="heading-layout1">
                <div className="item-title" style={{ marginLeft: "580px" }}>
                  <h4>Final</h4>
                </div>
                <div
                  className="col-sm-3   form-group"
                  style={{ marginRight: "60px" }}
                >
                  <input
                    type="text"
                    placeholder="FINAL"
                    className="form-control"
                    id="finalResult"
                    name="finalResult"
                    value={finalResult}
                    onChange={(e)=>handleChangeLast(e)}
                    disabled
                  />
                </div>
              </div>
              <div className="row">
                <div className="heading-layout1">
                  <div className="item-title" style={{ marginLeft: "580px" }}>
                    <h4>Percentage</h4>
                  </div>
                  <div
                    className="col-sm-3   form-group"
                    style={{ marginRight: "60px" }}
                  >
                    <input
                      type="text"
                      placeholder="Percentage"
                      className="form-control"
                      id="percentage"
                      name="percentage"
                      value={percentage}
                      onChange={(e)=>handleChangeLast(e)}
                      disabled
                    />
                  </div>
                </div>
                <div className="heading-layout1">
                  <div className="item-title" style={{ marginLeft: "580px" }}>
                    <h4>Result</h4>
                  </div>
                  <div
                    className="col-sm-3   form-group"
                    style={{ marginRight: "60px" }}
                  >
                    <input
                      type="text"
                      placeholder="Number"
                      className="form-control"
                      id="result"
                      name="result"
                      value={result}
                      onChange={(e)=>handleChangeLast(e)}
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div className="row form-group">
                <div className="col-lg-4 col-sm form-group">
                  <button
                    type="button"
                    className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark "
                    style={{ marginLeft: "40          0px" }}
                  >
                    Calculate
                  </button>
                </div>
                <div className="col-lg-4 col-sm form-group">
                  <button
                    type="submit"
                    className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark"
                    style={{ marginLeft: "400px" }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ResultForm;
