import React from "react";
import TextInput from "../constants/textInput";
import "../style/login.css";
import { NavLink } from "reactstrap";
import lbc from '../images/lbc.jpg';
import radlogo from '../images/radlogo.png';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleChange = evt => {
    const key = evt.target.name;
    const val = evt.target.value;
    this.setState({
      [key]: val
    });
  };
  goToRegister = () => {
    this.props.history.push("/register");
  };

  render() {
    return (
      <div className="container-fluid p-0" id="background_login">
        <br />
        <div className="row">
          <div className="col-md-4 my-5 d-flex justify-contents-center logoDiv">
            <img className="img-fluid m-auto" width="450px" src={radlogo} alt="RADiant" />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-4 formDiv">
            <form className="border rounded m-auto login_container registration">
              <h1 className="mb-4 login_title">Login</h1>
              <hr />
              <TextInput
                label="Email"
                id="email"
                type="email"
                val={this.state.email}
                handleChange={this.handleChange}
                placeholder="Enter email address"
              />
              <TextInput
                label="Password"
                id="password"
                type="password"
                val={this.state.password}
                handleChange={this.handleChange}
                placeholder="Enter password"
              />
              <div className="row">
                <button className="btn btn-sm m-2 btn-primary btn-block">
                  <NavLink className="text-warning" href="/home/"><strong>Login</strong></NavLink>
                </button>
                <button className="btn btn-sm m-2 btn-primary btn-block">
                  <NavLink className="text-warning" href="/register/"><strong>Sign up</strong></NavLink>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    );
  }
}
