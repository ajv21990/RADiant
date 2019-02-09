import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./login";
import Register from "./register";
import LandingPage from "./landingPage";
import Rewards from "./rewards";
import Home from "./home";
import AboutUs from "./aboutUs/aboutUs";

const Navagation = () => (
    <Router>
        <div>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/landing" component={LandingPage} />
            <Route exact path="/rewards" component={Rewards} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/aboutUs" component={AboutUs} />
        </div>
    </Router>
);
export default Navagation;
