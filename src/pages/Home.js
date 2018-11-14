import React, {Component} from "react";
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import Chart from '../components/chart';

const centerItem = {
    textAlign: 'center'
}

class Home extends Component {

    render() {
        return(
            
                <Grid container style={centerItem} direction="row" justify="space-between" alignItems="center" spacing={16}>
                    {/* Navbar */}
                    <Grid item xs={2}><Icon>home</Icon></Grid>
                    <Grid item xs={6}><Paper><h3>Balance</h3></Paper></Grid>
                    <Grid item xs={2}><Icon>perm_identity</Icon></Grid>
                    
                    {/* Totals Chart */}
                    <Grid item xs={12}><Chart /></Grid>

                    {/* Menu Item */}
                    <Grid item xs={12}><Paper>Expenses</Paper></Grid>
                    <Grid item xs={12}><Paper>Budget</Paper></Grid>
                    <Grid item xs={12}><Paper>Savings</Paper></Grid>
                    <Grid item xs={12}><Paper>Debt</Paper></Grid>
                    <Grid item xs={12}><Paper>Assets</Paper></Grid>
                </Grid>
            
        )
    }
}

export default Home;