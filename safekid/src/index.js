/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./views/Dashboard/Dashboard"
import Typography from "./views/Typography/Typography"
import UserProfile from "./views/UserProfile/UserProfile"
import TableList from "./views/TableList/TableList"
import Signin from "signin"
import Signup from "signup"
// core components
import parent from "layouts/parent.js";

import "assets/css/material-dashboard-react.css?v=1.9.0";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
    <Route path="/signin" component={Signin}/>
    <Route path="/signup" component={Signup}/>
      <Route path="/parent" component={parent} />
      <Route exact path="/Dashboard" component={Dashboard}/>
      <Route exact path="/Typography" component={Typography}/>
      <Route exact path="/UserProfile" component={UserProfile}/>
      <Route exact path="/TableList" component={TableList}/>
      <Redirect from="/" to="/parent/dashboard" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
