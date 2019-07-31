//@flow
import React, { Component } from 'react'
import { Button, Row, Col} from 'react-materialize'
import Chart from '../components/Chart'
import Item from '../components/Item'
import Axios from 'axios'

class Home extends Component {
constructor() {
    super()
    this.state = {
        items: [
            {id:"", label:"Description", amount:0, color:this.dynamicColors()}
        ]
    }
}

componentWillMount() {
    this.getDataFromDb()
}

componentDidUpdate() {
    console.log(this.state.items)
}

getDataFromDb = () => {
fetch("/api/getData")
    .then(data => data.json())
    .then(res => {
        let dbArray = []
        res.data.forEach(item =>{

            let dbItem = {id: item._id, label: item.label, amount: item.amount, color: item.color}

            dbArray.push(dbItem)
        })
        this.setState({items: dbArray})
    })
};

addItem = () => {
    const newItem = {label:'Description', amount:0, color:this.dynamicColors()}

    Axios({
        method: 'post',
        url: '/api/putData',
        data: newItem
    })
    .catch((error) => console.log(error))
    .then(() => this.getDataFromDb())  
}

delItem = (id) => {
    Axios({
        method: 'delete',
        url: '/api/deleteData',
        data: {id: id}
    }).then(() => this.getDataFromDb())
}

changeLabel = (id, event) => {
    const index = this.state.items.findIndex(item => {
        return (item.id === id)
    })

    const item = {...this.state.items[index]}
    item.label = event.target.value

    Axios({
        method: 'post',
        baseURL: 'http://localhost:3001',
        url: '/api/updateData',
        data: {id: item.id,
            update: {label: item.label}
        }
    }).then(() => this.getDataFromDb()) 
}

changeAmount = (id, event) => {
    const index = this.state.items.findIndex(item => {
        return item.id === id
    })

    const item = {...this.state.items[index]}
    item.amount = parseInt(event.target.value, 10)

    const items = [...this.state.items]
    items[index] = item

    Axios({
        method: 'post',
        // baseURL: 'http://localhost:3001',
        url: '/api/updateData',
        data: {id: item.id,
            update: {amount: item.amount}
        }
    }).then(() => this.getDataFromDb())
}

totalSum = () => {
    let amounts = this.state.items.map(item => {
        return item.amount
    })

    let total = amounts.reduce((prev, curr) => {
        return prev + curr
    })

    return total
}

dynamicColors = () => {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)

    return `rgb(${r}, ${g}, ${b})`
}

render() {
    return (
        <div className="center-align">
            <Row>
                <h3>Expenses</h3>
            </Row>
            <Row>
                <Col s={6}>
                    <Chart
                    labels= {this.state.items.map(item => {
                        return item.label
                    })}
                    amounts={this.state.items.map(item => {
                        return item.amount
                    })}
                    backgroundColor={this.state.items.map(item => {
                        return item.color
                    })}
                    />
                </Col>
                <Col s={6}>
                    {this.state.items.map((item) => (
                        <Item
                        key={item.id}
                        label={item.label}
                        amount={item.amount}
                        changeLabel={this.changeLabel.bind(this, item.id)}
                        changeAmount={this.changeAmount.bind(this, item.id)}
                        delItem={this.delItem.bind(this, item.id)}
                        />
                    ))}
                    <Row>
                        <Button onClick={this.addItem}>Add</Button>
                    </Row>
                </Col>
            </Row>
            <Row>
                <h3>Total {this.totalSum()}</h3>
            </Row>
        </div>
    )}
}

export default Home