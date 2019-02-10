import React, { Fragment } from "react";

const contact = props => {
    return (
        <Fragment>
            <div
                className="container-fluid"
                style={{ padding: "20px", fontWeight: "700" }}
            >
                <div className="col-md-6 offset-md-3">
                    <div
                        className="card m-auto"
                        style={{ boxShadow: "0 4px 15px 0 rgba(0, 0, 0, 0.2)" }}
                    >
                        <div className="card-header text-center">Contact Us</div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        className="form-control bg-light"
                                        id="name"
                                        placeholder="Enter name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        className="form-control bg-light"
                                        id="email"
                                        placeholder="Enter email address"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        type="text"
                                        className="form-control bg-light"
                                        id="message"
                                        placeholder="Enter message"
                                        rows="3"
                                    />
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        className="btn btn-block btn-lg btn-outline-primary"
                                    >
                                        send
                  </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default contact;
