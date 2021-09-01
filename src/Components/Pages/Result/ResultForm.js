import React from "react";
import Navbar from "../../Common/Navbar/Navbar";
import MultiRowRes from "./multiRowRes";

class ResultForm extends React.Component {
  state = {
    formVals: [
      {
        index: Math.random(),
        subject: "",
        IAmarks: "",
        extMarks: "",
      },
    ],
    subjectTbC: "",
    fullName: "",
    Std: "",
    isChecked: false,
    regNo: "",
    iATotal: "",
    extTotal: "",
    final: "",
    percentage: "",
    result: "",
  };

  handleCheckboxChange = (event) =>
    this.setState({ isChecked: event.target.checked });

  addNewRow = () => {
    this.setState((prevState) => ({
      formVals: [
        ...prevState.formVals,
        {
          index: Math.random(),
          subject: "",
          IAmarks: "",
          extMarks: "",
          isChecked: false,
        },
      ],
    }));
  };

  handleChange = (e) => {
    if (["subject", "IAmarks", "extMarks"].includes(e.target.name)) {
      let formVals = [...this.state.formVals];
      formVals[e.target.dataset.id][e.target.name] = e.target.value;
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // if (this.state.year === "" || this.state.teachers === "") {
    //   NotificationManager.warning("Please Fill up Required Field . Please check Year and Teachers Field");
    //   return false;
    // }
    // for (var i = 0; i < this.state.taskList.length; i++) {
    //   if (
    //     this.state.taskList[i].subjectName === "" ||
    //     this.state.taskList[i].gradeName === ""
    //   ) {
    //     NotificationManager.warning("Please Fill up Required Field.Please Check Subject name And Grade Details");
    //     return false;
    //   }
  };

  deteteRow = (index) => {
    this.setState({
      formVals: this.state.formVals.filter((s, sindex) => index !== sindex),
    });
  };

  clickOnDelete = (record) => {
    this.setState({
      formVals: this.state.formVals.filter((r) => r !== record),
    });
  };

  render() {
    let { formVals } = this.state;

    const Checkbox = () => (
      <input
        type="checkbox"
        checked={this.state.isChecked}
        onChange={this.handleCheckboxChange}
      />
    );

    return (
      <>
      <Navbar/>
        <div className="card height-auto">
          <div className="card-body">
            <form
              id="test-form"
              className="new-added-form-4"
              onSubmit={this.handleSubmit}
              onChange={this.handleChange}
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
                    id="regNo"
                    name="regNo"
                  />
                </div>
                <div className="col-lg-4 col-12 form-group">
                  <button
                    type="submit"
                    className="fw-btn-fill btn-gradient-yellow"
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
                    id="Std"
                    name="Std"
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
                    placeholder="Subject for Calculated..."
                    className="form-control"
                    id="subjectTbC"
                    name="subjectTbC"
                  />
                </div>
                <div
                  className="col-lg-4 col-sm form-group"
                  style={{ marginLeft: "50px", marginTop: "20px" }}
                >
                  <label>
                    <Checkbox /> Exclude IA Marks
                  </label>
                </div>

                <div
                  className="col-sm-6  form-group"
                  style={{
                    marginLeft: "150px",
                    fontSize: "larger",
                    fontWeight: "500",
                    marginTop: "30px",
                  }}
                >
                  <div className="col-xs-3  form-group">
                    <button
                      onClick={this.addNewRow}
                      type="button"
                      className="btn btn-primary text-center"
                    >
                      <i className="fa fa-plus-circle" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
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
                    <MultiRowRes
                      add={this.addNewRow}
                      delete={this.clickOnDelete.bind(this)}
                      formVals={formVals}
                      getChecked={this.state.isChecked}                     
                    />
                  </tbody>
                </table>
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
                        onChange
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
}

export default ResultForm;
