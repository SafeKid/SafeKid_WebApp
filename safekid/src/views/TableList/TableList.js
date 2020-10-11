import React, {useEffect, useState} from "react";
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
import avatar from "assets/img/faces/pic.jpg";
import CardAvatar from "components/Card/CardAvatar.js";
import fire from "../../config/fire"
import Alert from "components/alert";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

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
    cname: "Kasun Perera";
    age: "14";
  };
  */

  const [sno, setsno] = useState('')
  const [cname, setcname] = useState('')
  const [age, setage] = useState('')
  const [phoneNo, setphoneNo] = useState('')
  const [user, setuser] = useState('')
  const [pname, setpname] = useState('')
  const [deviceList, setdeviceList] = useState([])
  const [alertMessage, setAlertMessage]=useState(null)
  const [lat, setlat] = useState('')
  const [long, setlong] =useState('')
  const [date, setdate]=useState('')
  // const serialNoChange=(sn) =>{
  //  setsno(sn.target.value)
    // }

    useEffect(()=>{
      fire.db.ref('/Devices').on('value',snapshot=>{
        let deviceLists=[]
        snapshot.forEach((child)=>{
          deviceLists.push({
            sno:child.val().sno,
            pname:child.val().pname,
            cname:child.val().cname,
            age:child.val().age,
            user:child.val().user,
            lat:child.val().lat,
            long:child.val().long,
            _key:child.key
          });
        });
        
        setdeviceList(deviceLists)
        
      });
    },[]);
    // })
  const saveDeviceDetails=() =>{
  if(sno==''||cname==''||age==''||phoneNo==''||pname==''){
    setAlertMessage({
      type: 'error',
      message: "any field shouldn't be empty"})
      return;
   }else if(sno.trim().length!=8){
        setAlertMessage({
          type: 'error',
          message: "Serial Nuumber should be 8 charactors long"})
          return;
  //  }
        }else{fire.db.ref('/Confirmations').push({
      cno:cname,
      sno:sno,
      age:age,
      phoneNo:phoneNo,
      user:fire.auth.currentUser.email,
      lat:'',
      long:''

    }).then(()=>{
      console.log('Inserted')
      setAlertMessage({
        type: 'success',
        message: "Registration Request sent successfully"})
        return;
      
    }).catch((error) => {
      console.log(error);
    });
  }
  }

  const deleteDevice=(val)=>{
    fire.db.ref('/Devices').child(val).remove()
    setAlertMessage({
      type: 'error',
      message: "Your Device has been deleted!"})
      return;
  }

  return (
    <div
  
    className="App"
    style={{
      backgroundImage: `url(${carfix})`,
    }}>
    <div className="Wrapper">
    <div>
    
    <span className="badge m-2 badge-primary"> 0</span>
      {alertMessage && 
        <Alert type={alertMessage.type} message={alertMessage.message} autoClose={5000}/> }
      <GridContainer>
        <GridItem xs={15} sm={6} md={6}>
        <Card>
            <CardHeader color="primary">
  <h4 className={classes.cardTitleWhite}>Device List</h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Serial No"
                    id="SerialNo"
                    onChange={(sn)=>setsno(sn.target.value)}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Child Name"
                    id="cname"
                    onChange={(cname)=>setcname(cname.target.value)}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  {/* <CustomInput
                    labelText="Age"
                    id="Age"
                    onChange={(age)=>setage(age.target.value)}
                    formControlProps={{
                      fullWidth: true
                    }}
                  /> */}
               <FormControl fullWidth className={classes.selectFormControl}>   
                   <InputLabel
            htmlFor="simple-select"
            className={classes.selectLabel}
          >
            Age 
          </InputLabel>
          <Select
            MenuProps={{
              className: classes.selectMenu
            }}
            classes={{
              select: classes.select
            }}
            value={age}
            onChange={(age)=>setage(age.target.value)}
            inputProps={{
              name: "age",
              id: "simple-select"
            }}
          >
            <MenuItem
              disabled
              classes={{
                root: classes.selectMenuItem
              }}
            >
              select child's age
            </MenuItem>
            <MenuItem
              classes={{
                root: classes.selectMenuItem,
                selected: classes.selectMenuItemSelected
              }}
              value="6"
            >
             6
            </MenuItem>
            <MenuItem
              classes={{
                root: classes.selectMenuItem,
                selected: classes.selectMenuItemSelected
              }}
              value="7"
            >
             7
            </MenuItem>
            <MenuItem
              classes={{
                root: classes.selectMenuItem,
                selected: classes.selectMenuItemSelected
              }}
              value="8"
            >
             8
            </MenuItem>
            <MenuItem
              classes={{
                root: classes.selectMenuItem,
                selected: classes.selectMenuItemSelected
              }}
              value="9"
            >
             9
            </MenuItem>
            <MenuItem
              classes={{
                root: classes.selectMenuItem,
                selected: classes.selectMenuItemSelected
              }}
              value="10"
            >
             10
            </MenuItem>

            <MenuItem
              classes={{
                root: classes.selectMenuItem,
                selected: classes.selectMenuItemSelected
              }}
              value="11"
            >
              11
            </MenuItem>
            <MenuItem
              classes={{
                root: classes.selectMenuItem,
                selected: classes.selectMenuItemSelected
              }}
              value="12"
            >
             12
            </MenuItem>
            <MenuItem
              classes={{
                root: classes.selectMenuItem,
                selected: classes.selectMenuItemSelected
              }}
              value="13"
            >
             13
            </MenuItem>
            <MenuItem
              classes={{
                root: classes.selectMenuItem,
                selected: classes.selectMenuItemSelected
              }}
              value="14"
            >
             14
            </MenuItem>
            <MenuItem
              classes={{
                root: classes.selectMenuItem,
                selected: classes.selectMenuItemSelected
              }}
              value="15"
            >
             15
            </MenuItem>
            <MenuItem
              classes={{
                root: classes.selectMenuItem,
                selected: classes.selectMenuItemSelected
              }}
              value="16"
            >
             16
            </MenuItem>
            <MenuItem
              classes={{
                root: classes.selectMenuItem,
                selected: classes.selectMenuItemSelected
              }}
              value="17"
            >
             17
            </MenuItem>
            <MenuItem
              classes={{
                root: classes.selectMenuItem,
                selected: classes.selectMenuItemSelected
              }}
              value="18"
            >
             18
            </MenuItem>
            <MenuItem
              classes={{
                root: classes.selectMenuItem,
                selected: classes.selectMenuItemSelected
              }}
              value="19"
            >
             19
            </MenuItem>
            <MenuItem
              classes={{
                root: classes.selectMenuItem,
                selected: classes.selectMenuItemSelected
              }}
              value="20"
            >
             20
            </MenuItem>
            
          </Select>
          </FormControl>
                </GridItem>
              </GridContainer>
              
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Phone No"
                    id="Phone No"
                    onChange={(phoneNo)=>setphoneNo(phoneNo.target.value)}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Parent Name"
                    id="Pname"
                    onChange={(pname)=>setpname(pname.target.value)}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={saveDeviceDetails}>Add Details </Button><br/>
                 
              <br/>
            </CardFooter>
          </Card>
        </GridItem>
  
       <GridItem   xs={10} sm={10} md={4} >
       {deviceList.map((item,key)=>((item.user==fire.auth.currentUser.email)?
          <Card profile >
            <CardAvatar profile>
              <a href="" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile >
          <h4 className={classes.cardTitle}>Serial No:   {item.sno}</h4>
                  <p className={classes.description}>Child Name:   {item.cname}</p>
                  <p className={classes.description}>Age:   {item.age}</p>

                  
                <Link to="/parent/maps/${lat}/${long}" ><Button color="info">Track Child</Button></Link>
                 <Button color="danger" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) deleteDevice(item._key) } } >Remove Device</Button>
            </CardBody>
          </Card>
          :null))}
        </GridItem>
        </GridContainer>
    </div>
    </div>
    </div>
  );

 


}

        