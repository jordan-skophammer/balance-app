import React, {Component} from 'react'
import {Button, Card, Container} from 'react-materialize'
import Axios from 'axios'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: ''
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    newUser = (event) => {
        event.preventDefault()

        let data = this.state
        console.log(data)

        Axios({
            method: 'post',
            baseURL: 'http://localhost:3001',
            url: '/api/newUser',
            data: data
        }).catch((error) => console.log(error))
    }

    render() {
        return (
            <Container>
                <Card>
                    <h1>Register</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" className="validate" value={this.state.name} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" className="validate" value={this.state.email} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" className="validate" value={this.state.password} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password2">Confirm Password</label>
                            <input type="password" id="password2" name="password2" className="validate" value={this.state.password2} onChange={this.handleChange} />
                        </div>
                        <Button onClick={this.newUser}>Register</Button>
                    </form><br/>
                    <p>Already Registered? <a href="/Login">Login</a></p>
                </Card>
            </Container>
        )
    }
}

export default Register