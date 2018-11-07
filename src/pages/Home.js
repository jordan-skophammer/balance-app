import React, {Component} from "react";
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';

const centerItem = {
    textAlign: 'center'
}

class Home extends Component {

    render() {
        return(
            <div>
                <Grid container style={centerItem} direction="row" justify="space-between" alignItems="center" spacing={16}>
                    {/* Navbar */}
                    <Grid item xs={2}><Icon>home</Icon></Grid>
                    <Grid item xs={6}><Paper><h3>Balance</h3></Paper></Grid>
                    <Grid item xs={2}><Icon>perm_identity</Icon></Grid>

                    {/* Totals Chart */}
                    <Grid item xs={12}><Paper>Chart</Paper></Grid>

                    {/* Menu Item */}
                    <Grid item xs={12}><Paper>Expenses</Paper></Grid>
                    <Grid item xs={12}><Paper>Budget</Paper></Grid>
                    <Grid item xs={12}><Paper>Savings</Paper></Grid>
                    <Grid item xs={12}><Paper>Debt</Paper></Grid>
                    <Grid item xs={12}><Paper>Assets</Paper></Grid>
                </Grid>
            </div>
        )
    }
}

export default Home;