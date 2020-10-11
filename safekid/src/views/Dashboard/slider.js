import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import img1 from  "assets/img/img3.jpeg"
import img2 from  "assets/img/img1.jpg"
import img3 from "assets/img/img2.jpg"
import img4 from "assets/img/img4.jpg"
import img5 from "assets/img/img5.jpg"
 
const properties = {
    duration:5000,
    transitionDuration:500,
    infinite:true,
    indicators:true,
    arrows:true
}
 
const Slideshow = () => {
    return (
      <div className="slide-container" style={{margin:"20px", paddingTop:"80px"}}>
        <Slide {...properties}>
          <div className="each-slide">
              <div>
            <img src={img1} alt="img1" style={{ height:"400px", weight:"400px"}}>
            </img>
            </div>
          </div>
          <div className="each-slide">
          <div>
            <img src={img2} alt="img2" style={{ height:"400px", weight:"400px"}}>
            </img>
            </div>
          </div>
          <div className="each-slide">
          <div>
            <img src={img3} alt="img3" style={{ height:"400px", weight:"400px"}}>
            </img>
            </div>
          </div>
          <div className="each-slide">
          <div>
            <img src={img4} alt="img4" style={{ height:"400px", weight:"400px"}}>
            </img>
            </div>
            </div>
            <div className="each-slide">
            <div>
            <img src={img5} alt="img5" style={{ height:"400px", weight:"400px"}}>
            </img>
            </div>
            </div>
        </Slide>
      </div>
    )
}

export default Slideshow;