import React from 'react'
import '../style/header.css'
import { Link } from 'react-router-dom'
import logo from '../images/LBC_Logo.png'
import lime from '../images/lime.png'
import bird from '../images/bird-logo.png'
import Uber from '../images/Uber.png'
import Lyft from '../images/Lyft.png'
import { defaultProps } from 'recompose';


const LandingPage = props => (
    <div className="header">
        <div className="row">
            <Link to='/landing'><img src={logo} alt="Long Beach" className="logo" /></Link>
            <div className="row">
                <ul>
                    <a href="#" className="headerLink"><img src={bird} alt="Long Beach" className="logo" /><img src={lime} alt="Long Beach" className="logo ml-1" /></a>
                    <a href="#" className="headerLink"><span onClick={props.handleClick}>Bikes</span></a>
                    <a href="#" className="headerLink">Public Transit</a>
                    <a href="#" className="headerLink"><img src={Uber} alt="Long Beach" className="logo" /><img src={Lyft} alt="Long Beach" className="logo ml-1" /></a>
                    <a href="#" className="headerLink">Rent-a-Car</a>
                </ul>
            </div>
        </div>
    </div>
)

export default LandingPage