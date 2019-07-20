import React, {Component} from 'react'
import {Button, Card, Container} from 'react-materialize'

class Login extends Component {

    render() {
        return (
            <Container className="center-align">
                <Card>
                    <h1>Login</h1>
                    <form action="/user/login" method="post">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" className="validate"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" className="validate"/>
                        </div>
                        <Button type="submit">Login</Button>
                    </form><br />
                    <p>No Account? <a href="/Register">Register</a></p>
                </Card>
            </Container>
        )
    }
}

export default Login