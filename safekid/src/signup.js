import React, { useState } from 'react';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";
import fire from 'config/fire';
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import {Link, withRouter, Redirect} from 'react-router-dom';
import logo from "assets/img/reactlogo.png";
import './signup.css';
import Alert from "components/alert";

const useStyles = makeStyles(styles)

function Signup(props) {
    const {classes} =[useStyles(),props]

    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
    const [confirmpassword, setCpass] = useState('')
    const [par, setp] = useState('par')
    const [images, setimages] = useState('')


    const [alertMessage, setAlertMessage] = useState(null)

    const handleChange= (e) => 
    {setEmail(e.target.value)}
    
const handleSubmit = (e) => {
    e.preventDefault();}


       return(
      /* <div
        className="App"
        style={{
          backgroundColor: "#ffffff",
          width:"100%",
          height:"1oo%"
        }}>*/

         <div className="wrapper">
              
            <div className = {'authBox'}>
                <div className = {'rBox'}>
                    <div className = {'bBlue'}/>
                    <div className = {'imageAth'}/>
                    <div className = {'imageText bold style1'}>SafeKid</div>
                    <div className = {'imageText style2'}>Making the world a safer place to your child</div>
                    <div className={'imageText style3'}>Already a Member? <Link style={{color:"#c2b0eb", fontWeight:"bold"}} to="/">Sign in</Link></div>
                </div>
                <div className = {'lBox'}>
                <img className="logo-img" src={logo} alt="align box" align="right"></img>
                    <div className = {'bo'}>
                        <div className={'titleAth'}>REGISTER</div>
                     <form onSubmit={handleSubmit}>
                        <div className = {'inputBox'}>
                            <label>First name:</label>
                            <input name={'firstname'} id="validationDefault01" className={'input'} type={'text'} value={firstname} onChange={e => setFirstName(e.target.value)}/>
                        </div>
                        <div className = {'inputBox'}>
                             <label>Last Name:</label>
                            <input name={'lastname'} className={'input'} type={'text'} value={lastname} onChange={e => setLastName(e.target.value)}required/>
                        </div>
                        <div className = {'inputBox'}>
                            <label>Email:</label>
                            <input className={'input'} type={'email'} value={email} onChange={handleChange} required/>
                        </div>
                        <div className = {'inputBox'}>
                            <label>Password:</label>
                            <input id="pw" className={'input'} type={'password'} value={password} onChange={e => setPassword(e.target.value)}required/>
                        </div>
                        <div className = {'inputBox'}>
                            <label>Confirm Password:</label>
                            <input id="cpw" className={'input'} type={'password'} value={confirmpassword} onChange={e => setCpass(e.target.value)}required/>
                        </div>
                        <div>
                            <input type={'hidden'} name="role" value={par} onChange={e => setp(e.target.value)}/>
                        </div>
                        <div>
                            <input type={'hidden'} name="images" />
                        </div>
                        <Button className={'btnAth'} style={{backgroundColor:"#2e2d2d", fontWeight:"bold"}} onClick={register}>Register</Button>
                        
                        </form>
                 
                        </div>
                        {alertMessage &&
            <Alert type ={alertMessage.type} message={alertMessage.message} autoClose={5000}/>  }
                </div>
            </div>
        
              </div>
             
        )
        async function register() {
            
                try { setAlertMessage(null)
                    
                    if(password!=confirmpassword){
                        setAlertMessage({
                            type:'error',
                            message:'Passwords must be same'
                        })
                        return;
                      } 
                    await fire.register(firstname,lastname,email, password,confirmpassword,par,images)
                    props.history.replace('/parent/dashboard')
                } catch(error) {
                   // alert(error.message)
                setAlertMessage({
                    type:'error',
                    message:error.message
                })
            }
        }
        
    }

export default withRouter(withStyles(styles)(Signup))