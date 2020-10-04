import React, {Component} from "react";
import '../../node_modules/materialize-css/dist/css/materialize.min.css';
import img1 from './imgs/img1.jpg'
import img2 from './imgs/img5.jpg'
import img4 from './imgs/img2.jpg'

export default class Banner extends Component {

    componentDidMount() {
        $(document).ready(function(){
            $('.slider').slider({
              indicators: false,
              height:500,
              transition:500,
              interval:6000
            });
          });
      }

render(){
    return(
        <section className="slider" id="home">
        <ul className="slides">
            <li>
                <img src={img1} alt="img1"/>
                <div className="caption center-align">
                <div className=" white-text hide-on-small-only">
                    <h2><br/><br/><br/><b><i>Be There For Your Children,<br/> Even When You're Apart..</i></b></h2>
                </div>
                </div>
            </li>

            <li>
                <img src={img2} alt="img2" />
                <div className="caption right-align">
                <div className="white-text hide-on-small-only">
                <h2><br/><br/><b><i>Now, Never let them out <br/>of your sight again..</i></b></h2>
                </div>
                </div>
            </li>

            <li>
                <img src={img4} alt="img3"/>
                <div className="caption right-align">
                <div className="white-text hide-on-small-only">
                    <h2><br/><br/><br/><b><i>Stay connected to your children,<br/>No matter where you are..</i></b></h2>
                </div>
                </div>
            </li>
        </ul>
        </section>
    )
}
}