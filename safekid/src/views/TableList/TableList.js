import React from "react";
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
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import  "views/Image.css"
import { bugs, website, server } from "variables/general.js";
import { blackColor } from "assets/jss/material-dashboard-react";
import { Popover } from "@material-ui/core";
import avatar from "assets/img/faces/marc.jpg";
import CardAvatar from "components/Card/CardAvatar.js";

/*import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";*/

//import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";


const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};



const useStyles = makeStyles(styles);

export default function Dashboard() {

  const classes = useStyles();
  /*
  saveDetails = () => {
    deviceNo : "1234";
    childName: "Kasun Perera";
    age: "14";
  };
  */
  return (
    <div
    className="App"
    style={{
      backgroundImage: `url(${carfix})`,
    }}>
    <div className="Wrapper">
    <div>
    No of Devices
    <span className="badge m-2 badge-primary"> 0</span>
      <GridContainer>
        <GridItem xs={15} sm={6} md={4}>
        <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Device Details</h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Device No"
                    id="DeviceNo"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Child Name"
                    id="childName"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Age"
                    id="Age"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
            
            </CardBody>
            <CardFooter>
              <Button color="primary">Add Details</Button><br/>
              <br/>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridItem   xs={10} sm={10} md={3} >
          <Card profile >
            <CardAvatar profile>
              <a href="" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h4 className={classes.cardTitle}>Alec Thompson</h4>
              <p className={classes.description}>
               
              </p>
             
            </CardBody>
          </Card>
        </GridItem>
    </div>
    </div>
    </div>
  );

 /* NewDeviceDetails(){

  }*/



}

        