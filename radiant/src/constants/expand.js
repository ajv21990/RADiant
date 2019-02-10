import React from "react";
import NYC from "../images/NYC.jpg";
import SF from "../images/SF.jpg";
import Austin from "../images/Austin.jpg";
import SEA from "../images/SEA.jpg";

const Expand = props => (
  <div style={{ backgroundColor: "#C9E9F5", color: "#3E6A97" }}>
    <h1
      style={{ textAlign: "center", fontFamily: "Arbutus Slab, serif" }}
      className="mb-3"
    >
      Expansion
    </h1>
    <div className="">
      <img
        alt="NYC"
        src={NYC}
        style={{ height: "500px", width: "800px", paddingLeft: "20px" }}
      />
      <img
        alt="SF"
        src={SF}
        style={{ height: "500px", width: "800px", paddingLeft: "20px" }}
      />
    </div>
    <div className=" mt-3">
      <img
        alt="SEA"
        src={SEA}
        style={{ height: "500px", width: "800px", paddingLeft: "20px" }}
      />
      <img
        alt="Austin"
        src={Austin}
        style={{ height: "500px", width: "800px", paddingLeft: "20px" }}
      />
    </div>
  </div>
);

export default Expand;
