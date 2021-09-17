/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-const-assign */
import React, { useEffect, useState } from "react";
import "./PromotionReport.css";
import Axios from "axios";
import Navbar from "../../../Components/Common/Navbar/Navbar";

function PromotionReport() {
  const [std, setStd] = useState("");
  const [sec, setSec] = useState("");

  let NformValues = {
    select: false,
    studentId: "",
    name: "",
    CurClass: "",
  };

  let rows = [];
  const [formValues, setFormValues] = useState([]);

  const updateRecords = () => {
    Axios.post("http://localhost:3004/getStudentPermisiionList", {
      stdClass: std,
    }).then((res) => {
      //setData(res.data);
      //console.log("FILTER ", res.data);
      for (let i = 0; i < res.data.length; i++) {
        rows.push(NformValues);

        rows[i] = {
          select: false,
          studentId: res.data[i].STUDENT_ID,
          name: res.data[i].STD_NAME,
          CurClass: res.data[i].STD_CURRSEC,
        };
      }
      setFormValues(rows);
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

  const onSearch = () => {
    updateRecords();
  };
  const [prData, setprData] = useState([]);
  let x = [];

  const updatPr = () => {
    for (let i = 0; i < formValues.length; i++) {
      if (formValues[i].select) {
        console.log(formValues[i].studentId);
        x.push(formValues[i].studentId);
      }
    }
    setprData(x);
  };

  const onsubmitHandler = () => {
    //console.log("BAIGAN KA PR DATA", prData);
    Axios.post("http://localhost:3004/promoteStudentBasedOnId", {
      stdList: prData,
      std: std === "10" ? "Transferd" : parseInt(std) + 1,
    }).then(() => {
      updateRecords();
      //setStd("")
      //setFormValues(rows);
    });
  };

  const updateRecordsAfterFilter = (val) => {
    //setVresult((Vresult) => [...Vresult, val]);
    //console.log(Vresult);
  };
  return (
    <>
      <Navbar />
      <div className="card height-auto">
        <div className="card-body">
          <div className="heading-layout1">
            <div className="item-title">
              <h3>Promotion Report</h3>
            </div>{" "}
          </div>

          <form className="new-added-form-1">
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-12 form-group">
                <label htmlFor="promotion">Promotion From Standards</label>
                <select
                  as="select"
                  id="std"
                  name="std"
                  className="form-control"
                  onChange={(e) => {
                    setStd(e.target.value);
                  }}
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

              <div className="col-1-xxxl col-xl-2 col-lg-3 col-12 form-group-1">
                <button
                  type="button"
                  className="fw-btn-fill btn-gradient-yellow"
                  style={{ padding: "06px", marginTop: "32px" }}
                  onClick={onSearch}
                >
                  {" "}
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
                className="table display data-table text-nowrap dataTable no-footer"
                id="DataTables_Table_0"
                role="grid"
              >
                <thead>
                  <tr role="row">
                    <th
                      className="sorting_asc"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="student"
                      style={{ width: "200px" }}
                    >
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input checkAll"
                          onChange={(e) => {
                            let checked = e.target.checked;
                            setFormValues(
                              formValues.map((d) => {
                                d.select = checked;
                                return d;
                              })
                            );
                          }}
                        />
                        <label className="form-check-label">Sudent ID</label>
                      </div>
                    </th>

                    <th
                      className="sorting"
                      tabIndex="0"
                      aria-controls="DataTables_Table_0"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Gender: activate to sort column ascending"
                      style={{ width: "300px" }}
                    >
                      Student name
                    </th>
                    <th
                      className="sorting"
                      tabIndex="0"
                      aria-controls="DataTables_Table_0"
                      rowSpan="1"
                      colSpan="1"
                      aria-label="Class: activate to sort column ascending"
                      style={{ width: "200px" }}
                    >
                      Current Class
                    </th>
                  </tr>
                </thead>

                <tbody style={{ textAlign: "center" }}>
                  {formValues.map((item, i) => (
                    <tr role="row" className="odd" key={i}>
                      <td className="sorting_1">
                        <div className="form-check">
                          <input
                            style={{ marginLeft: "0.2px" }}
                            type="checkbox"
                            className="form-check-input"
                            id="select"
                            name="select"
                            checked={item.select}
                            onChange={(event) => {
                              let checked = event.target.checked;
                              setFormValues(
                                formValues.map((data) => {
                                  if (item.studentId === data.studentId) {
                                    data.select = checked;
                                    if (data.select === true) {
                                      let value = data.studentId;
                                      let x = value.toString();
                                      updateRecordsAfterFilter(x);
                                      updatPr();
                                    }
                                  }
                                  return data;
                                })
                              );
                            }}
                          />
                          <label className="form-check-label">
                            {item.studentId}
                          </label>
                        </div>
                      </td>
                      <td>{item.name}</td>
                      <td>{item.CurClass}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-12 form-group mg-t-8">
            <button
              type="submit"
              className="btn-fill-lg1 btn-gradient-yellow1 btn-hover-bluedark"
              onClick={onsubmitHandler}
            >
              Promote
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default PromotionReport;
