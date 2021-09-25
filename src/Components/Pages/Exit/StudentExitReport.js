import React, { useEffect, useState } from "react";
// eslint-disable-next-line
import "../Student/AdmissionReport.css";
import Navbar from "../../Common/Navbar/Navbar";
import axios from "axios";
import { useHistory } from "react-router-dom";

function StudentExitReport() {
  const history = useHistory();

  const [data, setData] = useState([]);
  const [stdId, setId] = useState();
  const [stdName, setName] = useState();

  const getData = () => {
    axios
      .get("https://db.edusoft.entema-software.com/getStudentExit", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          console.log(res.data);
          setData(res.data);
        }
      });
  };

  const updateRecordsAfterFilter = () => {
    console.log("updateDuplicateVar called : ");
    if (stdId || stdName) {
      axios
        .post("https://db.edusoft.entema-software.com/getStudentExitFilter", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
          student_id: stdId ? stdId : `"` + `"`,
          student_name: stdName ? stdName : `"` + `"`,
        })
        .then((res) => {
          setData(res.data);
          console.log("result set in effect: ", res.data);
        });
    } else {
      getData();
    }
  };

  const openAdForm = (id) => {
    console.log(id);
    history.push(`/StudentExitUpdate/${id}`);
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
              <h3 style={{ padding: "50px" }}>Student Exit Report</h3>
            </div>
          </div>
          <form className="mg-b-20">
            <div className="row gutters-8">
              <div className="col-lg-4  col-12 form-group">
                <input
                  type="text"
                  placeholder="Search by Student ID ..."
                  className="form-control"
                  id="stdId"
                  name="stdId"
                  value={stdId}
                  onChange={(e) => setId(e.target.value)}
                />
              </div>
              <div className="col-lg-4 col-12 form-group">
                <input
                  type="text"
                  placeholder="Search by Studend Name ..."
                  className="form-control"
                  id="stdName"
                  name="stdName"
                  value={stdName}
                  onChange={(e) => setName(e.target.value)}
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
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Admission iD: activate to sort column ascending"
                      style={{ width: "42.6667px" }}
                    >
                      STUDENT ID
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
                      Name
                    </th>
                    <th
                      className="sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Gender: activate to sort column ascending"
                      style={{ width: "52px" }}
                    >
                      Date of Joining
                    </th>
                    <th
                      className="sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="className: activate to sort column ascending"
                      style={{ width: "40px" }}
                    >
                      Date of Exit
                    </th>
                    <th
                      className="sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Section: activate to sort column ascending"
                      style={{ width: "54.6667px" }}
                    >
                      Character Issued
                    </th>
                    <th
                      className="sorting"
                      tabindex="0"
                      aria-controls="DataTables_Table_0"
                      rowspan="1"
                      colspan="1"
                      aria-label="Section: activate to sort column ascending"
                      style={{ width: "54.6667px" }}
                    >
                      Reason For Leaving
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {data.map((item) => (
                    <tr key={item.STUDENTS_ID} role="row" className="odd ">
                      <td>{item.STUDENTS_ID}</td>

                      <td
                        style={{ cursor: "pointer" }}
                        onClick={() => openAdForm(item.STUDENTS_ID)}
                      >
                        {item.STD_NAME}
                      </td>

                      <td>{item.STD_DOJ}</td>
                      <td>{item.STD_DOE}</td>
                      <td>{item.STD_CHR_CERT}</td>
                      <td>{item.STD_REASON}</td>
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

export default StudentExitReport;
