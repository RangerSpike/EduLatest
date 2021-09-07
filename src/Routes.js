/*eslint-disable*/
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dashboard from './Components/Pages/Dashboard/Dashboard'
import AddmissionForm from './Components/Pages/Student/AdmissionForm';
import AdmissionReport from './Components/Pages/Student/AdmissionReport';
import PromotionReport from './Components/Pages/Student/PromotionReport';
import ReportForm from './Components/Pages/Student/ReportForm';

import TAdmissionForm from './Components/Pages/Teachers/TadmissionForm';
import TAdmissionReport from './Components/Pages/Teachers/TadmissionReport';
import ResponsiblityForm from './Components/Pages/Teachers/ResponsiblityForm';
import ResponsibilityReport from './Components/Pages/Teachers/ResponsibilityReport';
import TReportform from './Components/Pages/Teachers/TReportForm';

import Notice from './Components/Pages/Notice/Notice';
import Message from './Components/Pages/Notice/Message';

import ResultForm from './Components/Pages/Result/ResultForm';
import ResultReport from './Components/Pages/Result/ResultReport';

import Student from './Components/Pages/Exit/Student';
import StdERep from './Components/Pages/Exit/StudentExitReport';
import Teacher from './Components/Pages/Exit/Teacher';
import TeachERep from './Components/Pages/Exit/TeachersExitReport';

import Users from './Components/Pages/Users/Users'

function Routes() {
  return (
    <>
     
      <Router>
        <Switch>
          <Route exact path='/Dashboard'  component={Dashboard} />

          <Route exact path="/AddmissionForm"  component={AddmissionForm} />
          <Route exact path="/AdmissionReport"  component={AdmissionReport} />
          <Route exact path="/PromotionReport"  component={PromotionReport} />
          <Route path='/ReportForm/:id' exact component={ReportForm} />

          <Route exact path="/TAdmissionForm"  component={TAdmissionForm} />
          <Route exact path="/TAdmissionReport"  component={TAdmissionReport} />
          <Route exact path="/ResponsiblityForm"  component={ResponsiblityForm} />
          <Route exact path="/ResponsiblityReport"  component={ResponsibilityReport} />
          <Route path='/TReportform/:id' exact component={TReportform} />

          <Route exact path="/Notice"  component={Notice} />
          <Route exact path="/Message"  component={Message} />

          <Route exact path="/ResultForm"  component={ResultForm} />
          <Route exact path="/ResultReport"  component={ResultReport} />

          <Route exact path="/Student"  component={Student} />
          <Route exact path="/StdERep"  component={StdERep} />
          <Route exact path="/Teacher"  component={Teacher} />
          <Route exact path="/TeachERep"  component={TeachERep} />

          <Route exact path="/Users"  component={Users} />

        </Switch>
      </Router>
    </>
  )
}

export default Routes
