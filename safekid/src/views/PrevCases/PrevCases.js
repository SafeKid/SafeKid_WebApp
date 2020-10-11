import React, { useEffect } from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
import CustomInput from "components/CustomInput/CustomInput.js";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import {Link} from 'react-router-dom'
import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Search from "@material-ui/icons/Search";
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
import TablePagination from '@material-ui/core/TablePagination';

 
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




const [allRows, setAllRows] = React.useState([]); 
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

 React.useEffect(() => { fetchData()},[])



 function fetchData(){
   
  db.ref('Previous_Cases').orderByKey().on('value',(snapshot) => {
    console.log(snapshot.val());
    let rows=[];
    if(snapshot.exists()){
      snapshot.forEach((reportData) => {
        let report = reportData.val();
       
        rows.push(report);

        setRows([]);
        setRows(rows);
        setAllRows(rows);
      })
    }
    })
    
  }

  const searchData = (value) => {
    const filteredData = allRows.filter(rows => {
      const searchTerm = ` ${rows.location}`;
      const searchValue = value.toUpperCase();
      return searchTerm.toUpperCase().indexOf(searchValue) > -1;
    })
    setRows(filteredData);
  }
  return (
    <div
    className="App"
    style={{
      backgroundImage: `url(${carfix})`, 
      
    }}>
      <div className="Wrapper"  style={{marginLeft:"150px"}}>
        
      <div style={{paddingLeft:"670px"}} className={classes.searchWrapper} id="Search">
        <CustomInput
          formControlProps={{
            className: classes.margin + " " + classes.search
          }}
          inputProps={{
            placeholder: "Enter a Location",
            onChange: (e) => searchData(e.target.value)
          }}
        />
        <Button color="white" aria-label="edit" justIcon round>
          <Search />
        </Button></div>
    <div>
    <GridContainer>
      <GridItem xs={9} sm={9} md={9}>
        <Card style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>News Feed</h4>
          </CardHeader>
          <CardBody style={{marginLeft:"10px"}}>

  <div>
  <GridItem xs={10} sm={10} md={12}>
      {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(rows =><div key={rows.key} className="card" variant="outlined">
             
                <div className="card-text" style={{padding:"20px" }}>
                <p>Date:&emsp; { rows.date }</p>
                <p>Location:&emsp; { rows.location}</p>
                <p>Case:&emsp; { rows.case1}</p>
                </div>
          
            </div>
           
            )}

<TablePagination
      component="div"
      rowsPerPageOptions={[3, 6, 9]}
      count={rows.length}
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
    </div>
  );
}