import React, {Component} from 'react'
import {Button, Card, Container, Modal} from 'react-materialize'
import Axios from 'axios'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            msg: '',
            modalOpen: false
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    newUser = (event) => {
        event.preventDefault()

        let data = this.state
        
        Axios({
            method: 'post',
            // baseURL: 'http://localhost:3001',
            url: '/api/newUser',
            data: data
        }).then((res) => {
            if (res.data.success === false) {
                let error = res.data.error[0].msg

                this.setState({msg: error, modalOpen: true})

                setTimeout(() => {
                    this.setState({msg: '', modalOpen: false})
                }, 3000)
            }else {
                this.setState({msg: 'Your account has been added, please login.', modalOpen: true})

                setTimeout(() => {
                    this.setState({msg: '', modalOpen: false})

                    window.location = '/login'
                }, 3000) 
            }
        }).catch((error) => {
            console.log(error)
        }) 
    }

    render() {
        return (
            <Container>
                <Card>
                    <h1>Register</h1>
                    <Modal open={this.state.modalOpen}><h3>{this.state.msg}</h3></Modal>
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
                    <p>Already Registered? <a href="/login">Login</a></p>
                </Card>
            </Container>
        )
    }
}

export default Register