
import React from "react";
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
  InfoWindow
} from "react-google-maps";

class GoogleMapsScooter extends React.Component {
  render() {
    const { lat, lng, defaultCenter } = this.props;
    return (
      <GoogleMap {...this.props} defaultCenter={defaultCenter} defaultZoom={15}>
        {this.props.isScooterMarkerShown && (
          <Marker position={{ lat: lat, lng: lng }}
            animation={1} />
        )}


        {this.props.ScooterMarker.map((marker, index) => (
          <Marker
            key={index}
            position={{ lat: parseFloat(marker[1]), lng: parseFloat(marker[0]) }}
            // onClick={this.props.onClick}
            animation={2}

          >
            {/* {this.props.isOpen &&
              <InfoWindow onCloseClick={this.props.onCloseClick}>
                <span>Something</span>
              </InfoWindow>
            } */}
          </Marker>
        ))}
      </GoogleMap>
    );
  }
}

export default withScriptjs(withGoogleMap(GoogleMapsScooter));
