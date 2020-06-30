import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import {Link} from 'react-router-dom';
import './signup.css';
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Signup() {
       const classes = useStyles();
       return(
           <div className='row'>
               <Card className= 'col-12 col-md-5 m-1'>
           <CardBody>
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
                        
                        <div className = {'inputBox'}>
                            <label>First name:</label>
                            <input className={'input'} type={'text'}/>
                        </div>
                        <div className = {'inputBox'}>
                             <label>Last Name:</label>
                            <input className={'input'} type={'text'}/>
                        </div>
                        <div className = {'inputBox'}>
                            <label>Email:</label>
                            <input className={'input'} type={'email'}/>
                        </div>
                        <div className = {'inputBox'}>
                            <label>Password:</label>
                            <input className={'input'} type={'password'}/>
                        </div>
                        <div className = {'inputBox'}>
                            <label>Confirm Password:</label>
                            <input className={'input'} type={'password'}/>
                        </div>
                        <div className={'btnAth'}>Register</div>
                        <div className={'text'}>Already a Member? <Link to="/signin">Sign in</Link></div>
                        </div>
                </div>
            </div>
            </CardBody>

          </Card>
           
              </div>
              
        )
    }
    
