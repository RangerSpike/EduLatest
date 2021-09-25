/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "../Student/AdmissionReport.css";
import Navbar from "../../Common/Navbar/Navbar";
import Axios from "axios";
import { useHistory } from "react-router-dom";

function TadmissionReport() {
  const history = useHistory();

  const [data, setData] = useState([]);
  const [tchId, setTchId] = useState([]);
  const [tchName, setTchName] = useState([]);

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
        setTchId("");
        setTchName("");
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
              <h3 style={{ padding: "50px" }}>Teacher Report</h3>
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
                      Gender
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
                      Date of Join
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {data.map((item) => (
                    <tr key={item.TEACHERS_ID} role="row" className="odd ">
                      <td>{item.TEACHERS_ID}</td>
                      {/* <td style={styleback}>{item.stich_name}</td> */}

                      <td
                        onClick={() => openAdForm(item.TEACHERS_ID)}
                        style={{ cursor: "pointer" }}
                      >
                        {item.TCH_NAME}
                      </td>
                      <td>{item.TCH_GENDER}</td>
                      <td>{item.TCH_PHONE}</td>
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

export default TadmissionReport;
