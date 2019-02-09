import React from 'react'
import TextInput from '../constants/textInput'
import '../style/login.css'


export default class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    handleChange = evt => {
        const key = evt.target.name
        const val = evt.target.value
        this.setState({
            [key]: val
        })
    }


    render() {
        return (
            <div className="background_login" style={{ padding: "10%" }}>
                <div>
                    <h1 className="mb-4 login_title">Register</h1>
                    <div className="col-md-4 border rounded mx-auto login_container">
                        <TextInput label="First Name" id="firstName" type="text" val={this.state.firstName} handleChange={this.handleChange} />
                        <TextInput label="Last Name" id="lastName" type="text" val={this.state.lastName} handleChange={this.handleChange} />
                        <TextInput label="Email" id="email" type="email" val={this.state.email} handleChange={this.handleChange} />
                        <TextInput label="Password" id="password" type="password" val={this.state.password} handleChange={this.handleChange} />
                        <TextInput label="Confirm Password" id="confirmPassword" type="password" val={this.state.confirmPass} handleChange={this.handleChange} />
                        <button className="btn btn-md btn-primary mt-2" onClick={this.login}>Register</button>
                    </div>

                </div>
            </div>

        )
    }
}