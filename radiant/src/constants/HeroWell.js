import React, { Fragment } from "react";

// import shareImg1 from '../../../assets/carshare.jpg';
// import shareImg2 from '../../../assets/carshare2.jpg';

const heroContent = props => {
  return (
    <Fragment>
      <div className="parallax">
        <div id="overlay">
          <div id="text" className="row">
            <div className="mr-5">
              <span>
                Sharing today, <br />
                for a brighter tomorrow
              </span>
            </div>
          </div>
          <div id="enterIcon" className="ml-5">
            <a href="/" alt="enter here">
              <br />
              <span className="fas fa-map-marker-alt fa-lg bounce" />
            </a>
          </div>
        </div>
      </div>

      {/*<div className="jumbotron jumbotron-fluid bg-white p-0">
        <div className="container p-0">
          <div className="p-0">
            <img className="img-fluid" src={shareImg2} href="/" alt="heroImg" width="1100px" />
          </div>
        </div>
      </div>*/}
    </Fragment>
  );
};

export default heroContent;
