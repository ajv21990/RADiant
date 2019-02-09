import React from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';

class GoogleMaps extends React.Component {
    render() {
        const { lat, lng, defaultCenter } = this.props;
        console.log('defaultCenter', defaultCenter);
        return (
            <GoogleMap
                {...this.props}
                defaultCenter={defaultCenter}
                defaultZoom={12}>

                {this.props.isMarkerShown && <Marker position={{ lat: lat, lng: lng }} />}

                {/* {this.props.markers.length === 0 || this.props.markers.map((marker, index) => (
                    <Marker
                        key={index}
                        position={{ lat: marker.lat, lng: marker.lng }}
                    />
                ))} */}


            </GoogleMap>);
    }
}

export default withScriptjs(withGoogleMap(GoogleMaps));