/*eslint-disable*/
import React, { useState } from "react";
import { NotificationContainer,NotificationManager } from "react-notifications";
import 'react-notifications/lib/notifications.css';
import ResponseMultirow from "./ResponseMultirow";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import TadmissionForm from './TadmissionForm';
import Navbar from "../../Common/Navbar/Navbar";

class ResponsiblityForm extends React.Component {

  state = {
    taskList: [
      {
        index: Math.random(),
        subjectName: "",
        standardName: "",
        gradeName: "",
        timings: "",
      },
    ],
    year: "",
    teachers: "",
    respId: "",
  };


  handleChange = (e) => {
    if (
      ["subjectName", "standardName", "gradeName", "timings"].includes(
        e.target.name
      )
    ) {
      let taskList = [...this.state.taskList];
      taskList[e.target.dataset.id][e.target.name] = e.target.value;
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  addNewRow = () => {
    this.setState((prevState) => ({
      taskList: [
        ...prevState.taskList,
        {
          index: Math.random(),
          subjectName: "",
          standardName: "",
          gradeName: "",
          timings: "",
        },
      ],
    }));
  };

  deteteRow = (index) => {
    this.setState({
      taskList: this.state.taskList.filter((s, sindex) => index !== sindex),
    });
    // const taskList1 = [...this.state.taskList];
    // taskList1.splice(index, 1);
    // this.setState({ taskList: taskList1 });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.year === "" || this.state.teachers === "") {
      NotificationManager.warning("Please Fill up Required Field . Please check Year and Teachers Field");
      return false;
    }
    for (var i = 0; i < this.state.taskList.length; i++) {
      if (
        this.state.taskList[i].subjectName === "" ||
        this.state.taskList[i].gradeName === ""
      ) {
        NotificationManager.warning("Please Fill up Required Field.Please Check Subject name And Grade Details");
        return false;
      }
    }

    let data = { formData: this.state };

    Axios.get("http://localhost:3004/getSequenceRespId").then((res) => {
      console.log("response id : ", res.data[0].RESPID);
      this.setState({
        respId: res.data[0].RESPID,
      });
      console.log("state : ", this.state);
      this.moveDataToDb(
        data.formData,
        data.formData.taskList.length,
        res.data[0].RESPID
      );

      if (res.data[0].RESPID){
        NotificationManager.success('Successfully updated Responsibilities');
        
        setTimeout(() => {
          this.props.history.push('/');
        }, 1000);
      }
       
    });

    this.clearForm(data.formData.taskList.length);
  
    return true;
  };

  clickOnDelete(record) {
    this.setState({
      taskList: this.state.taskList.filter((r) => r !== record),
    });
  }

  clearForm = (row) => { 
    
    // for (var i=0; i = row; i++){
    //   this.deteteRow(i);
    // }

    document.getElementById("test-form").reset();

}

  render() {
    let { taskList } = this.state; //let { notes, date, description, taskList } = this.state
    return (
      <>
      <Navbar/>
        <div className="card height-auto">
          <div className="card-body">
            <div className="heading-layout1">
              <div className="item-title">
                <h3 style={{ padding: "50px" }}>Responsiblity</h3>
              </div>
            </div>
            <form
            id="test-form"
              className="new-added-form-1"
              onSubmit={this.handleSubmit}
              onChange={this.handleChange}
            >
              <div className="row">
                <div className="col-xl-3 col-lg-6 col-12 form-group-1">
                  <label>Year</label>
                  <select
                    className="select3 select2-hidden-accessible"
                    name="year"
                    id="year"
                  >
                    <option value="" data-select2-id="3">
                      Select
                    </option>
                    <option value="1">2021 </option>
                    <option value="2">2020</option>
                    <option value="3">2019</option>
                    <option value="4">2018</option>
                  </select>
                </div>

                <div className="col-xl-3 col-lg-6 col-12 form-group-1">
                  <label>Teachers</label>
                  <select
                    className="select3 select2-hidden-accessible"
                    name="teachers"
                    id="teachers"
                  >
                    <option value="" data-select2-id="9">
                      Select
                    </option>
                    <option value="1">zeeshan ulla baig</option>
                    <option value="2">Mohammad mazhar</option>
                    <option value="3">syed tousif</option>
                    <option value="4">Bilal</option>
                    <option value="5">shoaib</option>
                  </select>
                </div>
              </div>
              <br />
              <br />
              <div>
                <table
                  className="table display data-table text-nowrap dataTable no-footer"
                  id="DataTables_Table_test"
                  role="grid"
                  style={{ backgroundColor: "#a8x0ff" }}
                >
                  <thead>
                    <tr>
                      <th>Subject Name</th>
                      <th>Class</th>
                      <th>Grade</th>
                      <th>Timings</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <ResponseMultirow
                      add={this.addNewRow}
                      delete={this.clickOnDelete.bind(this)}
                      taskList={taskList}
                    />
                  </tbody>
                </table>
                <div className="card-footer text-center">
                  {" "}
                  <button
                    type="submit"
                    className="btn btn-primary text-center float-right"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>

            {/* <button type="button" onClick={() => {this.test("STANDARD_NAME")}}>TEST</button> */}
          </div>
        </div>
        <NotificationContainer/>
      </>
    );
  }
}

export default ResponsiblityForm;
