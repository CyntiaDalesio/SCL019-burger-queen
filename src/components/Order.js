import React,{useContext} from 'react';
import data from '../data/menus.json';
import Add from './Add.js';
import Counter from './Counter';
import Delete from './Delete.js';
import Reset from './Reset';
import { useState } from 'react';
import {UserContent} from '../Usecontext/UserContent'

function Order() {
    const [numClics, setNumClics] = useState(1);
    const {cart,setCart} = useContext(UserContent);

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


                        {cart.map(element => {

                            return (
                                <tbody>
                                    <tr key= {element.id}>
                                        <td> <Counter numClics={numClics} /></td>
                                        <th> <Add
                                            texto='Add'
                                            esBotonDeClic={true}
                                            manejarClic={() =>manejarClic()}
                                        /></th>
                                        <th className='reset'> <Reset
                                            texto='Reset'
                                            esBotonDeClic={false}
                                            manejarClic={()=>reiniciarContador()}
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