import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const chart = (props) => (
    <div>
        <Doughnut data={{
            labels: props.labels,
            datasets: [{
            backgroundColor: props.backgroundColor,
            borderColor: 'rgb(255, 99, 100)',
            data: props.amounts,}]
            }}
            options={{legend:{display: true}}}
        />
    </div>
)

export default chart;