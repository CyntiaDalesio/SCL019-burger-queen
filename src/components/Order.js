import React,{useContext} from 'react';
import Add from './Add.js';
import Delete from './Delete.js';
import Reset from './Reset';
import { useState } from 'react';
import {UserContent} from '../Usecontext/UserContent'

function Order() {
    const {cart,setCart} = useContext(UserContent);

    const removeCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
      }

      const addCant = (id) => {
        const arrCard = cart.map((item) =>
        item.id === id ? { ...item, cant: item.cant + 1 } : item
      );
      setCart(arrCard);
      }
      const restCant = (id) => {
        const arrCard = cart.map((item) =>
        item.id === id ? { ...item,  cant: item.cant - 1 } : item
      );
      setCart(arrCard);
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
                                        <td> {element.cant}</td>
                                        <th> <Add
                                            texto='Add'
                                            esBotonDeClic={true}
                                           keys={element.id}
                                           add={addCant}
                                        /></th>
                                        <th className='reset'> <Reset
                                            texto='Reset'
                                            esBotonDeClic={false}
                                            keys={element.id}
                                            rest={restCant}
                                        /></th>

                                        <td>{element.name}</td>
                                        <td>$ {element.price}</td>
                                        <td onClick={()=>removeCart(element.id)}><Delete /></td>
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