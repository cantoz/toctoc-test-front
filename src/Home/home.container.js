import React, { useEffect } from "react";
import Title from '../Global/Title/title.component.jsx';
import './home.styles.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Home(props) {
    return (
        <div className='home'>
            <Title text='TOC TOC TEST HOME' />
            <div className='row col-xs-12'>
                <div className='col-xs-6'>
                    <Button fullWidth variant="contained">Base de Datos</Button>
                </div>
                <div className='col-xs-6'>
                    <Button onClick={() => window.location.assign('/rutinas')} fullWidth variant="contained">Rutinas</Button>
                </div>
                <div className='col-xs-12'>
                    <Button fullWidth variant="contained">Gráficos</Button>
                </div>
            </div>
        </div>
    );
}

export default Home;