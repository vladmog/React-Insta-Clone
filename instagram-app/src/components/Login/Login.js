import React from "react";
import {Button, Div, Input, Img, Form} from '../Styles/LoginStyles.js';



class Login extends React.Component {
    state = {
        username: "",
        password: ""
    }

    login = e => {
        localStorage.setItem("username", this.state.username)
        localStorage.setItem("password", this.state.password)
    }

    handleChange = e => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <Div>
                <Img src={require('./Nokia.png')} alt = "" />
                <Form onSubmit = {this.login}>
                    <Input 
                        name = "username" 
                        value = {this.state.username}
                        placeholder = "username"
                        onChange = {this.handleChange}
                    />
                    <Input
                        name = "password" 
                        value = {this.state.password}
                        placeholder = "password"
                        onChange = {this.handleChange}
                    />
                    <Button type = "submit">Login</Button>
                </Form>
            </Div>
        )
    }
}

export default Login;