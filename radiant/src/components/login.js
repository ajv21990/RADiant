import React from 'react'
import TextInput from '../constants/textInput'
import '../style/login.css'

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }
    handleChange = evt => {
        const key = evt.target.name
        const val = evt.target.value
        this.setState({
            [key]: val
        })
    }
    goToRegister = () => {
        this.props.history.push('/register')
    }

    render() {
        return (
            <div className="background_login" style={{ padding: "17%" }}>
                <div>
                    <h1 className="mb-4 login_title">RideShare</h1>
                    <div className="col-md-4 border rounded mx-auto login_container">
                        <TextInput label="Email" id="email" type="email" val={this.state.email} handleChange={this.handleChange} />
                        <TextInput label="Password" id="password" type="password" val={this.state.password} handleChange={this.handleChange} />
                        <button className="btn btn-primary mt-2" onClick={this.logIn}>Login</button> <button className="btn btn-link" onClick={this.goToRegister}>Sign Up</button>
                    </div>
                </div>
            </div>


        )
    }
}






