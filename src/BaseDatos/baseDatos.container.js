import React from "react";
import Title from '../Global/Title/title.component.jsx';
import Back from '../Global/Back/back.component.jsx';
import Button from '@mui/material/Button';

function BaseDatos(props) {
    return (
        <div className='home'>
            <Back />
            <Title text='1er Ejercicio Base de Datos' />
            <div style={{ textAlign: 'justify', padding: '0px 20px' }} className='row col-xs-12 col-md-6 col-md-offset-3 start-xs'>
                <p>Que tal. Lamentablemente por tiempo no pude hacer que el ejercicio de
                base de datos se pudiese ver por acá, con las 5 querys requeridas para
                que sea de fácil acceso.</p>

                <p>Para poder ver este primer ejercicio, favor ingresar al proyecto de Back.
                En él podrán ver como se crearon las tablas en SQLite3 y cómo se poblaron,
                junto a sus relaciones. (ver ./database.js)</p>
                <p>
                    También están disponibles los siguientes endpoints, de acuerdo a las
                    5 queries solicitadas:
                </p>
                <div>1. <b>/get/bank/branches</b>: Obtener todas las sucursales por cada banco</div>
                <div>2. <b>/get/vigilante/reports/:vigilante</b>: Obtener todos los reportes de un vigilante (ingresando la id)</div>
                <div>3. <b>/get/bank/employees</b>: Número de empleados por cada banco</div>
                <div>4. <b>/get/employees/get-vigilante</b>: Lista todos aquellos empleados que son vigilantes</div>
                <div>5. <b>/get/employees/get-registration/:id</b>: Indica todos los registros que hizo un empleado (salidas y entradas)</div>

                <p>
                    Pueden comprobar estas queries en postman o en cualquier otra aplicación. Recordar
                    que el server estaría localizado en http://localhost:8000
                </p>
                <p>
                    Que tengan una excelente semana.
                    <div>&nbsp;</div>
                    <b>Diego Cantos Z.</b>
                </p>
            </div>
        </div>
    );
}

export default BaseDatos;