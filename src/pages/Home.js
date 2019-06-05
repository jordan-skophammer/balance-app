import React, {Component} from "react";
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Chart from '../components/chart';

//Styling
const centerItem = {
    textAlign: 'center'
}

// const addInput = () => {
//     console.log("clicked")
// }

class Home extends Component {

    state = {
        data: {},
        inputs: ['input0']
    }

    componentDidMount() {
        this.getDataFromDb();
    }

    getDataFromDb = () => {
        fetch("/api/getData")
            // .then(data => data.json())
            .then(res => this.setState({ data: res.data }));
    };

    addInput() {
        let newInput = this.state.inputs.length

        this.setState(prevState => ({ inputs: prevState.inputs.concat([newInput])}))

        console.log(newInput)
    }

    render() {
        return(
                <Grid container style={centerItem} direction="row" justify="space-between" alignItems="center" spacing={16}>
                    {/* Navbar */}
                    <Grid item xs={2}><Icon>home</Icon></Grid>
                    <Grid item xs={6}><Paper><h3>Balance</h3></Paper></Grid>
                    <Grid item xs={2}><Icon>perm_identity</Icon></Grid>
                    
                    {/* Totals Chart */}
                    {/* <Grid item xs={12}><Chart /></Grid> */}

                    {/* Menu Item */}
                    <Grid container style={centerItem} alignItems="center" item xs={12}>
                        <Paper>Expenses</Paper>
                        <div className="DynamicInput">
                            {this.state.inputs.map(input => <TextField
                            key={input}
                            id="outlined-bare"
                            defaultValue="Bare"
                            margin="normal"
                            variant="outlined"
                            inputProps={{ 'aria-label': 'bare' }}
                        />)}
                        </div>
                        <Button variant="contained" color="primary" onClick={() => this.addInput()}>Add</Button>
                    </Grid>
                    <Grid item xs={12}><Paper>Budget</Paper></Grid>
                    <Grid item xs={12}><Paper>Savings</Paper></Grid>
                    <Grid item xs={12}><Paper>Debt</Paper></Grid>
                    <Grid item xs={12}><Paper>Assets</Paper></Grid>
                </Grid>
            
        )
        
    }
}

export default Home;