<<<<<<< HEAD
import React from "react";
import { NavLink } from "reactstrap";

export default class Home extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <h1>Cooper's home page</h1>
        <button className=" btn btn-light ml-2 mt-3">
          <NavLink href="/landing/">Landing Page</NavLink>
        </button>
        <button className=" btn btn-light ml-2 mt-3">
          <NavLink href="/aboutUs/">About Us</NavLink>
        </button>
      </div>
    );
  }
}
=======
import React from "react";
import { NavLink } from "reactstrap";
import NavBar from "./navBar";

export default class Home extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <NavBar />
        <h1>Cooper's home page</h1>
        <button className=" btn btn-light ml-2 mt-3">
          <NavLink href="/landing/">Landing Page</NavLink>
        </button>
        <button className=" btn btn-light ml-2 mt-3">
          <NavLink href="/aboutUs/">About Us</NavLink>
        </button>
      </div>
    );
  }
}
>>>>>>> origin/master
