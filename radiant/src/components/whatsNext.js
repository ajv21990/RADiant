import React from 'react'
import Rewards from './rewards'
import NavBar from "./navBar";
import Expand from '../constants/expand'


export default class WhatsNext extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <h1 style={{ textAlign: "center", backgroundColor: "#C9E9F5", color: "#3E6A97" }}>The Future</h1>
                <Rewards />
                <Expand />


            </div>
        )
    }
}