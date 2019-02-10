import React from "react";
import TextInput from "../constants/textInput";
import "../style/login.css";
import { NavLink } from "reactstrap";
import radlogo from '../images/radlogo.png';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleChange = evt => {
    const key = evt.target.name;
    const val = evt.target.value;
    this.setState({
      [key]: val
    });
  };

  render() {
    return (
      <div className="container-fluid p-0" id="background_login">
        <div className="row">
          <div className="col-md-4 d-flex justify-contents-center logoDiv">
            <img className="img-fluid m-auto" width="450px" src={radlogo} alt="RADiant" />
          </div>
        </div>
        <div>
          <div className="col-md-4 border rounded mx-auto mb-5 login_container registration">
            <h1 className="mb-4 login_title">Register</h1>
            <hr />
            <TextInput
              label="First Name"
              id="firstName"
              type="text"
              val={this.state.firstName}
              placeholder="Enter first name"
              handleChange={this.handleChange}
            />
            <TextInput
              label="Last Name"
              id="lastName"
              type="text"
              val={this.state.lastName}
              placeholder="Enter last name"
              handleChange={this.handleChange}
            />
            <TextInput
              label="Email"
              id="email"
              type="email"
              val={this.state.email}
              placeholder="Enter email address"
              handleChange={this.handleChange}
            />
            <TextInput
              label="Password"
              id="password"
              type="password"
              val={this.state.password}
              placeholder="Enter password"
              handleChange={this.handleChange}
            />
            <TextInput
              label="Confirm Password"
              id="confirmPassword"
              type="password"
              val={this.state.confirmPass}
              placeholder="Re-enter password"
              handleChange={this.handleChange}
            />
            <div className="row">
              <button className="btn btn-sm m-2 btn-primary btn-block">
                <NavLink className="text-warning" href="/home/"><strong>Register</strong></NavLink>
              </button>
              <button className="btn btn-sm m-2 btn-primary btn-block">
                <NavLink className="text-warning" href="/"><strong>Cancel</strong></NavLink>
              </button>
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}
