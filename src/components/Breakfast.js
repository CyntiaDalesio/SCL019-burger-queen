import React from 'react';
import data from '../data/menus.json';

function Breakfast(props) {
    const select = (id) =>{
        console.log('el id es:',id);
    }
    return (
        <div>
            <span>
                <table className="table table-dark table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="name">Nombre</th>
                            <th scope="price">Precio</th>
                        </tr>
                    </thead>
                    <tbody>


                        {data.breakfast.map(element => {

                            return (

                                <tr >
                                    <td onClick={() =>select(element.id)}> {element.name} </td>
                                    <td>$ {element.price}</td>
                                </tr>


                                // <li className='list-group-item list-group-item-action'>{element.name} ---------{element.price} </li>



                            )

                        })}
                    </tbody>
                </table>
            </span>
        </div>
    );
}

export default Breakfast;