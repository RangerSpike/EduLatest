/*eslint-disable*/
import React from 'react';
import './App.css';
import LoginFrom from './LoginFrom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Routes from './Routes';


function App() {

  return (
    <div>
    <Router>
      <Switch>
        <Route exact path="/" component={LoginFrom} />
        <Routes />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
