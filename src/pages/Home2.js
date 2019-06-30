import React, { Component } from "react";
import { Button, Row, Container} from 'react-materialize';
import Chart from "../components/Chart";
import Item from "../components/Item";
import { set } from "mongoose";
import UniqueId from 'react-html-id';
import { userInfo } from "os";

class Home extends Component {
constructor() {
    super();
    UniqueId.enableUniqueIds(this)
    this.state = {
        items: [
            {id:this.nextUniqueId(), label:'Rent', amount:635},
            {id:this.nextUniqueId(), label:'Savings', amount:400}
        ]
    };
}

componentDidMount() {
    this.getDataFromDb();

}

componentDidUpdate() {
    this.totalSum()
    console.log(this.state.items)
}

getDataFromDb = () => {
fetch("/api/getData")
    // .then(data => data.json())
    .then(res => this.setState({ data: res.data }));
};

addInput = () => {
    UniqueId.enableUniqueIds(this)

    const newItem = {id: this.nextUniqueId(), label:'Description', amount:0}

    this.setState({items: [...this.state.items, newItem]})

    console.log(this.state)
}

delItem = (id, event) => {
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

render() {
    return (
        <Container>
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
                >
                </Chart>
            </Row>
            <Row>
                {this.state.items.map((item, index) => (
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
                <Button onClick={this.addInput}>Add</Button>
            </Row>
            <Row>
                <h3>Total {this.totalSum()}</h3>
            </Row>
        </Container>
    );
  }
}

export default Home;