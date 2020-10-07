import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import {Link, Redirect, withRouter} from 'react-router-dom';
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Button from "components/CustomButtons/Button.js";
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import carfix from "assets/img/cp.png";
import  "views/Image.css"
import avatar from "assets/img/faces/marc.jpg";
import CardAvatar from "components/Card/CardAvatar.js";
import { db,auth,storage } from 'config/fire';
import fire from "config/fire";
import Slideshow from "./slider"


import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard(props) {

  const {classes} =props
  const [imageAsUrl, setImageAsUrl] = React.useState(avatar)
  const [rows,setRows] =React.useState([]);


  React.useEffect(() => { fetchData()},[])

  function fetchData(){
   db.ref('Users/' + auth.currentUser.uid).on('value',(snapshot) => {
     let rows=[];
     if(snapshot.exists()){
       
         let user = snapshot.val();
         user.uid = snapshot.key;
         setImageAsUrl(user.images)
        
     }
     })
 
     db.ref('Devices').on('value',(snapshot) => {
      console.log(snapshot.val());
      let rows=[];
      if(snapshot.exists()){
        snapshot.forEach((reportData) => {
          let report = reportData.val();
        
          rows.push(report);
  
          setRows([]);
          setRows(rows);
        })
      }
      })
   }
  return (
    <div
    className="App"
    style={{
      backgroundImage: `url(${carfix})`,
    }}>
      <div className="Wrapper">
    <div>
      <GridContainer>
        
      <GridItem xs={12} sm={6} md={6}>
        <Slideshow/>
           
          </GridItem>
          <GridItem   xs={10} sm={10} md={4}>
            <div style={{ paddingLeft:"100px"}}>
          <Card profile  >
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
              <img src={imageAsUrl} alt={""} />
              </a>
            </CardAvatar>
            <CardBody>
            <h4>
					Hello { fire.getCurrentUsername() }
          </h4>

          <Link to="/parent/user" className="btn purple" >Manage Profile</Link>
          </CardBody>
          
          </Card></div>
     
            <div style={{ paddingLeft:"50px" }}>
          <Card style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <CardHeader color="primary">MY DEVICES</CardHeader>
       
           
            
          
            <CardBody>
            {rows.map((rows,key)=>((rows.user==fire.auth.currentUser.email)?
             
             <div className="card-text" style={{padding:"20px" }}className="card" variant="outlined">
             <p>Child Name:&emsp; { rows.cname }</p>
             <p>Serial Number:&emsp; { rows.sno}</p>
             
             </div>
       
       :null))}

          <Link to="/parent/maps" className="btn purple" >Track</Link>
          </CardBody>
          
          </Card></div>
        </GridItem>
         
      </GridContainer>
    </div>
    </div>
    </div>
  );



}
