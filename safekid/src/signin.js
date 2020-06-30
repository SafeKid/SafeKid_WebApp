import React from 'react';
import {Link} from 'react-router-dom';
// @material-ui/core components
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
import './signin.css';

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";


  const useStyles = makeStyles(styles);

 export default function Signin() {
        const classes = useStyles();
        return(
            <div className='row'>
                <Card className= 'col-12 col-md-5 m-1'>
            <CardBody>
            <div className = {'authBox'}>
                <div className = {'leftBox'}>
                    <div className = {'bgBlue'}/>
                    <div className = {'imageAuth'}/>
                    <div className = {'imageText bold style1'}>SafeKid</div>
                    <div className = {'imageText style2'}>Making the world a safer place to your child</div>
                </div>
                <div className = {'rightBox'}>
                    <div className = {'box'}>
                
                        <div className={'titleAuth'}>LOGIN</div>
                        <div className = {'inputSBox'}>
                            <input className={'inputS'} type={'text'} placeholder={'Email / Username'}/>
                      </div>
                      <div className = {'inputSBox'}>
                            <input className={'inputS'} type={'password'} placeholder={'Password'}/>
                      </div>
                      <div className={'contentBox'}>
                          <div className={'checkboxBox'}>
                            <input type={'checkbox'} className={'checkbox'}/>
                            <label className={'checkboxLabel'}>Remember</label>
                      </div>
                      <div className={'text1'}>Forgot Password?</div>
                      </div>
                      <div className={'btnAuth'}>Login</div>
                      <div className={'text'}>Don't have an account?  <Link to="/signup">Sign up</Link></div>
                 
                    </div>
                </div>
            </div>
            </CardBody>

          </Card>
           
              </div>
              
        )
    }
    
