import React from "react";
import "../Student/AdmissionReport.css";
import Navbar from "../../Common/Navbar/Navbar";
function TadmissionReport() {

  const formValues = {
    teacherId: "B101",
    photo: "#",
    name: "Mohammed",
    gender: "Male",
    dob: "29-04-2001",
    phoneNo: "8150899321",
    address: "NAGAR",
    doj: "19-02-2020",
    YOE: "5",
    preUni: "JNNCE ENGINEERING COLLEGE",
  };
  return (
    <>
    <Navbar/>

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
            <input type="text" placeholder="Search by Teachers ID ..." className="form-control"/>
        </div>
        <div className="col-lg-4 col-12 form-group">
            <input type="text" placeholder="Search by Teachers Name ..." className="form-control"/>
        </div>
        <div className="col-lg-2 col-12 form-group">
            <button type="submit" className="fw-btn-fill btn-gradient-yellow" style={{ width:"100px"}}>SEARCH</button>
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
                      ID
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
                     Photo
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
                     Name
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
                      Gender
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
                  Date of Birth
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
                Phone
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
              Address
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
            Date of Join
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
            Years of Experience

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
            Previous University/School


            </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr role="row" className="odd ">
                    <td>{formValues.teacherId}</td>
                    <td className="text-center"><img src="Founder1.jpg" alt=""/></td>
                    <td>{formValues.name}</td>
                    <td>{formValues.gender}</td>
                    <td>{formValues.dob}</td>
                    <td>+{formValues.phoneNo}</td>
                
                    <td>{formValues.address}</td>
                    <td>{formValues.doj}</td> 
                    <td> {formValues.YOE}</td>
                    <td> {formValues.preUni}</td> 
                    </tr>
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
