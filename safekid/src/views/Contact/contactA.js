import React, { useState } from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import {Link, Redirect, withRouter} from 'react-router-dom';
import InputLabel from "@material-ui/core/InputLabel";
import DeleteIcon from '@material-ui/icons/Delete';
// core components
import GridItem from "components/Grid/GridItem.js";
import IconButton from '@material-ui/core/IconButton';
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
import TablePagination from '@material-ui/core/TablePagination';

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
  const [rows,setRows] =React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);

  
 const handleChangePage = (event, newPage) => {
  setPage(newPage);
};

const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(parseInt(event.target.value, 10));
  setPage(0);
};

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

React.useEffect(() => { fetchData()},[])



 function fetchData(){
   
  db.ref('Questions').on('value',(snapshot) => {
    console.log(snapshot.val());
    let rows=[];
    if(snapshot.exists()){
      snapshot.forEach((reportData) => {
        let report = reportData.val();
        report.key=reportData.key
       
        rows.push(report);

        setRows([]);
        setRows(rows);
        
       ;
      })
    }
    })
    
  }

  const deleteMsg = (val)=>{
    db.ref('/Questions').child(val).remove()
    setAlertMessage({
      type: 'error',
      message: "Your message has been deleted!"})
      return;
  }


   
  return (
    <div
    className="App"
    style={{
      backgroundImage: `url(${carfix})`,
    }}>
      <div className="Wrapper" style={{margin:"50px"}}>
    <div>
      <GridContainer style={{paddingTop:"50px"}}>
      
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Need a Help?</h4>
              <p className={classes.cardCategoryWhite}>Contact Us</p>
            </CardHeader>
            <CardBody>
            
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

            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={handleUpdate}>Send</Button><br/>
             
            </CardFooter>
          </Card>
        </GridItem>
        
        <GridItem   xs={10} sm={10} md={6} >
       
          <Card style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Response</h4>
          </CardHeader>
          <CardBody style={{marginLeft:"10px"}}>

  <div>
  <GridItem xs={10} sm={10} md={12}>
      {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((rows,key)=>((rows.user==auth.currentUser.email)?
           
                <div className="card-text" style={{padding:"20px" }} className="card" variant="outlined">
                <p>Question:&emsp; {rows.description }</p>
                <p>Answer:&emsp; {rows.respond}</p>
                <IconButton aria-label="delete" style={{ marginLeft: "350px"}} onClick={() => { if (window.confirm('Are you sure you wish to delete this message?')) deleteMsg(rows.key) } }>
                  <DeleteIcon />
                </IconButton>

                </div>
              
           :null))}
   

    <TablePagination

      component="div"
      rowsPerPageOptions={[3, 6, 9]}
      count={4}
      page={page}
      onChangePage={handleChangePage}
      rowsPerPage={rowsPerPage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />
    
</GridItem>

    </div> </CardBody>
  <br/>
 
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