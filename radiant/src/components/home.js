import React, { Fragment } from "react";
import { NavLink } from "reactstrap";
import radlogo from '../images/radlogo.png';

import "../style/App.css";

import HeroContainer from "../constants/HeroWell";
import Options from "../constants/TripOptions";
import Footer from "../constants/FooterLanding";

import Contact from "../constants/ContactForm";


const navbarLanding = props => {
  return (
    <Fragment>
      <nav
        className="navbar navbar-toggleable-md navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "rgb(13, 23, 49)", fontSize: "18px" }}
      >
        <div className="container">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#myNavbar"
            aria-controls="myNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <a className="navbar-brand mr-0 mr-md-4" href="/">
            <img src={radlogo} href="/" alt="radlogo" className="img-fluid" />
          </a>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item mr-4 active">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link" href="/">
                  Services
                </a>
              </li>
              <li className="nav-item ml-4">
                <a className="nav-link" href="/">
                  Contact
                </a>
              </li>
            </ul>
            <ul className="navbar-nav nav-right">
              <li className="nav-item mx-2">
                <a className="nav-link" href="/">
                  <span className="fas fa-sign-in-alt" />
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="/">
                  <span className="fas fa-users" />
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <HeroContainer />
      <Options />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default navbarLanding;

{/*clicked={this.stepOneHandler}*/ }