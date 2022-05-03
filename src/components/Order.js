import React from 'react';
import data from '../data/menus.json';
import Add from './Add.js';
import Counter from './Counter';
import Delete from './Delete.js';
import Reset from './Reset';
import { useState } from 'react';

function Order(props) {
    const [numClics, setNumClics] = useState(1);

    const manejarClic = () => {
        setNumClics(numClics + 1);
    }
    const reiniciarContador = () => {
        setNumClics(1);
    }





    return (
        <div>


            <div className='d-flex align-items-start'>
                <div className="">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Cant</th>
                                <th scope="col">Agregar</th>
                                <th scope="col">Reset</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Eliminar</th>
                            </tr>
                        </thead>


                        {data.lunch.map(element => {

                            return (
                                <tbody>
                                    <tr>
                                        <td> <Counter numClics={numClics} /></td>
                                        <th> <Add
                                            texto='Add'
                                            esBotonDeClic={true}
                                            manejarClic={manejarClic}
                                        /></th>
                                        <th> <Reset
                                            texto='Reset'
                                            esBotonDeClic={false}
                                            manejarClic={reiniciarContador}
                                        /></th>

                                        <td>{element.name}</td>
                                        <td>$ {element.price}</td>
                                        <td><Delete /></td>
                                    </tr>

                                </tbody>

                            )

                        })}

                    </table>
                </div>
            </div>
            <textarea className="form-control" placeholder='Agregar Detalle'></textarea>
            <hr className='py-1'></hr>
            <div className="div">
                total ---------------------------- $ 10000
            </div>

        </div>
    );
}

export default Order;