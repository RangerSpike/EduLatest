/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../../Common/Navbar/Navbar";
import { useHistory } from "react-router-dom";

function ResponsibilityReport() {
  const history = useHistory();
  const [Year, setYear] = useState("");
  const [id, setId] = useState();
  const [YearLov, setYearLov] = useState([]);

  const [data, setData] = useState([]);

  const [Teachers, setTeacher] = useState("");
  const [TeachersLov, setTeacherLov] = useState([]);  

  const updateRecordsAfterFilter = () => {
    console.log("updateDuplicateVar called : ");
    if (Year && Teachers) {
      Axios.post("https://db.edusoft.entema-software.com/getTeacherRespReport", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
        year: Year ? Year : `"` + `"`,
        tacherId: Teachers ? Teachers : `"` + `"`,
      }).then((res) => {
        setData(res.data);        
        // setTchName("")
        console.log("result set in effect: ", res.data);
      });
    } else {
      //getData();
    }
  };

  const openUpdateForm = () => {
    //console.log("result set in DATABASED ON STUDENT  : ", id);
    history.push(`/ResponsiblityUpdateForm/${Teachers}/${Year}`);
  };

  const getLov = () => {
    Axios.get("https://db.edusoft.entema-software.com/getYearLov", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    }).then((res) => {
      setYearLov(res.data);
      //console.log("result set in effect: ", res.data);
    });
  };

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
    //getData();
    getTchLov()
    getLov()
  }, []);

  return (
    <>
      <Navbar />

      <div className="card height-auto">
        <div className="card-body">
          <div className="heading-layout1">
            <div className="item-title">
              <h3 style={{ padding: "50px" }}>Teacher Responsibility Report</h3>
            </div>
          </div>
          <form className="mg-b-20">
            <div className="row gutters-8">
              <div className="row">
                <div className="col-xl-3 col-lg-6 col-12 form-group-122">
                  <label>Year</label>
                  <select
                    className="select3 select2-hidden-accessible"
                    name="Year"
                    id="Year"
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
              <div className="col-lg-2 col-12 form-group">
                <button
                  type="button"
                  className="fw-btn-fill btn-gradient-yellow"
                  style={{ width: "100px" ,marginTop:"10px"}}
                  onClick={() => updateRecordsAfterFilter()}
                >
                  SEARCH
                </button>
              </div>
            </div>
          </form>
          <div style={{ marginBottom: "40px" }}></div>
          <div className="table-responsive">
            <div
              id="DataTables_Table_0_wrapper"
              className="dataTables_wrapper no-footer"
            >
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
                      aria-label="Admission iD: activate to sort column ascending"
                      style={{ width: "42.6667px" }}
                    >
                      Subject Name
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
                      Class
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
                      Grade
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
                      Timings
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {data.map((item) => (
                    <tr key={item.RESPID} role="row" className="odd ">
                      <td
                        onClick={() => openUpdateForm(item.TEACHERS_ID)}
                        style={{ cursor: "pointer" }}
                      >
                        {item.RESPID}
                      </td>
                      {/* <td style={styleback}>{item.stich_name}</td> */}

                      <td>{item.SUBJECT_NAME}</td>
                      <td>{item.CLASS}</td>
                      <td>{item.GRADE}</td>
                      <td>{item.TIMINGS}</td>                      
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

export default ResponsibilityReport;
