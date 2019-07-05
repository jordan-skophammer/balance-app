import React, { Component } from "react";
import { Button, Row, Container} from 'react-materialize';
import Chart from "../components/Chart";
import Item from "../components/Item";
import Axios from 'axios'
import UniqueId from 'react-html-id';

class Home extends Component {
constructor() {
    super();
    UniqueId.enableUniqueIds(this)
    this.state = {
        items: [
            {id:this.nextUniqueId(), label:"Description", amount:0, color:this.dynamicColors()}
            // {id:this.nextUniqueId(), label:'Rent', amount:635, color: this.dynamicColors()},
            // {id:this.nextUniqueId(), label:'Savings', amount:400, color: this.dynamicColors()}
        ]
    };
}

componentWillMount() {
    this.getDataFromDb();
}

componentDidUpdate() {
    console.log(this.state.items)
}

getDataFromDb = () => {
fetch("/api/getData")
    .then(data => data.json())
    .then(res => {
        UniqueId.enableUniqueIds(this)

        let dbArray = []

        res.data.forEach(item =>{

            let dbItem = {id: item._id, label: item.label, amount: item.amount, color: this.dynamicColors()}

            dbArray.push(dbItem)
        })
        this.setState({items: dbArray})
    })
};

addItem = () => {
    UniqueId.enableUniqueIds(this)

    const newItem = {id: this.nextUniqueId(), label:'Description', amount:0, color:this.dynamicColors()}

    this.setState({items: [...this.state.items, newItem]})

    Axios({
        method: 'post',
        baseURL: 'http://localhost:3001',
        url: '/api/putData',
        data: newItem
    })
}

delItem = (id) => {
    const items = [...this.state.items]
    items.splice(id, 1)
    this.setState({items: items})
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

changeLabel = (id, event) => {
    const index = this.state.items.findIndex(item => {
        return (item.id === id)
    })

    const item = {...this.state.items[index]}
    item.label = event.target.value

    const items = [...this.state.items]
    items[index] = item

    this.setState({items: items})
}

changeAmount = (id, event) => {
    const index = this.state.items.findIndex(item => {
        return item.id === id
    })

    const item = {...this.state.items[index]}
    item.amount = parseInt(event.target.value, 10)

    const items = [...this.state.items]
    items[index] = item

    this.setState({items: items})
}

dynamicColors = () => {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)


    return `rgb(${r}, ${g}, ${b})`
}

render() {
    return (
        <Container className="center-align">
            <Row>
                <h3>Expenses</h3>
            </Row>
            <Row>
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
            </Row>
            <Row>
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
            </Row>
            <Row>
                <Button onClick={this.addItem}>Add</Button>
            </Row>
            <Row>
                <h3>Total {this.totalSum()}</h3>
            </Row>
        </Container>
    );
  }
}

export default Home;