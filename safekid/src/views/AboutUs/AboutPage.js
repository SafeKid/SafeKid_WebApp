import React from "react";
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

export default function UserProfile() {
  const classes = useStyles();
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
                <h1 className={classes.cardTitleWhite}>Safe Kid</h1>
                <p className={classes.cardCategoryWhite}>Making the world safer place to your child</p>
                </CardHeader>
                <CardBody>
                <h4>Why SafeKid?</h4>
                <p> While the whole world is fighting against Covid-19, we can see that a huge increment of child abuse is happening around the world. In this situation, child protection has become a very critical topic. Sri Lanka also has a higher rate of child abuse and maltreatment. 
                Worldwide, approximately 40 million children are subjected to child abuse each year (WHO, 20014).Sexual abuse statistics vary between countries and reports but are consistently alarming: One country's research indicates that up to 36% of girls and 29% of boys have suffered child sexual abuse; another study reveals up to 46% of girls and 20% of boys have experienced sexual coercion (The 57th session of the UN Commission on Human Rights10)
                In India, between 2001 and 2011, the ”Asian Center for Human Rights” reported a total of 48.338 cases of the rape of minors, with an increase of 336%: from 2,113 cases in 2001 to 7,112 cases in 2011.
                So, to keep your child safe is very important task. </p>
                <p>Our soulution for this problem is SafeKid device</p>
                </CardBody>
            </Card>
        </GridItem>
      </GridContainer>

      <GridContainer style={{paddingTop:"50px"}}>
        <GridItem xs={10} sm={10} md={6}>
        <Card>
            <CardBody>
                <h4>Device Details</h4>
            </CardBody>
            </Card>
        </GridItem>
      </GridContainer>
    </div>
    </div>
    </div>
  );
}
