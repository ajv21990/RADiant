import React, { Component } from "react";
import NavBar from "./navBar";
import lime from "../images/lime.png";
import bird from "../images/bird-logo.png";
import loop from "../images/loop.png";
import spin from "../images/spin.png";
import skip from "../images/skip.png";
import metroBikeShare from "../images/metroBikeShare.png";
import lbBikeShare from "../images/longBeachBikeShare.png";
import limeBikes from "../images/limeBike.png";
import breeze from "../images/breeze.png";
import sobi from "../images/sobi.png";
import turo from "../images/turo.png";
import envoy from "../images/envoy.png";
import getAround from "../images/getaround.png";
import uber from "../images/Uber.png";
import lyft from "../images/Lyft.png";
import waive from "../images/waive.png";

import "../style/services.css";

class Services extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="col-md-12 mt-3" style={{ textAlign: "center" }}>
          <h1>Services Available To You</h1>
        </div>
        <div className="grid-container">
          <div className="item2">
            <figure>
              <a href="https://www.li.me/ " target="_blank">
                <img src={lime} alt="Lime" width="200px" height="auto" />
                <figcaption>Lime (Scooters)</figcaption>
              </a>
            </figure>
          </div>
          <div className="item3">
            <figure>
              <a href="https://www.bird.co/ " target="_blank">
                <img src={bird} alt="bird" width="200px" height="auto" />
                <figcaption>Bird</figcaption>
              </a>
            </figure>
          </div>
          <div className="item2">
            <figure>
              <a href="http://loopscooters.com/  " target="_blank">
                <img src={loop} alt="loop" width="200px" height="auto" />
                <figcaption>Loop</figcaption>
              </a>
            </figure>
          </div>
          <div className="item3">
            <figure>
              <a href="https://www.spin.app/ " target="_blank">
                <img src={spin} alt="spin" width="200px" height="auto" />
                <figcaption>Spin</figcaption>
              </a>
            </figure>
          </div>
          <div className="item4">
            <figure>
              <a href="https://skipscooters.com/ " target="_blank">
                <img src={skip} alt="skip" width="200px" height="auto" />
                <figcaption>skip</figcaption>
              </a>
            </figure>
          </div>
          <div className="item5">
            <figure>
              <a href="https://bikeshare.metro.net/ " target="_blank">
                <img
                  src={metroBikeShare}
                  alt="Metro Bike Share"
                  width="200px"
                  height="auto"
                />
                <figcaption>Metro Bike Share</figcaption>
              </a>
            </figure>
          </div>
          <div className="item6">
            <figure>
              <a href="https://www.longbeachbikeshare.com/ " target="_blank">
                <img
                  src={lbBikeShare}
                  alt="Long Beach Bike Share"
                  width="200px"
                  height="auto"
                />
                <figcaption>Long Beach Bike Share</figcaption>
              </a>
            </figure>
          </div>
          <div className="item7">
            <figure>
              <a href="https://www.li.me/ " target="_blank">
                <img
                  src={limeBikes}
                  alt="Lime Bikes"
                  width="200px"
                  height="auto"
                />
                <figcaption>Lime (Bikes)</figcaption>
              </a>
            </figure>
          </div>
          <div className="item2">
            <figure>
              <a href="https://santamonicabikeshare.com/ " target="_blank">
                <img src={breeze} alt="Breeze" width="200px" height="auto" />
                <figcaption>Breeze</figcaption>
              </a>
            </figure>
          </div>
          <div className="item3">
            <figure>
              <a
                href="https://help.socialbicycles.com/hc/en-us "
                target="_blank"
              >
                <img src={sobi} alt="Sobi" width="200px" height="auto" />
                <figcaption>Sobi</figcaption>
              </a>
            </figure>
          </div>
          <div className="item2">
            <figure>
              <a href="https://www.uber.com/  " target="_blank">
                <img src={uber} alt="uber" width="200px" height="auto" />
                <figcaption>Uber</figcaption>
              </a>
            </figure>
          </div>
          <div className="item3">
            <figure>
              <a href="https://www.lyft.com/ " target="_blank">
                <img src={lyft} alt="lyft" width="200px" height="auto" />
                <figcaption>Lyft</figcaption>
              </a>
            </figure>
          </div>
          <div className="item2">
            <figure>
              <a href="https://turo.com/ " target="_blank">
                <img src={turo} alt="Turo" width="200px" height="auto" />
                <figcaption>Turo</figcaption>
              </a>
            </figure>
          </div>
          <div className="item3">
            <figure>
              <a href="https://www.getaround.com/ " target="_blank">
                <img
                  src={getAround}
                  alt="Get Around"
                  width="200px"
                  height="auto"
                />
                <figcaption>Get Around</figcaption>
              </a>
            </figure>
          </div>
          <div className="item2">
            <figure>
              <a href="https://www.envoythere.com/ " target="_blank">
                <img
                  src={envoy}
                  alt="Envoy On Demand"
                  width="200px"
                  height="auto"
                />
                <figcaption>Envoy On Demand</figcaption>
              </a>
            </figure>
          </div>
          <div className="item3">
            <figure>
              <a href="https://www.waivecar.com/  " target="_blank">
                <img src={waive} alt="Waive" width="200px" height="auto" />
                <figcaption>Waive</figcaption>
              </a>
            </figure>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
