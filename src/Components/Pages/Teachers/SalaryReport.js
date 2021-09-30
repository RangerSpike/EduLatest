/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "../Student/AdmissionReport.css";
import Navbar from "../../Common/Navbar/Navbar";
import Axios from "axios";
import { useHistory } from "react-router-dom";

function SalaryReport() {
  const history = useHistory();

  const [data, setData] = useState([]);
  const [exitData, setExitData] = useState([]);

  const getData = () => {
    Axios.get("https://db.edusoft.entema-software.com/getTchLeaveMerger", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    }).then((res) => {
      setData(res.data);
      //console.log("setData: ", res.data);
    });
  };

  const getExitData = () => {
    Axios.get("https://db.edusoft.entema-software.com/getTchExitMerger", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    }).then((res) => {
      setExitData(res.data);
      console.log("setExitData ", res.data);
    });
  };

  useEffect(() => {
    getData();
    getExitData();
  }, []);

  const updateStatus = (id, tch_id, sts) => {
    Axios.post("https://db.edusoft.entema-software.com/getTeacherLeaveCount", {
      teacherId: tch_id,
      sts: sts,
      id: id,
    }).then((res) => {
      //console.log(res.data);
      getData();
    });
  };

  const calculateSalary = (dom, leaves, salary) => {
    let perDaySAlary = parseInt(salary) / dom;
    let attendedDays = 0;
    if (leaves > 3) {
      attendedDays = dom - (leaves - 3);
      //console.log("ATTENDED",attendedDays);
    } else {
      attendedDays = dom;
    }
    let finalSalary = attendedDays * perDaySAlary;

    return finalSalary.toFixed(2);
  };

  const calculateExitSalary = (tod, edays, sal, leaves) => {
    let perDaySAlary = parseInt(sal) / tod;
    let attendedDays = edays;
    let finalLeaves = 0;
    let finalSalary = 0;

    if (leaves > 3) {
      finalLeaves = leaves - 3;
      finalSalary = (attendedDays - finalLeaves) * perDaySAlary;
    } else {
      finalSalary = attendedDays * perDaySAlary;
    }

    return finalSalary.toFixed(2);
  };

  return (
    <>
      <Navbar />

      <div className="card height-auto">
        <div className="card-body">
          <h2 style={{ padding: "50px" }}>Teacher Leave Report</h2>
          {/*<form className="mg-b-20">
            <div className="row gutters-8">
              <div className="col-lg-4  col-12 form-group">
                <input
                  type="text"
                  placeholder="Search by Teachers ID ..."
                  className="form-control"
                  id="tchId"
                  name="tchId"
                  value={tchId}
                  onChange={(e) => setTchId(e.target.value)}
                />
              </div>
              <div className="col-lg-4 col-12 form-group">
                <input
                  type="text"
                  placeholder="Search by Teachers Name ..."
                  className="form-control"
                  id="tchName"
                  name="tchName"
                  value={tchName}
                  onChange={(e) => setTchName(e.target.value)}
                />
              </div>
              <div className="col-lg-2 col-12 form-group">
                <button
                  type="button"
                  className="fw-btn-fill btn-gradient-yellow"
                  style={{ width: "100px" }}
                >
                  SEARCH
                </button>
              </div>
            </div>
  </form>*/}

          {/*<div className="heading-layout1">
            <div className="item-title">
              <div className="row" style={{ marginLeft: "10px" }}>
                <h3> Teacher's ID :</h3>
                <h3> Teacher's Name :</h3>
                <h3> Teacher's Phone :</h3>
                <h3> Teacher's DOB :</h3>

                <div
                  className="row"
                  style={{ marginLeft: "550px", marginTop: "-200px" }}
                >
                  <h3> Teacher's Email :</h3>
                  <h3> Teacher's DOM/Leaves :</h3>
                  <h3> Teacher's Salary :</h3>
                  <h3> Teacher's Status :</h3>
                </div>
              </div>
            </div>
</div>*/}

          <div className="table-responsive">
            <div
              id="DataTables_Table_0_wrapper"
              className="dataTables_wrapper no-footer"
            >
              {/*<h2 style={{ padding: "40px" }}>Teacher's Salaries (working)</h2>*/}
              <table
                className="table display data-table text-nowrap dataTable no-footer table-striped"
                id="DataTables_Table_0"
                role="grid"
              >
                <thead>
                  <tr role="row">
                    <th
                      className="sorting"
                      tabIndex="0"
                      aria-controls="DataTables_Table_0"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Admission iD: activate to sort column ascending"
                      style={{ width: "42.6667px" }}
                    >
                      ID
                    </th>
                    <th
                      className="sorting"
                      tabIndex="0"
                      aria-controls="DataTables_Table_0"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Gender: activate to sort column ascending"
                      style={{ width: "52px" }}
                    >
                      Name
                    </th>
                    <th
                      className="sorting"
                      tabIndex="0"
                      aria-controls="DataTables_Table_0"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="className: activate to sort column ascending"
                      style={{ width: "40px" }}
                    >
                      Phone
                    </th>
                    <th
                      className="sorting"
                      tabIndex="0"
                      aria-controls="DataTables_Table_0"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Section: activate to sort column ascending"
                      style={{ width: "54.6667px" }}
                    >
                      Email
                    </th>
                    <th
                      className="sorting"
                      tabIndex="0"
                      aria-controls="DataTables_Table_0"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Section: activate to sort column ascending"
                      style={{ width: "54.6667px" }}
                    >
                      DOM
                    </th>
                    <th
                      className="sorting"
                      tabIndex="0"
                      aria-controls="DataTables_Table_0"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Section: activate to sort column ascending"
                      style={{ width: "54.6667px", fontSize: "20px" }}
                    >
                      Leaves
                    </th>
                    <th
                      className="sorting"
                      tabIndex="0"
                      aria-controls="DataTables_Table_0"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Section: activate to sort column ascending"
                      style={{
                        width: "54.6667px",
                        color: "green",
                        fontSize: "20px",
                      }}
                    >
                      M.Salary
                    </th>
                    <th
                      className="sorting"
                      tabIndex="0"
                      aria-controls="DataTables_Table_0"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Section: activate to sort column ascending"
                      style={{
                        width: "54.6667px",
                        color: "green",
                        fontSize: "20px",
                      }}
                    >
                      Exp Salary
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {data.map((item) => (
                    <tr key={item.LEAVE_ID} role="row" className="odd ">
                      <td>{item.TEACHERS_ID}</td>
                      {/* <td style={styleback}>{item.stich_name}</td> */}

                      <td
                        //onClick={() => openAdForm(item.LEAVE_ID)}
                        style={{ cursor: "pointer" }}
                      >
                        {item.TCH_NAME}
                      </td>
                      <td>{item.TCH_PHONE}</td>
                      <td>{item.TCH_EMAIL}</td>
                      <td>{item.DOM}</td>
                      <td>{item.LEAVES}</td>
                      <td>{item.TCH_SALARY}</td>
                      <td>
                        {calculateSalary(
                          item.DOM,
                          item.LEAVES,
                          item.TCH_SALARY
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="table-responsive">
            <div
              id="DataTables_Table_0_wrapper"
              className="dataTables_wrapper no-footer"
            >
              <h2 style={{ padding: "40px" }}>Teacher's Salaries (exited)</h2>
              <table
                className="table display data-table text-nowrap dataTable no-footer table-striped"
                id="DataTables_Table_0"
                role="grid"
              >
                <thead>
                  <tr role="row">
                    <th
                      className="sorting"
                      tabIndex="0"
                      aria-controls="DataTables_Table_0"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Admission iD: activate to sort column ascending"
                      style={{ width: "42.6667px" }}
                    >
                      Name
                    </th>
                    <th
                      className="sorting"
                      tabIndex="0"
                      aria-controls="DataTables_Table_0"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Gender: activate to sort column ascending"
                      style={{ width: "52px" }}
                    >
                      Phone
                    </th>
                    <th
                      className="sorting"
                      tabIndex="0"
                      aria-controls="DataTables_Table_0"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="className: activate to sort column ascending"
                      style={{ width: "40px" }}
                    >
                      Email
                    </th>

                    <th
                      className="sorting"
                      tabIndex="0"
                      aria-controls="DataTables_Table_0"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Section: activate to sort column ascending"
                      style={{ width: "54.6667px" }}
                    >
                      DOM
                    </th>

                    <th
                      className="sorting"
                      tabIndex="0"
                      aria-controls="DataTables_Table_0"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Section: activate to sort column ascending"
                      style={{ width: "54.6667px" }}
                    >
                      Working Days
                    </th>
                    <th
                      className="sorting"
                      tabIndex="0"
                      aria-controls="DataTables_Table_0"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Section: activate to sort column ascending"
                      style={{
                        width: "54.6667px",
                        color: "green",
                        fontSize: "20px",
                      }}
                    >
                      M.Salary
                    </th>
                    <th
                      className="sorting"
                      tabIndex="0"
                      aria-controls="DataTables_Table_0"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Section: activate to sort column ascending"
                      style={{
                        width: "54.6667px",
                        color: "green",
                        fontSize: "20px",
                      }}
                    >
                      Exp.Salary
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {exitData.map((item) => (
                    <tr key={item.TEACHERS_ID} role="row" className="odd ">
                      <td>{item.TCH_NAME}</td>
                      {/* <td style={styleback}>{item.stich_name}</td> */}

                      <td
                        //onClick={() => openAdForm(item.LEAVE_ID)}
                        style={{ cursor: "pointer" }}
                      >
                        {item.TCH_PHONE}
                      </td>
                      <td>{item.TCH_EMAIL}</td>
                      <td>{item.TOTAL_DAYS}</td>
                      <td>{item.EXITED_DAYS}</td>
                      <td>{item.TCH_SALARY}</td>
                      <td>
                        {calculateExitSalary(
                          item.TOTAL_DAYS,
                          item.EXITED_DAYS,
                          item.TCH_SALARY,
                          item.LEAVE_COUNT
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SalaryReport;
