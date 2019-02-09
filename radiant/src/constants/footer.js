import React from 'react'
import '../style/header.css'


const Footer = props => (
    <div className="header">
        <div className="row">
            <ul>
                <a href="#" className="headerLink"><span onClick={props.handleClick}>Rewards</span></a>
                <a href="#" className="headerLink">Why RADient?</a>
            </ul>
        </div>
    </div>
)

export default Footer