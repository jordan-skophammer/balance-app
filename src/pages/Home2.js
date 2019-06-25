import React, { Component } from "react";
import { Button, Card, Row, Col, Container } from 'react-materialize';
import Chart from "../components/chart";
import { set } from "mongoose";

class Home extends Component {
constructor(props) {
    super(props);

    this.state = {
    items: {
        label: '1',
        label2: '2'
    },
    total: 100
    };

    this.changeAmount = this.changeAmount.bind(this)
    this.totalSum = this.totalSum.bind(this)
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



totalSum() {
console.log(this.state)
}
changeAmount(event) {
let newInput = event.target.value;



}
render() {
    return (
        <Container>
            <Row>
                <h3>Expenses</h3>
            </Row>
            <Row>
            <div>
                {Object.keys(this.state.items).map(item => (
                <div key={item}>
                    <div className="inputfield col s6" onChange={this.changeAmount}>
                        <input placeholder={item} type="text"/>
                    </div>
                    <div className="inputfield col s6" onChange={this.changeAmount}>
                        <input placeholder={this.state.items[item]} type="text"/>
                    </div>
                    {/* <TextField
                    onChange={this.changeAmount}
                    className="label"
                    placeholder={item}
                    direction="row"
                    xs={12}
                    id="outlined-bare"
                    defaultValue=""
                    margin="normal"
                    variant="outlined"
                    inputProps={{ "aria-label": "bare" }}
                    />
                    <TextField
                    onChange={this.changeAmount}
                    placeholder={this.state.items[item]}
                    direction="row"
                    xs={12}
                    id="outlined-bare"
                    margin="normal"
                    variant="outlined"
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">$</InputAdornment>
                        )
                    }}
                    /> */}
                </div>
                ))}
            </div>
            </Row>
            <Row>
                <Button onClick={this.addInput}>Add</Button>
            </Row>
            <Row>
                <h3>Total {this.state.total}</h3>
            </Row>
        </Container>
    );
  }
}

export default Home;
