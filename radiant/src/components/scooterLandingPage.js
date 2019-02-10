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
    scooterMarker: [],
    isOpen: false,
    openInfoWindowMarkerId: ''
  };
  componentDidMount = () => {
    this.startLocation();
    this.getAllScooterLocations()


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

    let arraycoord = []

    for (let i = 0; i < resp.data.birds.length; i++) {
      arraycoord = [resp.data.birds[i].location.longitude, resp.data.birds[i].location.latitude]
      this.state.scooterMarker.push(arraycoord);
    }

    console.log("scooter markers state", this.state.scooterMarker);
    this.setState({ mapLocation: this.state });

  };
  handleToggleClose = () => {
    this.setState({
      isOpen: false
    });
  }
  handleToggleOpen = () => {

    this.setState({
      isOpen: true
    });
  }

  render() {
    const { mapLocation } = this.state;
    return (
      <div>
        <NavBar />
        <Header handleClickScooters={this.getAllScooterLocations} />

        <GoogleMapsScooter
          isScooterMarkerShown
          defaultCenter={mapLocation}
          lat={mapLocation.lat}
          lng={mapLocation.lng}
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD0gxlfY7tCOD6kh-k_wyJzV9XzpTursao"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `700px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          ScooterMarker={this.state.scooterMarker}
          isOpen={this.state.isOpen}
          onCloseClick={this.handleToggleClose}
          onClick={this.handleToggleOpen}
        />
      </div>
    );
  }
}
