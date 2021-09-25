import React, { useState, useEffect } from "react";
import Axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../../Common/Navbar/Navbar";
import { useHistory } from "react-router-dom";

function TeacherUpdate() {
  const history = useHistory();
  const [Year, setYear] = useState("");
  const [YearLov, setYearLov] = useState([]);
  const [data, setData] = useState([]);
  const [tchId, setTchId] = useState([]);
  const [tchName, setTchName] = useState([]);
  const [Teachers, setTeacher] = useState("");
  const [TeachersLov, setTeacherLov] = useState([]);

  const getData = () => {
    Axios.get("https://db.edusoft.entema-software.com/getTeacherList", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    }).then((res) => {
      setData(res.data);
      console.log("result set in effect: ", res.data);
    });
  };

  const updateRecordsAfterFilter = () => {
    console.log("updateDuplicateVar called : ");
    if (tchId || tchName) {
      Axios.post("https://db.edusoft.entema-software.com/getTeacherAdReport", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
        teacherId: tchId ? tchId : `"` + `"`,
        teacherName: tchName ? tchName : `"` + `"`,
      }).then((res) => {
        setData(res.data);
        // setTchId("")
        // setTchName("")
        console.log("result set in effect: ", res.data);
      });
    } else {
      getData();
    }
  };

  const openAdForm = (id) => {
    //console.log("result set in DATABASED ON STUDENT  : ", id);
    history.push(`/TReportform/${id}`);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Navbar />

      <div className="card height-auto">
        <div className="card-body">
          <div className="heading-layout1">
            <div className="item-title">
              <h3 style={{ padding: "50px" }}>Teacher Update </h3>
            </div>
          </div>
          <form className="mg-b-20">
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
                  onClick={() => updateRecordsAfterFilter()}
                >
                  SEARCH
                </button>
              </div>
            </div>
          </form>
          <div style={{ marginBottom: "40px" }}>
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
          </div>
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
                    <tr key={item.TEACHERS_ID} role="row" className="odd ">
                      <td
                        onClick={() => openAdForm(item.TEACHERS_ID)}
                        style={{ cursor: "pointer" }}
                      >
                        {item.TEACHERS_ID}
                      </td>
                      {/* <td style={styleback}>{item.stich_name}</td> */}

                      <td>{item.TCH_NAME}</td>
                      <td>{item.TCH_GENDER}</td>
                      <td>{item.TCH_PHONE}</td>
                      <td>{item.TCH_ADDRESS}</td>
                      <td>{item.TCH_DOJ}</td>
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

export default TeacherUpdate;
