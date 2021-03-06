import React from "react";
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs
} from "react-google-maps";

class GoogleMapsCars extends React.Component {
  render() {
    const { lat, lng, defaultCenter } = this.props;
    return (
      <GoogleMap {...this.props} defaultCenter={defaultCenter} defaultZoom={12}>
        {this.props.isMarkerShown && (
          <Marker position={{ lat: lat, lng: lng }} animation={1} />
        )}

        {this.props.markers.map((marker, index) => (
          <Marker
            key={index}
            position={{
              lat: parseFloat(marker[1]),
              lng: parseFloat(marker[0])
            }}
            onClick={this.props.onToggleOpen}
            animation={2}
          />
        ))}
      </GoogleMap>
    );
  }
}

export default withScriptjs(withGoogleMap(GoogleMapsCars));
