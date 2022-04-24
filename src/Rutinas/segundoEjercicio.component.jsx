import React from "react";
import './rutinas.styles.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { isNil } from 'ramda';

const SegundoEjercicio = (props) => {
    const { secondInput, setSecondInput, searchNumber } = props;
    const numbers = [1, 3, 6, 90, 39, 4];

    return (
        <div className='col-xs-12 row noHorMargin secondRoutine'>
            <div className='col-xs-12'>
                <Typography variant='h4' component='p'>
                    Encontrar número
                </Typography>
            </div>
            <div className='col-xs-12'>
                <Typography className='subtitle' variant='body2' component='p'>
                    Arreglo de referencia: [1,3,6,90,39,4]
                </Typography>
            </div>
            <div className='col-xs-12 col-md-6'>
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Número"
                    placeholder='Inserte el número que desee buscar'
                    type='number'
                    variant="outlined"
                    value={secondInput.value}
                    onChange={(e) => setSecondInput({ ...secondInput, value: e.target.value, message: '', alertType: 'success' })}
                    error={secondInput.alertType === 'error'}
                    helperText={isNil(secondInput.message) ? 'Debe ser un número...' : secondInput.message}
                />
            </div>
            <div className='col-xs-12 col-md-6 row noHorMargin middle-xs'>
                <div>&nbsp;</div>
                <div className='col-xs-12'>
                    <Button
                        fullWidth
                        onClick={() => searchNumber(parseInt(secondInput.value), numbers[0], 1)}
                        disabled={secondInput.value === ''}
                        variant="contained">
                        Buscar!
                </Button>
                </div>
            </div>
            <div className='col-xs-12'>
                <div>&nbsp;</div>
                <Typography variant='body' component='p'>
                    {secondInput.answer}
                </Typography>
            </div>
        </div>
    );
}

export default SegundoEjercicio;