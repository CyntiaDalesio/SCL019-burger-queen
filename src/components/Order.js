import React from 'react';
import data from '../data/menus.js';
import Add from './Add.js';
import Delete from './Delete.js';
function Order(props) {
    let priceTotal=1000;
    return (
        <div>
            {/* <span> */}

                        <div className='d-flex align-items-start'>
                            <div className="">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Cant</th>
                                            <th scope="col">Agregar</th>
                                            <th scope="col">Nombre</th>
                                            <th scope="col">Precio</th>
                                            <th scope="col">Eliminar</th>
                                        </tr>
                                    </thead>


                                    {data.lunch.map(element => {

                                        return (
                                            <tbody>
                                                <tr>
                                                <td>1</td>
                                                    <th scope="row"> <Add /></th>
                                                    <td>{element.name}</td>
                                                    <td>$ {element.price}</td>
                                                    <td><Delete /></td>
                                                </tr>
                                               
                                            </tbody>
                                            
                                        )
                                        {priceTotal += element.price};
                                    })}

                                </table>
                            </div>
                        </div>
                     <textarea className="form-control" placeholder='Agregar Detalle'></textarea>   
                     <hr className='py-1'></hr>   
                    <div className="div">
                        total ---------------------------- $ {priceTotal}
                        </div>      
            {/* </span> */}
        </div>
    );
}

export default Order;