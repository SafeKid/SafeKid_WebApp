import React, {Component} from "react";
import '../../node_modules/materialize-css/dist/css/materialize.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import M from  'materialize-css/dist/js/materialize.min.js';
import {Link, withRouter, Redirect} from 'react-router-dom';

const SmoothScroll = () => {
return(
    <section>
        <div className ="navbar-fixed">
            <nav className="grey darken-3">
                <div className ="container">
                    <div className ="nav-wrapper"> 
                        <AnchorLink href="!#" className="brand-logo">SafeKid</AnchorLink>
                        <AnchorLink href="!#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></AnchorLink>
                        <ul className="right hide-on-med-and-down">
                        <li><AnchorLink href="/home">HOME</AnchorLink></li>
        <li><AnchorLink href="/about">FEATURES</AnchorLink></li>
        <li><AnchorLink href="/contact">CONTACT US</AnchorLink></li>
        <li><Link to="/signin">SIGN IN</Link></li>
        <li><Link to="/signup">SIGN UP</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

        <ul className="sidenav" id="mobile-demo">
        <li><AnchorLink href="signin">FEATURES</AnchorLink></li>
        <li><AnchorLink href="signin">CONTACT US</AnchorLink></li>
        <li><AnchorLink href="signin">SIGN IN</AnchorLink></li>
        <li><AnchorLink href="signup">SIGN UP</AnchorLink></li>
        </ul>
    </section>
)
}

export default class Navbar extends Component{

    componentDidMount() {
        let sidenav = document.querySelector('#mobile-demo');
        M.Sidenav.init(sidenav, {});
      }
    render(){

  

        return(
            <div>
                <SmoothScroll/>
            </div>
        )

    }
}
