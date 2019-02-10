import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./login";
import Register from "./register";
import BikeLandingPage from "./landingPage";
import NavbarLanding from "./home";
import AboutUs from "./aboutUs/aboutUs";
import ScooterLandingPage from "./scooterLandingPage";
import Carpage from './carLand'
import WhatsNext from './whatsNext'
import Services from "./services";

const Navagation = () => (
  <Router>
    <div>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/bikes" component={BikeLandingPage} />
      <Route exact path="/home" component={NavbarLanding} />
      <Route exact path="/aboutUs" component={AboutUs} />
      <Route exact path="/scooters" component={ScooterLandingPage} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/cars" component={Carpage} />
      <Route exact path="/next" component={WhatsNext} />


    </div>
  </Router>
);
export default Navagation;
