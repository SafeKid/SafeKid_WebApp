import React, { useState } from 'react';
import {Link, withRouter} from 'react-router-dom';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import fire from 'config/fire';
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import SnackBar from '@material-ui/core/SnackBar';
import IconButton from '@material-ui/core/IconButton';
import logo from "assets/img/reactlogo.png";
import './signin.css';
import Alert from "components/alert";
import Button from "components/CustomButtons/Button.js";

const useStyles = makeStyles(styles);

function Signin(props) {
      
       const {classes} =[useStyles(),props]
       const [email, setEmail] =useState('')
       const [password, setPassword] =useState('')

       const [errorMessage, setErrorMessage] = useState('')

       const handleChange= (e) => {setEmail(e.target.value)}

    return(
           /* <div
            className="App"
            style={{
              backgroundColor: "#ffffff",
              width:"100%",
              height:"100%"
             
            }}>*/
             
             <div className="wrapper">
            <div className = {'authBox'} style={{minZoom:"100%"}}>
                <div className = {'leftBox'}>
                    <div className = {'bgBlue'}/>
                    <div className = {'imageAuth'}/>
                    <div className = {'imageText bold style1'}>SafeKid</div>
                    <div className = {'imageText style2'}>Making the world a safer place to your child</div>
                    <div className={'imageText style3'}>Don't have an account?  <Link style={{color:"#c2b0eb", fontWeight:"bold"}} to="/signup">Sign up</Link></div>
                </div>
                <div className = {'rightBox'}>
                <img className="logo-img" src={logo} align="right"></img>
                    <div className = {'box'}>
                        <div className={'titleAuth'}>LOGIN</div>
                        <div className = {'inputSBox'}>
                            <input 
                            className={'inputS'} 
                            name={'email'}
                            type={'email'} 
                            placeholder={'Email'}
                            onChange={handleChange}
                            value={email}required
                            />
                      </div>
                      <div className = {'inputSBox'}>
                            <input 
                            className={'inputS'}
                            name={'password'} 
                            type={'password'} 
                            placeholder={'Password'}
                            onChange={e => setPassword(e.target.value)}
                            value={password}required
                            />
                      </div>
                      <div className={'contentBox'}>
                        
                      <div className={'text1'}><Link style={{ fontWeight:"bold"}} to="/resetpwd">Forgot Password?</Link></div>
                      </div>
                      <Button className="Button" style={{backgroundColor:"#2e2d2d", fontWeight:"bold"}}
                     
                      onClick={signin}>
                          Login </Button>
                    </div>
                    {errorMessage &&
            <Alert type ="error" message={errorMessage} autoClose={5000}/>  }
                </div>
            </div> 
       </div>        
  )

  async function signin() {
    try { setErrorMessage('')
        await fire.signin(email, password)
        props.history.replace('/parent/dashboard')
    } catch(error) {
       // alert(error.message)
       setErrorMessage(error.message)
    }
    }
    
}

export default withRouter(withStyles(styles)(Signin))