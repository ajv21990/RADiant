import React, { Fragment } from "react";

import option1 from "../images/eVectorScooter.png";
import option2 from "../images/roadBike.jpg";
import option3 from "../images/automobile.jpg";
import lyftBtn from "../images/lyftButton.png";
import uberBtn from "../images/uberButton.png";
import driveBtn from "../images/driveButton.png";
import junoBtn from "../images/junoButton.png";

const choiceList = [
    {
        name: "scooter",
        options: [
            {
                company: "Lime",
                icon: ""
            },
            {
                company: "Bird",
                icon: ""
            }
        ]
    },
    {
        name: "bicycle",
        options: [
            {
                company: "Coast",
                icon: ""
            }
        ]
    },
    {
        name: "car",
        options: [
            {
                company: "Lyft",
                icon: lyftBtn
            },
            {
                company: "Uber",
                icon: uberBtn
            },
            {
                company: "Drive",
                icon: driveBtn
            }
        ]
    }
];

const testUser = {
    stepOne: "car",
    stepTwo: ""
};

const options = props => {
    let choices;

    if (props.selected) {
        choices = choiceList.map(el => {
            console.log(el);
            if (el.options.length > 0) {
                if (el.name === testUser.stepOne) {
                    console.log("inside comp check", el.options.company)
                    return (
                        <div className="card bg-default">
                            <img
                                className="img-fluid"
                                src={el.options.icon}
                                href="/"
                                alt={el.options.company}
                            />
                        </div>
                    );
                } else {
                    return null;
                }
            }
            return (
                <h3>
                    There are no choices for this selection.
          <br />
                    Please choose a different selection
        </h3>
            );
        });
    }

    return (
        <Fragment>
            <div id="tripOpt" className="container text-center">
                <br />
                <h4>Select your trip size below</h4>
                <br />
                <div className="row">
                    <div className="col-sm-4">
                        <p>Short</p>
                        <img
                            src={option1}
                            className="img-responsive"
                            style={{ width: "90%" }}
                            alt="defImg"
                        />
                    </div>
                    <div className="col-sm-4 d-flex flex-column justify-content-between">
                        <p>Medium</p>
                        <img
                            src={option2}
                            className="img-responsive align-self-center"
                            style={{ width: "90%" }}
                            alt="defImg"
                        />
                    </div>
                    <div className="col-sm-4 d-flex flex-column justify-content-between">
                        <p>Long</p>
                        <a onClick={props.clicked}>
                            <img
                                src={option3}
                                className="img-responsive align-self-center"
                                style={{ width: "90%" }}
                                alt="defImg"
                            />
                        </a>
                    </div>
                </div>
                <br />

                <div className="row justify-content-center">
                    <div className="card-deck">
                        {/*choices*/}



                        <div className="card bg-default">
                            <img className="img-fluid" src={lyftBtn} href="/" alt="lyft" />
                        </div>

                        <div className="card bg-default">
                            <img className="img-fluid" src={uberBtn} href="/" alt="lyft" />
                        </div>

                        <div className="card bg-default">
                            <img className="img-fluid" src={driveBtn} href="/" alt="lyft" />
                        </div>

                        <div className="card bg-default">
                            <img className="img-fluid" src={junoBtn} href="/" alt="lyft" />
                        </div>


                        {/*}
            <div className="card bg-light">
              <div className="card-header">
                <p>Header</p>
                <div className="card-body">
                  <p>Company 2</p>
                </div>
              </div>
            </div>

            <div className="card bg-light">
              <div className="card-header">
                <p>Header</p>
                <div className="card-body">
                  <p>Company 3</p>
                </div>
              </div>
            </div>
            */}
                    </div>
                </div>
            </div>
            <br />
        </Fragment>
    );
};

export default options;
