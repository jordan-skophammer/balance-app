import React, { Component } from 'react'
import { Row } from 'react-materialize'
import Nav from '../components/Navbar'

class Home extends Component {

    render() {
        return (
        <div>
            <Nav />
            <div className="center-align">
                <Row><h1>Balance</h1></Row>
            </div>
        </div>
        )
    }
}

export default Home