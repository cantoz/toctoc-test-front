import React from "react";
import './rutinas.styles.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { AntSwitch } from './AntSwitch.component.jsx';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { isNil } from 'ramda';

const PrimerEjercicio = (props) => {
    const { firstInput, setFirstInput, isAsc, setAsc, checkNumbers } = props;

    return (
        <div className='col-xs-12 row noHorMargin firstRoutine'>
            <div className='col-xs-12'>
                <Typography className='subtitle' variant='h4' component='p'>
                    Ordenar números
                </Typography>
            </div>
            <div className='col-xs-12 col-md-6'>
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Números a Ordenar"
                    variant="outlined"
                    value={firstInput.value}
                    onChange={(e) => setFirstInput({ ...firstInput, value: e.target.value, message: '', alertType: 'success' })}
                    error={firstInput.alertType === 'error'}
                    helperText={isNil(firstInput.message) ? 'Recuerda separar los números por una coma (,)' : firstInput.message}
                />
            </div>
            <div className='col-xs-12 col-md-6 row noHorMargin middle-xs'>
                <div className='col-xs-12 col-md-4'>
                    <Stack onClick={() => setAsc(!isAsc)} direction="row" spacing={1} alignItems="center">
                        <Typography>Desc</Typography>
                        <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                        <Typography>Asc</Typography>
                    </Stack>
                </div>
                <div className='col-xs-12 col-md-8'>
                    <Button
                        fullWidth
                        onClick={() => checkNumbers()}
                        disabled={firstInput.value === ''}
                        variant="contained">
                        Ordenar!
                    </Button>
                </div>
            </div>
            <div className='col-xs-12'>
                <div>&nbsp;</div>
                <Typography variant='body' component='p'>
                    <b>Resultado Ordenado: {firstInput.answer}</b>
                </Typography>
            </div>
        </div>
    );
}

export default PrimerEjercicio;