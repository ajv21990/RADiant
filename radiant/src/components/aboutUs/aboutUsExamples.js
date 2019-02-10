
import React, { Component } from "react";

class AboutUsExamples extends Component {
  render() {
    return (
      <div
        className="col-md-12"
        style={{
          textAlign: "center"
        }}
      >
        <h2>All of these services are already available in your city!</h2>
        <br />
        <div className="">
          <iframe
            width="auto"
            height="250"
            src="https://www.youtube.com/embed/j5UL-GMCF9k"
            frameBorder="10"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="col-md-4"
            title="title"
          />
          <iframe
            width="auto"
            height="250"
            src="https://www.youtube.com/embed/XqO_FkX6PlU"
            frameBorder="10"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="col-md-4"
            title="title"
          />
          <iframe
            width="auto"
            height="250"
            src="https://www.youtube.com/embed/VGsFEVZbmwI"
            frameBorder="10"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="col-md-4"
            title="title"
          />
        </div>
      </div>
    );
  }
}

export default AboutUsExamples;
