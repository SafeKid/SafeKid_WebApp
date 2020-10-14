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
import { db,auth,storage } from 'config/fire';
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


    const [imageAsFile, setImageAsFile] = useState('')
    const [imageAsUrl, setImageAsUrl] = useState(avatar)

    console.log(imageAsFile)

     const handleFireBaseUpload = e => {
      e.preventDefault()
    console.log('start of upload')
    // async magic goes here...
    if(imageAsFile === '') {
      console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
    }
    const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)
    //initiates the firebase side uploading 
    uploadTask.on('state_changed', 
    (snapShot) => {
      //takes a snap shot of the process as it is happening
      console.log(snapShot)
    }, (err) => {
      //catches the errors
      console.log(err)
    }, () => {
      // gets the functions from storage refences the image storage in firebase by the children
      // gets the download url then sets the image from firebase as the value for the imgUrl key:
      storage.ref('images').child(imageAsFile.name).getDownloadURL()
       .then(fireBaseUrl => {
         setImageAsUrl(prevObject => ({...prevObject, imageAsUrl: fireBaseUrl}))
         db.ref('Users/' + auth.currentUser.uid + '/images').set(fireBaseUrl);
       })
    })
    }


  
const handleUpdate = (e) => {
  e.preventDefault()

var mobexp =/07[1,2,5,6,7,8][0-9]+/;

  if(firstname==''||lastname==''||childage==''||mobno==''||childname==''){
    setAlertMessage({
      type: 'error',
      message: "fields shouldn't be empty"})
      return;
   }else if(isNaN(mobno)){
      
        setAlertMessage({
          type: 'error',
          message: "Invalid phone number"})
          return;

        }else if(mobno.length !=10){
      
          setAlertMessage({
            type: 'error',
            message: "Phone number should have 10 digits"})
            return;
          
          }else if(childage < 5){
      
            setAlertMessage({
              type: 'error',
              message: "Child age should be between 6-20"})
              return;
            }else if(childage > 21){
      
              setAlertMessage({
                type: 'error',
                message: "Child age should be between 6-20"})
                return;

              }else if(isNaN(childage)){
      
                setAlertMessage({
                  type: 'error',
                  message: "Enter a valid age"})
                  return;
        
    
   }else{

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
          }

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
        setImageAsUrl(user.images)
       
    }
    })

    
  }
   
  return (
    <div
    className="App"
    style={{
      backgroundImage: `url(${carfix})`,
    }}>
      <div className="Wrapper" style={{marginLeft:"100px"}}>
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
        <GridItem   xs={10} sm={10} md={4} >
        <div style={{ paddingLeft:"100px"}}>
          <Card profile >
            <CardAvatar profile>
            <label htmlFor="contained-image-file">
                <img src={imageAsUrl} alt={""} style={{cursor:"pointer"}}/>
              </label>
            </CardAvatar>

            <CardBody >

            <div style={{ padding:"20px"}} className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-image-file"
        type="file"
        onChange={e => setImageAsFile(e.target.files[0])}
      />
      
        <Button onClick={handleFireBaseUpload} color="primary" >
          Upload
        </Button>
     
    </div>
    
  
 
            </CardBody>
          </Card>
          </div>
        </GridItem>
      </GridContainer>
    </div>
    </div>
    {alertMessage &&
            <Alert type ={alertMessage.type} message={alertMessage.message} autoClose={5000}/>  }
    </div>
  );
  
}
