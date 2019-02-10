import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./login";
import Register from "./register";
import BikeLandingPage from "./landingPage";
import Rewards from "./rewards";
import Home from "./home";
import AboutUs from "./aboutUs/aboutUs";
import ScooterLandingPage from "./scooterLandingPage";
import Carpage from './carLand'

const Navagation = () => (
  <Router>
    <div>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/bikes" component={BikeLandingPage} />
      <Route exact path="/rewards" component={Rewards} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/aboutUs" component={AboutUs} />
      <Route exact path="/scooters" component={ScooterLandingPage} />
      <Route exact path="/cars" component={Carpage} />

    </div>
  </Router>
);
export default Navagation;
