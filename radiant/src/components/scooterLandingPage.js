import React from "react";
import GoogleMapsScooter from "./googleMapsScooter";
import Header from "../constants/header";
import ScooterApi from "../Axios/scooterApi";
import NavBar from "./navBar";

export default class ScooterLandingPage extends React.Component {
  state = {
    mapLocation: {
      lat: 33.783022,
      lng: -118.112858
    },
    labels: "label",
    scooterMarker: []
  };
  componentDidMount = () => {
    this.startLocation();
  };

  startLocation = () => {
    navigator.geolocation.getCurrentPosition(this.success, this.error);
  };
  success = pos => {
    let crd = pos.coords;
    let latitude = crd.latitude;
    let longitude = crd.longitude;
    console.log(pos);
    this.setState({
      ...this.state.mapLocation,
      lat: latitude,
      lng: longitude
    });
    this.setState({ mapLocation: this.state });
    this.setState({ mapLocation: this.state });
  };
  error = err => console.warn(`ERROR(${err.code}): ${err.message}`);

  getAllScooterLocations = () => {
    ScooterApi.GetAllScooterLocations(
      this.onGetScooterSuccess,
      this.onGetScooterError
    );
  };

  onGetScooterError = resp => {
    console.log("Failed to get", resp);
  };

  onGetScooterSuccess = resp => {
    console.log("Success Get scooters", resp);

    for (let i = 0; i < resp.data.birds.length; i++) {
      this.state.scooterMarker.push(resp.data.birds[i].location);
    }

    console.log("scooter markers state", this.state.scooterMarker);
  };

  render() {
    const { mapLocation } = this.state;
    return (
      <div>
        <NavBar />
        <Header handleClickScooters={this.getAllScooterLocations} />

        <GoogleMapsScooter
          isMarkerShown
          isScooterMarkerShown
          defaultCenter={mapLocation}
          lat={mapLocation.lat}
          lng={mapLocation.lng}
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD0gxlfY7tCOD6kh-k_wyJzV9XzpTursao"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `700px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          markers={this.state.markers}
          MarkerLabel={this.state.labels}
        />
      </div>
    );
  }
}
