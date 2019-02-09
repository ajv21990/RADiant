import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Login from './login'
import Register from './register'
import LandingPage from './landingPage'
import Rewards from './rewards'


const Navagation = () => (
    <Router>
        <div>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/landing" component={LandingPage} />
            <Route exact path="/rewards" component={Rewards} />

        </div>
    </Router>
)
export default Navagation