import React, { useState } from 'react';
import {Link, withRouter} from 'react-router-dom';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import fire from 'config/fire';
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import SnackBar from '@material-ui/core/SnackBar';
import IconButton from '@material-ui/core/IconButton';
import logo from "assets/img/reactlogo.png";
import Alert from "components/alert";
import Button from "components/CustomButtons/Button.js";
import './signin.css';
import { auth } from 'config/fire';

const useStyles = makeStyles(styles);

function ResetPwd(props) {
      
       const {classes} =[useStyles(),props]
       const [email, setEmail] =useState('')
       const [password, setPassword] =useState('')

       const [errorMessage, setErrorMessage] = useState('')

       const handleChange= (e) => {setEmail(e.target.value)}

    return(
             
             <div className="wrapper">
            <div className = {'authBox'}>
                <div className = {'leftBox'}>
                    <div className = {'bgBlue'}/>
                    <div className = {'imageAuth'}/>
                    <div className = {'imageText bold style1'}>SafeKid</div>
                    <div className = {'imageText style2'}>Making the world a safer place to your child</div>
                    
                </div>
                <div className = {'rightBox'}>
                <img className="logo-img" src={logo} align="right"></img>
                    <div className = {'rrbox'}>
                        <div className={'titleAuth'}>FORGET PASSWORD?</div>
                        <div><p>Enter your Email address below and we will send you information to reset your password</p></div>
                        <div className = {'inputSBox'}>
                            <input 
                            className={'inputS'} 
                            name={'email'}
                            type={'email'} 
                            placeholder={'Enter your Email'}
                            onChange={handleChange}
                            value={email}required
                            />
                      </div>
                            <br/>
                     
                      <Button className="Button" style={{backgroundColor:"#2e2d2d", fontWeight:"bold"}}
                     
                      onClick={reset}>
                          Send Reset Email </Button>
                          
                          <Button className="Button" style={{backgroundColor:"#2e2d2d", fontWeight:"bold"}}
                     
                     onClick={fun}>
                         Back to Login </Button>
                    </div>
                    
                    {errorMessage &&
            <Alert type ="error" message={errorMessage} autoClose={5000}/>  }
                </div>
            </div> 
       </div>      
     
  )

  async function reset() {
    setErrorMessage('')
            auth.sendPasswordResetEmail(email).then(function()
            {
                setErrorMessage("Email has been sent to you, Please check and verify.")  
            }
            )
         
         .catch(function(error) {
            // An error happened.
            setErrorMessage(error.message)
          });
    }
    

    async function fun(){
        props.history.push("/")
    }
}

export default withRouter(withStyles(styles)(ResetPwd))