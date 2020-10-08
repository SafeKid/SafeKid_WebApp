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

export default function Contact() {
  const classes = useStyles();
  const [alertMessage, setAlertMessage] = useState(null)
  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [discription, setDiscription] = useState('')

  const handleUpdate = (e) => {
    e.preventDefault()
    setAlertMessage(null)
    if((discription=='')){
      setAlertMessage({
        type:'error',
        message:"Description shouldn't be empty"})
       return;
  
}else if((discription==null)){
  setAlertMessage({
    type:'error',
    message:"Description shouldn't be empty"})
  return;
  }else{
    
    db.ref('Questions')
   .push({
        user:auth.currentUser.email,
        date:new Date().toISOString().substring(0, 10),
        name:name,
        title:title,
        description:discription,
        respond:"",
      }
  ).then(() => {
  
    setAlertMessage({
      type:'success',
      message:'Message Sent Successfully'
  })
  setDiscription("")
  setName("")
  setTitle("")
  
  }).catch((error) => {
      console.log(error);
  });
}
}
  
   
  return (
    <div
    className="App"
    style={{
      backgroundImage: `url(${carfix})`,
    }}>
      <div className="Wrapper" style={{marginLeft:"200px"}}>
    <div>
      <GridContainer style={{paddingTop:"50px"}}>
        <GridItem xs={10} sm={8} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Need a Help?</h4>
              <p className={classes.cardCategoryWhite}>Contact Us</p>
            </CardHeader>
            <CardBody>
            <GridContainer>
                <GridItem xs={12} sm={12} md={15}>
                  <CustomInput
                    labelText="Name"
                    id="name"
                    value= {name}
                    onChange={e => setName(e.target.value)}
                    formControlProps={{
                      fullWidth: true,
                    
                     
                    }}
                    
                  
                  />
                  
                </GridItem>
              </GridContainer>
            
              <GridContainer>

                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Title"
                    id="title"
                    value= {title}
                    onChange={e => setTitle(e.target.value)}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>

              <GridContainer>

                <GridItem xs={12} sm={12} md={12}>
                  
                  <CustomInput
                    labelText="Discription"
                    id="discription"
                    value= {discription}
                    onChange={e => setDiscription(e.target.value)}
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5
                    }}
                  />
                </GridItem>
              </GridContainer>
     
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={handleUpdate}>Send</Button><br/>
              <br/>
            </CardFooter>
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