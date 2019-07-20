import React, {Component} from 'react'
import {Button, Card, Container} from 'react-materialize'
import Axios from 'axios'

class Register extends Component {

    addItem = () => {
        const newItem = {label:'Description', amount:0, color:this.dynamicColors()}
    
        Axios({
            method: 'post',
            baseURL: 'http://localhost:3001',
            url: '/api/putData',
            data: newItem
        }).then(() => this.getDataFromDb())  
    }

    render() {
        return (
            <Container>
                <Card>
                    <h1>Register</h1>
                    <form action="/user/register" method="POST">
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
                        <Button type="submit">Register</Button>
                    </form><br/>
                    <p>Already Registered? <a href="/Login">Login</a></p>
                </Card>
            </Container>
        )
    }
}

export default Register