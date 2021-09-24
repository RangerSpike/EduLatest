/*eslint-disable*/
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from './Components/CallComponent/Main'

import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import AddmissionForm from "./Components/Pages/Student/AdmissionForm";
import AdmissionReport from "./Components/Pages/Student/AdmissionReport";
import PromotionReport from "./Components/Pages/Student/PromotionReport";
import ReportForm from "./Components/Pages/Student/ReportForm";

import TAdmissionForm from "./Components/Pages/Teachers/TadmissionForm";
import TAdmissionReport from "./Components/Pages/Teachers/TadmissionReport";
import ResponsiblityForm from "./Components/Pages/Teachers/ResponsiblityForm";
import ResponsiblityUpdateForm from "./Components/Pages/Teachers/ResponsibilityUpdateForm";
import ResponsibilityReport from "./Components/Pages/Teachers/ResponsibilityReport";
import TReportform from "./Components/Pages/Teachers/TReportForm";
import TeacherLeaveForm from "./Components/Pages/Teachers/TeacherLeaveForm";
import TeacherLeaveReport from "./Components/Pages/Teachers/TeachersLeaveReport";
import SalaryReport from "./Components/Pages/Teachers/SalaryReport";

import Notice from "./Components/Pages/Notice/Notice";
import Message from "./Components/Pages/Notice/Message";

import ResultForm from "./Components/Pages/Result/ResultForm";
import ResultReport from "./Components/Pages/Result/ResultReport";
import ResultUpdateForm from "./Components/Pages/Result/ResultUpdateForm";

import Student from "./Components/Pages/Exit/Student";
import StudentExitUpdate from './Components/Pages/Exit/StudentExitUpdateForm';
import StdERep from "./Components/Pages/Exit/StudentExitReport";

import Teacher from "./Components/Pages/Exit/Teacher";
import TeachERep from "./Components/Pages/Exit/TeachersExitReport";
import TeacherExitUpdate from './Components/Pages/Exit/TeacherExitUpdate';
import TeacherDash from "./Components/Pages/Dashboard/TeacherDash";

import Users from "./Components/Pages/Users/Users";
import UsersReport from "./Components/Pages/Users/UsersReport";
import UserUpdateForm from "./Components/Pages/Users/UserUpdateForm";

function Routes() {
  return (
    <>
      <Router>
        <Switch>
        <Route exact path="/EduMeet" component={Main} />
          <Route exact path="/Dashboard" component={Dashboard} />

          <Route exact path="/AddmissionForm" component={AddmissionForm} />
          <Route exact path="/AdmissionReport" component={AdmissionReport} />
          <Route exact path="/PromotionReport" component={PromotionReport} />
          <Route path="/ReportForm/:id" exact component={ReportForm} />

          <Route exact path="/TAdmissionForm" component={TAdmissionForm} />
          <Route exact path="/TAdmissionReport" component={TAdmissionReport} />
          <Route
            exact
            path="/ResponsiblityForm"
            component={ResponsiblityForm}
          />
          <Route
            exact
            path="/ResponsiblityUpdateForm/:id/:year"
            component={ResponsiblityUpdateForm}
          />
          <Route
            exact
            path="/ResponsiblityReport"
            component={ResponsibilityReport}
          />
          <Route path="/TReportform/:id" exact component={TReportform} />

          <Route exact path="/Notice" component={Notice} />
          <Route exact path="/Message" component={Message} />

          <Route exact path="/ResultForm" component={ResultForm} />
          <Route exact path="/ResultReport" component={ResultReport} />
          <Route exact path="/ResultUpdateForm/:id" component={ResultUpdateForm} />

          <Route exact path="/Student" component={Student} />
          <Route exact path="/StudentExitUpdate/:id" component={StudentExitUpdate} />
          <Route exact path="/StdERep" component={StdERep} />

          <Route exact path="/Teacher" component={Teacher} />
          <Route exact path="/TeacherExitUpdate/:id" component={TeacherExitUpdate} />
          <Route exact path="/TeachERep" component={TeachERep} />
          <Route exact path="/TeacherLeaveForm" component={TeacherLeaveForm} />
          <Route exact path="/TeacherLeaveReport" component={TeacherLeaveReport} />
          <Route exact path="/TeacherDash" component={TeacherDash} />
          <Route exact path="/SalaryReport" component={SalaryReport} />
          
          <Route exact path="/Users" component={Users} />
          <Route exact path="/UsersReport" component={UsersReport} />
          <Route exact path="/UserUpdate/:id" component={UserUpdateForm} />
        </Switch>
      </Router>
    </>
  );
}

export default Routes;
