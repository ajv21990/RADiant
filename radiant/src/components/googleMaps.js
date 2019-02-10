import React from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs, InfoWindow } from 'react-google-maps';

class GoogleMaps extends React.Component {
    render() {
        const { lat, lng, defaultCenter } = this.props;
        return (
            <GoogleMap
                {...this.props}
                defaultCenter={defaultCenter}
                defaultZoom={12}>

                {this.props.isMarkerShown && <Marker position={{ lat: lat, lng: lng }} />}

                {this.props.markers.map((marker, index) => (
                    <Marker
                        key={index}
                        position={{ lat: parseFloat(marker[1]), lng: parseFloat(marker[0]) }}
                        onClick={this.props.onToggleOpen}

                    >
                        {this.props.selectedMarker === marker &&
                            <InfoWindow
                                onCloseClick={this.props.onToggleOpen}
                            >
                                <div>
                                    {marker.shelter}
                                </div>
                            </InfoWindow>}
                        }
                    </Marker>
                ))}

            </GoogleMap>);
    }
}

export default withScriptjs(withGoogleMap(GoogleMaps));
