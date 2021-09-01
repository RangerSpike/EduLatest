/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-const-assign */
import React, { useEffect, useState } from "react";
import Navbar from "../../Common/Navbar/Navbar";
import "./PromotionReport.css";

function PromotionReport() {
  const [std, setStd] = useState("");
  const [sec, setSec] = useState("");

  const [formValues, setFormValues] = useState([]);

  useEffect(() => {
    let formValues = [
      { studentId: "B101", name: "Mohammed", CurClass: "5" },
      { studentId: "B102", name: "Shoaib", CurClass: "6" },
      { studentId: "B103", name: "Mazhar", CurClass: "3" },
      { studentId: "B104", name: "Shan", CurClass: "10" },
    ];
    formValues.map((d) => {
      return {
        select: false,
        studentId: d.studentId,
        name: d.name,
        CurClass: d.CurClass,
      };
    });
    setFormValues(formValues);
  }, []);

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
    alert("im on");
    console.log(std);
    console.log(sec);
  };

  const onsubmitHandler = () => {
    alert("Submited Array");
    console.log(Vresult);
    setVresult([]);
    formValues.map((d)=>{
      d.select=false;
    })
  };

  const [Vresult, setVresult] = useState([""]);

  const updateRecordsAfterFilter = (val) => {
    setVresult((Vresult) => [...Vresult, val]);
  };
  return (
    <>
    <Navbar/>
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

              <div className="col-xl-3 col-lg-6 col-12 form-group">
                <label>Promotion From Section</label>
                <select
                  as="select"
                  id="sec"
                  name="sec"
                  className="form-control"
                  onChange={(e) => {
                    setSec(e.target.value);
                  }}
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

                <tbody>
                  {formValues.map((item, i) => (
                    <tr role="row" className="odd" key={i}>
                      <td className="sorting_1">
                        <div className="form-check">
                          <input
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
