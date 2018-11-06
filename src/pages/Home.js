import React, {Component} from "react";
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class Home extends Component {
    render() {
        return(
            <div>
                <Grid container justify="center" spacing={24}>
                    {/* Navbar */}
                    <Grid item xs={6}>Menu</Grid>
                    {/* <Grid item xs={6}></Grid> */}
                    <Grid item xs={6}>Account</Grid>

                    {/* Totals Chart */}
                    <Grid item xs={12}>Chart</Grid>
                </Grid>
            </div>
        )
    }
}

export default Home;