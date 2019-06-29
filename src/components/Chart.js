import React from 'react';
import Paper from '@material-ui/core/Paper';
import {Doughnut} from 'react-chartjs-2';

const chart = (props) => (
    <div>
        <Paper>
            <h1>Chart</h1>

            <Doughnut data={{
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                label: "My First dataset",
                backgroundColor: ['Red', 'Green', 'Blue'],
                borderColor: 'rgb(255, 99, 100)',
                data: [0, 10, 5, 2, 20, 30, 45],}]
                }}
                options={{legend:{display: true}}}
            />
        </Paper>
    </div>
)

export default chart;