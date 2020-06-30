import React from 'react';
import Signin from './signin';
import Signup from './signup';
import './App.css';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Switch>
        <Route exact path="/" component={Signin}/>
        <Route path="/signin" component={Signin}/>
        <Route path="/signup" component={Signup}/>
        </Switch>
    </div>
  );
}

export default App;
