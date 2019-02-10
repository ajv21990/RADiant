import React, { Component } from "react";
import "./aboutUs.css";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";

class AboutUsCard extends Component {
  render() {
    return (
      <div className="aboutUs-information-card">
        <Card>
          <CardHeader />
          <CardBody>
            <CardTitle>
              <h2>RADiant</h2>
            </CardTitle>
            <CardText>
              -Connect to people and places that matter most-
              <br />
              -Strengthen the community through urban transportation-
              <br />
              -Strengthen the community through urban transportation-
            </CardText>
          </CardBody>
          <CardFooter />
        </Card>
      </div>
    );
  }
}

export default AboutUsCard;
