import React, {Component} from 'react'
import {Button, Card, Container} from 'react-materialize'
import Axios from 'axios'

class Register extends Component {

    newUser = (event) => {
        event.preventDefault()

        const data = event.target.value

        console.log(data)

        // Axios({
        //     method: 'post',
        //     baseURL: 'http://localhost:3001',
        //     url: '/api/putData',
        //     data: data
        // })
    }

    render() {
        return (
            <Container>
                <Card>
                    <h1>Register</h1>
                    <form onSubmit={this.newUser}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" className="validate" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" name="email" className="validate" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" className="validate" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password2">Confirm Password</label>
                            <input type="password" id="password2" name="password2" className="validate" />
                        </div>
                        <Button>Register</Button>
                    </form><br/>
                    <p>Already Registered? <a href="/Login">Login</a></p>
                </Card>
            </Container>
        )
    }
}

export default Register