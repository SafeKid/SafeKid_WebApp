import React, { Fragment,useState, useEffect } from 'react';
import Signin from './signin';
import Signup from './signup';
import ResetPwd from './resetpwd';
import parent from "layouts/parent.js";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from 'views/Dashboard/Dashboard';
import { CircularProgress } from '@material-ui/core';
import fire from 'config/fire';
import { createBrowserHistory } from "history";
import { Home } from './validate'
//import {Devices} from './components/Devices/DeviceCounter'
import { AuthProvider } from "./auth";
import PrivateRoute from "./privaterouter";

const hist = createBrowserHistory();

export default function App() {
  
  const [firebaseInitialized,setFirebaseInetialized] = useState(false)

  useEffect(()=>{
    fire.isInitialized().then(val =>{
      setFirebaseInetialized(val)
    })
  })

  return firebaseInitialized !== false? (
    <AuthProvider>
    <Router history={hist}> 
             <Switch> 
      <Route exact path="/" component={Home}/>
      <Route path="/signin" component={Signin}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/resetpwd" component={ResetPwd}/>
      <PrivateRoute path="/parent" component={parent} />
      <PrivateRoute path="/Dashboard" component={Dashboard}/>
  
        </Switch>    
  </Router>  
  </AuthProvider>
         
  ) : <div id = "loader"><CircularProgress/></div>

  
}


