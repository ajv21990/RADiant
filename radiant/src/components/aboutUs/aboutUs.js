import React, { Component } from "react";
import "./aboutUs.css";
import AboutUsCarousel from "./aboutUsCarousel";
import AboutUsExamples from "./aboutUsExamples";
import NavBar from "../navBar";
import AboutUsCard from "./aboutUsCard";

class AboutUs extends Component {
  render() {
    return (
      <div className="background-aboutUs">
        <NavBar />
        <div className="aboutUs">
          <div className="aboutUs-card offset-5 col-md-2 mt-3 mb-3">
            <h1>About Us</h1>
          </div>
          <div>
            <h5 className="aboutUs-mission col-md-10 offset-1 mb-4">
              <p className="col-md-10 offset-1">
                Through the equitable distribution of shared scooters, bikes,
                cars, and other transit vehicles, Radiant aims to reduce
                dependence on personal automobiles for transportation and leave
                future generations with a cleaner, healthier planet by bringing
                awarness to industry leading companies who are providing these
                revolutionary, sharing services
              </p>
            </h5>
          </div>
          <div className="row">
            <div className="col-md-5 ml-3">
              <AboutUsCarousel />
            </div>
            <div className="col-md-5 ml-3">
              <AboutUsCard />
            </div>
          </div>
          <div
            className="col-md-12"
            style={{
              textAlign: "center"
            }}
          >
            <h2>
              RADiant exists to bring any ride sharing vehicle closer to your
              fingertips
            </h2>
            <br />
            <br />
          </div>
          <div
            className="col-md-12"
            style={{
              textAlign: "center"
            }}
          >
            <h3>
              Whether you're going down the street or across the city, there are
              plenty of ways to get around without having to own anything!
            </h3>
          </div>
          <br />
          <br />
          <br />
          <div>
            <AboutUsExamples />
          </div>
          <br />
          <br />
          <div className="col-md-10 offset-1">
            <h4 className="aboutUs-information">
              RADiant is an application which strives to bring about a much
              needed awareness to the possibilities surrounding creative ways of
              public transportation in order to decrease congestion and reduce
              pollution. We are in no way suggesting that users need to get rid
              of their cars though as they have proven to be very beneficial.
              <br />
              <br />
              {/* In fact, according to a 2018 study for the average American (who
              drives around 13,000 miles per year), owning a motor vehicle will
              cost them $12,744 per year to maintain, and the cost of taking
              UberX everywhere will cost them $18,115 per year. However,
              Americans who drive less than 9,481 miles in a year should
              seriously consider the cost of their car, because UberX would be
              less expensive.
              <br />
              <br />
              Uber tends to be somewhat costly and is a good alternative to
              driving, however even more options exist within the city at this
              time to travel within a wide variety of distances. */}
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
