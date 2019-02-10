import React from "react";
import "../style/header.css";
import { Link } from "react-router-dom";
import logo from "../images/LBC_Logo.png";
import lime from "../images/lime.png";
import bird from "../images/bird-logo.png";
import Uber from "../images/Uber.png";
import Lyft from "../images/Lyft.png";
import { defaultProps } from "recompose";

const LandingPage = props => (
  <div className="header col-md-12">
    <div className="row">
      <div className="col-md-3">
        <Link to="/landing">
          <img src={logo} alt="Long Beach" className="logo" />
        </Link>
      </div>
      <div className="col-md-5 test">
        <p>Connect to people and places that matter most</p>
      </div>
    </div>
  </div>
);

export default LandingPage;
