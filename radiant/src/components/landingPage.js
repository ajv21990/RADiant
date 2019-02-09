import React from 'react'
import GoogleMaps from '../components/googleMaps'
import Header from '../constants/header'
import ZagApi from '../Axios/API/zagsterAPI'
import Footer from '../constants/footer'


export default class LandingPage extends React.Component {
    state = {
        mapLocation: {
            lat: 33.783022
            , lng: -118.112858
        },
        // markers: {
        //     lat: null,
        //     lng: null
        // }

    }
    componentDidMount = () => {
        this.startLocation()
    }

    startLocation = () => {
        navigator.geolocation.getCurrentPosition(this.success, this.error)
    }
    success = pos => {
        let crd = pos.coords
        let latitude = crd.latitude
        let longitude = crd.longitude
        console.log(pos)
        this.setState({
            ...this.state.mapLocation,
            lat: latitude,
            lng: longitude,
        })
        this.setState({ mapLocation: this.state })
        this.setState({ mapLocation: this.state })


    }
    error = err => console.warn(`ERROR(${err.code}): ${err.message}`)
    Zag = () => {
        ZagApi.Zag(this.ZagSuccess, this.ZagError)
    }

    ZagError = resp => {
        console.log("Failed to get", resp)
    }

    ZagSuccess = resp => {
        console.log("Success Get", resp)
        this.setState({
            players: resp.data.items
        })
    }

    rewards = () => {
        this.props.history.push("/rewards")
    }



    render() {
        const { mapLocation } = this.state;
        return (
            <div>
                <Header
                    handleClick={this.Zag}
                />
                <GoogleMaps
                    isMarkerShown
                    defaultCenter={mapLocation}
                    lat={mapLocation.lat}
                    lng={mapLocation.lng}
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD0gxlfY7tCOD6kh-k_wyJzV9XzpTursao"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `700px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                // markers={this.state.markers}
                />
                <Footer handleClick={this.rewards} />
            </div>
        )
    }
}
