import React from "react";
import './rutinas.styles.css';
import Back from '../Global/Back/back.component.jsx';
import Title from '../Global/Title/title.component.jsx';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { AntSwitch } from './AntSwitch.component.jsx';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { isNil } from 'ramda';

function Rutinas(props) {
    const [firstInput, setFirstInput] = React.useState({ value: '', message: null, alertType: 'success', answer: '' });
    const [secondInput, setSecondInput] = React.useState({ value: '', message: null, alertType: 'success' });
    const [isAsc, setAsc] = React.useState(true);

    const checkNumbers = () => {
        const inputArray = firstInput.value.split(',').map(Number);
        const checkInt = inputArray.every(function (element) { return typeof element === 'number' && !isNaN(element); });

        if (!checkInt) {
            setFirstInput({ ...firstInput, message: 'Recuerda, deben ser números separados por comas (,)', alertType: 'error' })
        } else {
            setFirstInput({ ...firstInput, answer: orderBy(inputArray)});
        }
    }

    const orderBy = (numArray) => {
        numArray.sort(function (a, b) {
            if(isAsc){
                return a - b;
            } else {
                return b - a;
            }
        });

        return numArray.join()
    }

    return (
        <div className='rutinas'>
            <Back />
            <Title text='Rutinas' />
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
        </div>
    );
}

export default Rutinas;