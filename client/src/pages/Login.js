import React, {Component} from 'react'
import {Button, Card, Container, Modal} from 'react-materialize'
import Axios from 'axios'
import Nav from '../components/Navbar'

class Login extends Component {
    constructor(){
        super()
        this.state = {
            email: '',
            password: '',
            msg: '',
            modalOpen: false
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

        Axios({
            method: 'post',
            // baseURL: 'http://localhost:3001',
            url: '/api/login',
            data: data
        }).then((res) => {
            console.log(res.data)
            if (res.data.success === false) {
                let error = res.data.error

                this.setState({msg: error, modalOpen: true})

                setTimeout(() => {
                    this.setState({msg: '', modalOpen: false})
                }, 3000)
            }
            else {
                console.log(res.data)
                // this.props.handler(res)
                window.location = '/expenses'
            }
        })
    }

    render() {
        return (
        <div>
            <Nav />
            <Container className="center-align">
                <Card>
                    <h1>Login</h1>
                    <Modal open={this.state.modalOpen}><h3>{this.state.msg}</h3></Modal>
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
        </div>
        )
    }
}

export default Login