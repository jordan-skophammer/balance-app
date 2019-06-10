import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Chart from "../components/chart";

//Styling
const centerItem = {
  textAlign: "center"
};

// const addInput = () => {
//     console.log("clicked")
// }

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: {
        label: 1,
        label2: 2
      },
      total: 100
    };

    // this.changeAmount = this.changeAmount.bind(this)
  }

  componentDidMount() {
    this.getDataFromDb();
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

  changeAmount(event) {
    let newInput = event.target.value;
    Object.keys(this.state.items).map(i => this.setState({ [i]: newInput }));

    console.log(this.state);
  }

  // totalSum = () => {

  // }

  render() {
    return (
      <Grid
        container
        style={centerItem}
        direction="row"
        justify="space-between"
        alignItems="center"
        spacing={16}
      >
        {/* Navbar */}
        <Grid item xs={2}>
          <Icon>home</Icon>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <h3>Balance</h3>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Icon>perm_identity</Icon>
        </Grid>

        {/* Totals Chart */}
        {/* <Grid item xs={12}><Chart /></Grid> */}

        {/* Menu Item */}
        <Grid container style={centerItem} alignItems="center" item xs={12}>
          <Paper>Expenses</Paper>
          <div>
            {Object.keys(this.state.items).map(item => (
              <Grid item xs={12} key={item}>
                <TextField
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
                />
              </Grid>
            ))}
          </div>
          <Button variant="contained" color="primary" onClick={this.addInput}>
            Add
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Paper>Total {this.state.total}</Paper>
        </Grid>
        {/* <Grid item xs={12}><Paper>Savings</Paper></Grid>
                    <Grid item xs={12}><Paper>Debt</Paper></Grid>
                    <Grid item xs={12}><Paper>Assets</Paper></Grid> */}
      </Grid>
    );
  }
}

export default Home;
