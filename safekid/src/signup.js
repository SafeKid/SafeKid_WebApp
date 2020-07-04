import React, { useState } from 'react';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import fire from 'config/fire';
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import {Link, withRouter} from 'react-router-dom';
import './signup.css';

const useStyles = makeStyles(styles)

function Signup(props) {
    const {classes} =[useStyles(),props]

    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
    const [confirmpassword, setCpass] = useState('')
    const [par, p] = useState('')
       
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
                <div className = {'rBox'}>
                    <div className = {'bBlue'}/>
                    <div className = {'imageAth'}/>
                    <div className = {'imageText bold style1'}>SafeKid</div>
                    <div className = {'imageText style2'}>Making the world a safer place to your child</div>
                </div>
                <div className = {'lBox'}>
                    <div className = {'bo'}>
                        <div className={'titleAth'}>REGISTER</div>
                        <form>
                        <div className = {'inputBox'}>
                            <label>First name:</label>
                            <input name={'firstname'} className={'input'} type={'text'} value={firstname} onChange={e => setFirstName(e.target.value)}/>
                        </div>
                        <div className = {'inputBox'}>
                             <label>Last Name:</label>
                            <input name={'lastname'} className={'input'} type={'text'} value={lastname} onChange={e => setLastName(e.target.value)}required/>
                        </div>
                        <div className = {'inputBox'}>
                            <label>Email:</label>
                            <input className={'input'} type={'email'} value={email} onChange={e => setEmail(e.target.value)}required/>
                        </div>
                        <div className = {'inputBox'}>
                            <label>Password:</label>
                            <input className={'input'} type={'password'} value={password} onChange={e => setPassword(e.target.value)}required/>
                        </div>
                        <div className = {'inputBox'}>
                            <label>Confirm Password:</label>
                            <input className={'input'} type={'password'} value={confirmpassword} onChange={e => setCpass(e.target.value)}required/>
                        </div>
                        <div>
                            <input type={'hidden'} name="role" value={"p"}/>
                        </div>
                        
                        <div className={'btnAth'} onClick={register}>Register</div>
                        <div className={'text'}>Already a Member? <Link to="/signin">Sign in</Link></div>

                        </form>
                        </div>
                </div>
            </div>
        
              </div>
              </div>
              
        )
        async function register() {
            try {
                await fire.register(firstname,lastname, email, password,confirmpassword,p)
                props.history.replace('/parent/dashboard')
            } catch(error) {
                alert(error.message)
            }
        }
    }

export default withRouter(withStyles(styles)(Signup))
    
