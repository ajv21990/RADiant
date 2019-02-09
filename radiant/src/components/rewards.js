import React from 'react'
import lime from '../images/lime.png'
import bird from '../images/bird-logo.png'
import Uber from '../images/Uber.png'
import Lyft from '../images/Lyft.png'
import '../style/rewards.css'
import { Label } from 'semantic-ui-react';
import Footer from '../constants/footer'
import Header from '../constants/header'




export default class Rewards extends React.Component {
    state = {
        percent: 100,
        Uber_Lyft: 25,
        Bike: 30,
        Rent_A_Car: 10,
        miles: {
            scooter_Miles: 20,
            UL_Miles: 15,
            bike_Miles: 10,
            rent_Miles: 5
        }
    }

    render() {
        let ScooterProgress = (this.state.percent) + "%"
        let UberLyft_Progress = (this.state.Uber_Lyft) + "%"
        let BikeProgress = (this.state.Bike) + "%"
        let RentACar_Progress = (this.state.Rent_A_Car) + "%"

        return (
            <div>
                <Header
                    handleClick={this.Zag}
                />
                <div className="bg-warning rewards_container" style={{ height: `700px` }}>

                    <h1 className="reward_header">Reward Status</h1>
                    <div className="row mb-4">
                        <div className="col-md-1">
                            <img alt="Lime" src={lime} className="logo" /><img alt="Bird" src={bird} className="logo ml-4" />
                        </div>
                        <div className="progress">
                            <div className=" bg-success progress-bar progress-bar-striped progress-bar-animated" style={{ width: ScooterProgress }} role="progressbar" aria-valuenow={this.state.percent} aria-valuemin="0" aria-valuemax="100">{this.state.miles.scooter_Miles}/20 miles</div>

                        </div>

                        <div>
                            {(this.state.percent !== 100) ? <button className="btn btn-success" disabled>Keep Going!</button> : <button className="btn btn-success" >Claim Prize!</button>}
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-1">
                            <img alt="Lyft" src={Lyft} className="logo" /><img alt="Uber" src={Uber} className="logo ml-4" />
                        </div>
                        <div className="progress">
                            <div className=" bg-danger progress-bar progress-bar-striped progress-bar-animated" style={{ width: UberLyft_Progress }} role="progressbar" aria-valuenow={this.state.Uber_Lyft} aria-valuemin="0" aria-valuemax="100">{this.state.miles.UL_Miles}/60 miles</div>
                        </div>
                        <div>
                            {(this.state.Uber_Lyft !== 100) ? <button className="btn btn-danger" disabled>Keep Going!</button> : <button className="btn btn-danger" >Claim Prize!</button>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1 mb-4">
                            <Label>Bike</Label>
                        </div>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: BikeProgress }} role="progressbar" aria-valuenow={this.state.Bike} aria-valuemin="0" aria-valuemax="100">{this.state.miles.bike_Miles}/34 miles</div>
                        </div>
                        <div>
                            {(this.state.Bike !== 100) ? <button className="btn btn-primary" disabled>Keep Going!</button> : <button className="btn btn-primary" >Claim Prize!</button>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-1">
                            <Label>Rent-A-Car</Label>
                        </div>
                        <div className="progress">
                            <div className=" bg-info progress-bar progress-bar-striped progress-bar-animated" style={{ width: RentACar_Progress }} role="progressbar" aria-valuenow={this.state.Rent_A_Car} aria-valuemin="0" aria-valuemax="100">{this.state.miles.rent_Miles}/50 miles</div>
                        </div>
                        <div>
                            {(this.state.Rent_A_Car !== 100) ? <button className="btn btn-info" disabled>Keep Going!</button> : <button className="btn btn-info" >Claim Prize!</button>}
                        </div>
                    </div>
                </div>
                <Footer handleClick={this.rewards} />
            </div>
        )
    }
}
