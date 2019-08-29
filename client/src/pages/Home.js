import React, { Component } from 'react'
import { Row } from 'react-materialize'
import Nav from '../components/Navbar'

class Home extends Component {

    render() {
        return (
            <div className="center-align">
                <Nav />
                <Row><h1>Balance</h1></Row>
            </div>
        )
    }
}

export default Home