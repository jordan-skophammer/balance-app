import React, { Component } from "react";
import { Button, Card, Row, Col, Container, TextInput } from 'react-materialize';
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

    console.log(this.state)
}

componentDidMount() {
    this.getDataFromDb();
    this.totalSum();
}

componentDidUpdate() {
    this.totalSum()
}

getDataFromDb = () => {
fetch("/api/getData")
    // .then(data => data.json())
    .then(res => this.setState({ data: res.data }));
};

  // addInput(event) {
  //     new inputObject()

  //     this.setState(prevState => ({ inputs: prevState.inputs.concat([newInput])}))

  //     console.log(event.target.id)
  // }



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

    console.log(this.state)
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

    console.log(this.state)
}
render() {
    return (
        <Container>
            <Row>
                <h3>Expenses</h3>
            </Row>
            <Row>
                {this.state.items.map((item, index) => (
                    <Item
                    key={item.id}
                    label={item.label}
                    amount={item.amount}
                    changeLabel={this.changeLabel.bind(this, item.id)}
                    changeAmount={this.changeAmount.bind(this, item.id)}
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
