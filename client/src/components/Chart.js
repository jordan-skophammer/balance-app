import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const chart = (props) => (
    <div>
        <Doughnut data={{
            labels: props.labels,
            datasets: [{
            backgroundColor: props.backgroundColor,
            data: props.amounts,}]
            }}
            options={{
                legend:{display: true},
                responsive: true,
                maintainAspectRatio: true,
                layout: {
                    width: 900,
                    height: 900,
                    padding: 0
                }                 
            }}
        />
    </div>
)

export default chart;