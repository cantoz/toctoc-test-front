import React from "react";
import './rutinas.styles.css';
import Back from '../Global/Back/back.component.jsx';
import Title from '../Global/Title/title.component.jsx';
import SegundoEjercicio from './segundoEjercicio.component.jsx';
import PrimerEjercicio from "./primerEjercicio.component.jsx";

function Rutinas(props) {
    const [firstInput, setFirstInput] = React.useState({ value: '', message: null, alertType: 'success', answer: '' });
    const [secondInput, setSecondInput] = React.useState({ value: '', message: null, alertType: 'success' });
    const [isAsc, setAsc] = React.useState(true);
    const numbers = [1, 3, 6, 90, 39, 4];

    const checkNumbers = () => {
        const inputArray = firstInput.value.split(',').map(Number);
        const checkInt = inputArray.every(function (element) { return typeof element === 'number' && !isNaN(element); });

        if (!checkInt) {
            setFirstInput({ ...firstInput, message: 'Recuerda, deben ser números separados por comas (,)', alertType: 'error' })
        } else {
            setFirstInput({ ...firstInput, answer: orderBy(inputArray) });
        }
    }

    const orderBy = (numArray) => {
        numArray.sort(function (a, b) {
            if (isAsc) {
                return a - b;
            } else {
                return b - a;
            }
        });

        return numArray.join()
    }

    const searchNumber = (num, compareNum, index) => {
        if (index < numbers.length + 1) {
            console.info('Buscando en el index Nº', index);
            console.info(num + ' vs', compareNum);
            if (num !== compareNum) {
                console.info('No coinciden los números');
                searchNumber(num, numbers[index], index + 1);
            } else {
                console.info('Hay match!!');
                setSecondInput({ ...secondInput, answer: <React.Fragment>El número <b>{num}</b> si existe en el arreglo, en el index <b>Nº{index - 1}</b>!!</React.Fragment> });
            }
        } else {
            console.info('No se encontró el número...');
            setSecondInput({ ...secondInput, answer: <React.Fragment>El número ingresado no existe en el arreglo...</React.Fragment> });
        }
    }

    return (
        <div className='rutinas'>
            <Back />
            <Title text='Rutinas' />
            {/* PRIMER EJERCICIO */}
            <PrimerEjercicio 
                isAsc={isAsc}
                setAsc={setAsc}
                firstInput={firstInput}
                checkNumbers={checkNumbers}
                setFirstInput={setFirstInput} />
            <div>&nbsp;</div>
            <hr />
            <div>&nbsp;</div>
            {/* SEGUNDO EJERCICIO */}
            <SegundoEjercicio
                secondInput={secondInput}
                searchNumber={searchNumber} 
                setSecondInput={setSecondInput} />
        </div>
    );
}

export default Rutinas;