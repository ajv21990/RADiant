import React from "react";
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs
} from "react-google-maps";

class GoogleMapsScooter extends React.Component {
  render() {
    const { lat, lng, defaultCenter } = this.props;
    return (
      <GoogleMap {...this.props} defaultCenter={defaultCenter} defaultZoom={12}>
        {this.props.isScooterMarkerShown && (
          <Marker position={{ lat: lat, lng: lng }} />
        )}


        {this.props.ScooterMarker.map((marker, index) => (
          <Marker
            key={index}
            position={{ lat: parseFloat(marker[1]), lng: parseFloat(marker[0]) }}
            onClick={this.props.onToggleOpen}

          >
          </Marker>
        ))}
      </GoogleMap>
    );
  }
}

export default withScriptjs(withGoogleMap(GoogleMapsScooter));
