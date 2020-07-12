import React, { PureComponent } from 'react';
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
import { DetailDevice } from "components/Devices/DeviceCounter.jsx";

class DeviceCounter extends Component {
    state = {  
        count: 1,
        deviceNo:1234,
        childName:"",
        age: " "
    };

    handleIncrement = () => {
        this.setState({count: this.state.count+1});
    }

    render() { 
        return (
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
                    id={this.state.deviceNo}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Child Name"
                    id={this.state.childName}
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
    );
    }


    formatCount(){
        const {count} = this.state;
        return count === 0 ? '0' : count;
    }


}
 
export default DeviceCounter;