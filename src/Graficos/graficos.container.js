import React, { useEffect } from "react";
import Back from '../Global/Back/back.component.jsx';
import Title from '../Global/Title/title.component.jsx';
import API from '../Global/API';
import './graficos.styles.css';
import TestChart from './chart.component.jsx';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Graficos(props) {
    const [hostData, setHostData] = React.useState([]);
    const [compareData, setCompareData] = React.useState([]);
    const [compareTime, setCompareTime] = React.useState(0);
    const [isComparing, setComparing] = React.useState(false);

    const getData = (time) => {
        API.getCurrentData(time, evt => {
            console.info('getData', evt);
            if (time === 30) {
                setHostData(evt.data);
            } else {
                setCompareData(evt.data);
            }
        });
    }

    useEffect(() => {
        getData(30);
    }, [])

    useEffect(() => {
        if(!isComparing){
            setCompareTime(0);
        }
    }, [isComparing])

    useEffect(() => {
        const petitionInterval = setInterval(() => {
            if (compareTime === 0) {
                // 30 minutes (standard graph)
                getData(30);
            } else {
                // Could be 60, 120, 180 minutes
                getData(30);
                getData(compareTime);
            }
        }, 5000);
        return () => clearInterval(petitionInterval);
    }, [compareTime]);

    return (
        <div className='graficos'>
            <Back />
            <Title text='Gráficos' />

            {/* COMPARING CHART HOUR SELECT */}
            {isComparing &&
                <div className='col-xs-12 col-md-4'>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Comparar</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={compareTime}
                            label="Comparar"
                            onChange={(e) => setCompareTime(e.target.value)}
                        >
                            <MenuItem value={60}>Comparar 1 hora antes</MenuItem>
                            <MenuItem value={120}>Comparar 2 horas antes</MenuItem>
                            <MenuItem value={180}>Comparar 3 horas antes</MenuItem>
                        </Select>
                    </FormControl>
                    <div>&nbsp;</div>
                </div>
            }

            {/* CURRENT CHART */}
            <TestChart hostData={hostData} compareTime={compareTime} isCurrent={true} />
            <div>&nbsp;</div>
            {/* COMPARING CHART */}
            {compareTime !== 0 &&
                <TestChart hostData={compareData} compareTime={compareTime} isCurrent={false}/>
            }

            <div className='col-xs-12 col-md-4 col-md-offset-8'>
                <div>&nbsp;</div>
                <Button onClick={() => setComparing(!isComparing)} fullWidth variant="contained">
                    {!isComparing ? 'Comparar con otro time frame' : 'Atrás'}
                </Button>
            </div>
            <div>&nbsp;</div>
        </div>
    );
}

export default Graficos;