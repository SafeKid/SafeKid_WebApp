import React, { useState } from 'react';
import {Link, withRouter} from 'react-router-dom';
// @material-ui/core components
import { makeStyles, withStyles } from "@material-ui/core/styles";
import fire from 'config/fire';
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import './signin.css';


const useStyles = makeStyles(styles);

function Signin(props) {
      
       const {classes} =[useStyles(),props]
       const [email, setEmail] =useState('')
       const [password, setPassword] =useState('')

    return(
            <div
            className="App"
            style={{
              backgroundColor: "#ffffff",
              width:"100%",
              height:"1oo%"
             
            }}>
             
  
      
             <div className="wrapper">
            <div className = {'authBox'}>
                <div className = {'leftBox'}>
                    <div className = {'bgBlue'}/>
                    <div className = {'imageAuth'}/>
                    <div className = {'imageText bold style1'}>SafeKid</div>
                    <div className = {'imageText style2'}>Making the world a safer place to your child</div>
                </div>
                <div className = {'rightBox'}>
                <br/>
                    <div className = {'box'}>
                
                        <div className={'titleAuth'}>LOGIN</div>
                        <div className = {'inputSBox'}>
                            <input 
                            className={'inputS'} 
                            name={'email'}
                            type={'email'} 
                            placeholder={'Email'}
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            />
                      </div>
                      <div className = {'inputSBox'}>
                            <input 
                            className={'inputS'}
                            name={'password'} 
                            type={'password'} 
                            placeholder={'Password'}
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            />
                      </div>
                      <div className={'contentBox'}>
                          <div className={'checkboxBox'}>
                            <input type={'checkbox'} className={'checkbox'}/>
                            <label className={'checkboxLabel'}>Remember</label>
                      </div>
                      <div className={'text1'}>Forgot Password?</div>
                      </div>
                      <div class="Button"
                     
                      onClick={signin}>
                          Login </div><br/>
                      <div className={'text'}>Don't have an account?  <Link to="/signup">Sign up</Link></div>
                 
                    </div>
                </div>
            </div>  
       </div>
    </div>       
  )

  async function signin() {
    try {
        await fire.signin(email, password)
        props.history.replace('parent/dashboard')
    } catch(error) {
        alert(error.message)
    }
}
}

export default withRouter(withStyles(styles)(Signin))