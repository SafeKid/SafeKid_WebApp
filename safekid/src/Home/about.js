import React, {Component} from "react";
import '../../node_modules/materialize-css/dist/css/materialize.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import M from  'materialize-css/dist/js/materialize.min.js';
import {Link, withRouter, Redirect} from 'react-router-dom';

export default class About extends Component{

render(){
    return(
        <section className="section section-icons grey lighten-4 center" id="about">
        <div className="container">
           
                
                <div className="row">
                <h3 className="center">
                    <span className="purple-text darken-2"><b>WHAT IS </b></span><i>SafeKid </i>?
                    <div className="center" style={{fontSize:"25px"}}>
                    <p>SafeKid is a web and mobile based application that will allow the parents to keep track of their children when their child is out of their view. And a wearable device that can detect and alert if the child is in trouble.</p>
               </div>
                </h3>
                <div className="col s6 m4">
                    <div className="card-panel">
                        <i className="material-icons medium purple-text">gps_fixed</i>
                        <h4>Real Time Tracking</h4>
                        <p>SafeKid allows you to live track the location of your chid whererever they go..</p>
                    </div>
                </div>

                <div className="col s6 m4">
                    <div className="card-panel">
                        <i className="material-icons medium purple-text">receipt_long</i>
                        <h4>Previous Cases</h4>
                        <p>You can view the past cases through our application..<br/><br/></p>
                    </div>
                </div>

                <div className="col s6 m4">
                    <div className="card-panel">
                        <i className="material-icons medium purple-text">account_circle</i>
                        <h4>Secure Account</h4>
                        <p>We ensure that your account stays fully secure so that your data cannot be accessed by any third party..</p>
                    </div>
                </div>

                <div className="col s6 m4">
                    <div className="card-panel">
                        <i className="material-icons medium purple-text">radio_button_checked</i>
                        <h4>Panic Button Alert</h4>
                        <p>A key feature that Safekid offers is its panic button which alerts you immediately through this application if the panic button is pressed..</p>
                    </div>
                </div>

                <div className="col s6 m4">
                    <div className="card-panel">
                        <i className="material-icons medium purple-text">smartphone</i>
                        <h4>Access through Mobile app</h4>
                        <p>You can use all of our features with the help of our user friendly mobile app. The app is available for free to all users..</p>
                    </div>
                </div>
                </div>
            

        
        </div>
        </section>
    )
}

}

