import React, { useEffect } from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import {Link} from 'react-router-dom'
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
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
import carfix from "assets/img/cp.png"
import  "views/Image.css"
import fire from 'config/fire';
import { db } from 'config/fire';
 
import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { object } from "prop-types";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();

  /* const [reports,setReports] = React.useState([]);

React.useEffect(() => [
  db.ref('Reports' +db.id).on('value',(snapshot => {
    reports =snapshot.val()
  }))
])
 */

 const [rows,setRows] =React.useState([]);

 React.useEffect(() => { fetchData()},[])

 function fetchData(){
  db.ref('Reports').on('value',(snapshot) => {
    let rows=[];
    if(snapshot.exists()){
      snapshot.forEach((reportData) => {
        let report = reportData.val();
        report.date = reportData.key;
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
      height: "100%"  
    }}>
      <div className="Wrapper"  style={{marginLeft:"50px"}}>
    <div>
    <GridContainer>
      <GridItem xs={9} sm={9} md={9}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>News Feed</h4>
          </CardHeader>
          <CardBody>
  <br/><br/>
  <div>
      {rows.map(rows => {
          return <p key={rows.date}>{rows.description}</p>
        })}
    </div>
  <br/><br/>
          </CardBody>
        </Card>
      </GridItem>

      <GridItem xs={9} sm={9} md={9}>
        <Card>
          <CardBody>
           <br/> <br/> <br/> <br/> <br/>
          </CardBody>
        </Card>
      </GridItem>

      <GridItem xs={9} sm={9} md={9}>
        <Card>
          <CardBody>
           <br/> <br/> <br/> <br/> <br/>
          </CardBody>
        </Card>
      </GridItem>

      <GridItem xs={9} sm={9} md={9}>
        <Card>
          <CardBody>
           <br/> <br/> <br/> <br/> <br/>
          </CardBody>
        </Card>
      </GridItem>

      <GridItem xs={9} sm={9} md={9}>
        <Card>
          <CardBody>
           <br/> <br/> <br/> <br/> <br/>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
    </div>
    </div>
    </div>
  );
}