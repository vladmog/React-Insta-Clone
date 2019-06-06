import React from "react";

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
            <div>
                <form onSubmit = {this.login}>
                    <input 
                        name = "username" 
                        value = {this.state.username}
                        placeholder = "username"
                        onChange = {this.handleChange}
                    />
                    <input
                        name = "password" 
                        value = {this.state.password}
                        placeholder = "password"
                        onChange = {this.handleChange}
                    />
                    <button type = "submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Login;