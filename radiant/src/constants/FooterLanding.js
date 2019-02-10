import React, { Fragment } from "react";

const footer = props => {
    return (
        <Fragment>
            <nav
                id="footer"
                className="navbar navbar-expand-sm navbar-dark bg-secondary text-light py-4 text-center"
            >
                <div className="col-md-4 p-2">
                    <p className="nav-text far fa-copyright"> 2019 RADiant LLC</p>
                </div>
                <div className="col-md-4 py-sm-4 p-2">
                    <span className="p-2 fab fa-twitter" />
                    <span className="p-2 fab fa-facebook-square" />
                    <span className="p-2 fab fa-instagram" />
                </div>
                <div className="col-md-4 p-2">
                    <ul className="navbar-nav justify-content-between">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">
                                Home
              </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                About
              </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                Services
              </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                Contact
              </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    );
};

export default footer;
