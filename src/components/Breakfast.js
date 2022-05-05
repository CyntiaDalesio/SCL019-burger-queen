import React, {useContext} from 'react';
import data from '../data/menus.json';
import {UserContent} from '../Usecontext/UserContent'

function Breakfast() {
   
    const {cart,setCart} = useContext(UserContent);
    const addcart = (id,price,name) =>{

        setCart([...cart,{ id: id, name: name, price: price, cant:1 }]
            );
        }
    return (
        <div>
            <span>
                <table className="table table-dark table-striped table-hover md-5">
                    <thead>
                        <tr>
                            <th scope="name">Nombre</th>
                            <th scope="price">Precio</th>
                        </tr>
                    </thead>
                    <tbody>


                        {data.breakfast.map(element => {

                            return (

                                <tr key={element.id}>
                                    <td onClick={() =>addcart(element.id,element.price,element.name)}> {element.name} </td>
                                    <td>$ {element.price}</td>
                                </tr>
                            )

                        })}
                    </tbody>
                </table>
            </span>
        </div>
    );
}

export default Breakfast;