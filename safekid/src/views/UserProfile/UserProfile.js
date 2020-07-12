import React, { useState } from 'react';
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
import carfix from "assets/img/cp.png";
import avatar from "assets/img/faces/marc.jpg";
import { db,auth } from 'config/fire';
import Alert from "components/alert";

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
  },

  root: {
    '& > *': {
      margin: 1,
    },
  },
  input: {
    display: 'none',
  },
};

const useStyles = makeStyles(styles);


export default function UserProfile() {
  const classes = useStyles();

 
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [mobno, setMobno] = useState('')
  const [childname, setChildname] = useState('')
  const [childage, setChildage] = useState('')
  const [alertMessage, setAlertMessage] = useState(null)

  
const handleUpdate = (e) => {
  e.preventDefault()

  try {
     setAlertMessage(null)
  db.ref('Users/' + auth.currentUser.uid)
.update({
        firstname:firstname,
        lastname:lastname,
       // email:email,
        mobno:mobno,
        childname:childname,
        childage:childage,

       })
       setAlertMessage({
        type:'success',
        message:"updated successfully"
    })

      }catch(error) {
                   // alert(error.message)
                setAlertMessage({
                    type:'error',
                    message:"couldn't update"
                })
            }}

 React.useEffect(() => { fetchData()},[])

 function fetchData(){
  db.ref('Users/' + auth.currentUser.uid).on('value',(snapshot) => {
    let rows=[];
    if(snapshot.exists()){
      
        let user = snapshot.val();
        user.uid = snapshot.key;

        setFirstName(user.firstname);
        setLastName(user.lastname);
        setEmail(user.email);
        setMobno(user.mobno);
        setChildname(user.childname);
        setChildage(user.childage);
       
    }
    })
  }
   
  return (
    <div
    className="App"
    style={{
      backgroundImage: `url(${carfix})`,
    }}>
      <div className="Wrapper" style={{marginLeft:"50px"}}>
    <div>
      <GridContainer style={{paddingTop:"50px"}}>
        <GridItem xs={10} sm={10} md={6}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
              <p className={classes.cardCategoryWhite}>Complete your profile</p>
            </CardHeader>
            <CardBody>
           
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="First Name"
                    id="firstname"
                    value= {firstname}
                    onChange={e => setFirstName(e.target.value)}
                    formControlProps={{
                      fullWidth: true,
                    
                     
                    }}
                    
                  
                  />
                  
                </GridItem>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Last Name"
                    id="lastname"
                    value= {lastname}
                    onChange={e => setLastName(e.target.value)}
                    formControlProps={{
                      fullWidth: true
                    }}
                    
                  />
                </GridItem>
              </GridContainer>
            
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Email Address"
                    id="email"
                    type="email"
                    value= {email}
                   // onChange={e => setEmail(e.target.value)}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Phone Number"
                    id="pno"
                    value= {mobno}
                    onChange={e => setMobno(e.target.value)}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Child Name"
                    id="childname"
                    value= {childname}
                    onChange={e => setChildname(e.target.value)}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Child Age"
                    id="childage"
                    value= {childage}
                    onChange={e => setChildage(e.target.value)}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
     
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={handleUpdate}>Update Profile</Button><br/>
              <br/>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem   xs={10} sm={10} md={3} >
          <Card profile >
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody>
            
            
            <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Choose
        </Button>
      </label>
    </div>
  
 
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
    </div>
    {alertMessage &&
            <Alert type ={alertMessage.type} message={alertMessage.message} autoClose={5000}/>  }
    </div>
  );
  
}
