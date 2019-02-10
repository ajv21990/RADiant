import React from "react";
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs
} from "react-google-maps";
import { MarkerClusterer } from "react-google-maps/lib/components/addons/MarkerClusterer";

class GoogleMapsScooter extends React.Component {
  render() {
    const { lat, lng, defaultCenter } = this.props;
    // console.log("defaultCenter", defaultCenter);
    return (
      <GoogleMap {...this.props} defaultCenter={defaultCenter} defaultZoom={12}>
        {this.props.isScooterMarkerShown && (
          <Marker position={{ lat: lat, lng: lng }} />
        )}

        {/* <MarkerClusterer
          // onClick={this.props.onMarkerClustererClick}
          averageCenter
          enableRetinaIcons
          gridSize={60}
        >
          {this.props.scooterMarker.map((marker, index) => (
            <Marker
              key={index}
              position={{
                lat: parseFloat(marker[1]),
                lng: parseFloat(marker[0])
              }}
            />
          ))}
        </MarkerClusterer> */}
      </GoogleMap>
    );
  }
}

export default withScriptjs(withGoogleMap(GoogleMapsScooter));
