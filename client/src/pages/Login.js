import React, {Component} from 'react'
import {Button, Card, Container} from 'react-materialize'
import Axios from 'axios'

class Login extends Component {
    constructor(){
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    // componentWillUpdate(event) {
    //     this.setState({[event.target.name]: event.target.value})
    //     console.log(this.state)
    // }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
        // console.log(this.state)
    }

    submitLogin = (event) => {
        event.preventDefault()

        let data = this.state

        console.log(data)

        Axios({
            method: 'post',
            // baseURL: 'http://localhost:3001',
            url: '/api/login',
            data: data
        }).catch((error) => {
            console.log(error)
        }) 
    }

    render() {
        return (
            <Container className="center-align">
                <Card>
                    <h1>Login</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" name="email" className="validate" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" className="validate" onChange={this.handleChange}/>
                        </div>
                        <Button onClick={this.submitLogin}>Login</Button>
                    </form><br />
                    <p>No Account? <a href="/register">Register</a></p>
                </Card>
            </Container>
        )
    }
}

export default Login