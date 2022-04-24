import React, { useEffect } from 'react';
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from '@faker-js/faker';
import { getFormLabelUtilityClasses } from '@mui/material';

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Tooltip
);

function TestChart(props) {
    const { hostData, compareTime, isCurrent } = props;
    const today = new Date();
    let minusMinutes = !isCurrent ? new Date(today.getTime() - (compareTime + 30) * 60000) : new Date(today.getTime() - 30 * 60000);
    let newToday = !isCurrent ? new Date(today.getTime() - (compareTime) * 60000) : today;


    const getLabels = () => {
        let newLabels = [];
        let timestamp = hostData.map(a => a.timestamp);

        timestamp.forEach(dat => {
            var newDate = new Date(dat);
            var time = newDate.toLocaleTimeString();
            newLabels.push(time);
        });

        return newLabels;
    };

    const getData = () => {
        let memory = hostData.map(a => a.memory_usage);
        return memory;
    };

    const data = {
        labels: getLabels(),
        datasets: [
            {
                type: 'line',
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 2,
                fill: false,
                data: getData(),
            }
        ],
    };

    const options = {
        responsive: true
    };

    return (
        <React.Fragment>
            {/* {compareTime !== 0 && */}
                {'Hoy ' + minusMinutes.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ' - ' + newToday.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            {/* } */}
            <Line options={options} data={data} />
        </React.Fragment>
    );
}

export default TestChart;