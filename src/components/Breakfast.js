import React, {useContext} from 'react';
import data from '../data/menus.json';
import {UserContent} from '../Usecontext/UserContent'

function Breakfast() {

    const {cart,setCart} = useContext(UserContent);
    const addcart = (element) =>{
        if(cart.some(item=> item.id===element.id)){
         const arrCard = cart.map((item) =>
         item.id === element.id ? { ...item, cant: item.cant + 1 } : item
       );
       setCart(arrCard);
       
     
        }else{
         setCart([...cart,{ id: element.id, name: element.name, price: element.price, cant:1 }]
             );
        }
            
             }
    return (
        <section>
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
                                    <td onClick={() =>addcart(element)}> {element.name} </td>
                                    <td>$ {element.price}</td>
                                </tr>
                            )

                        })}
                    </tbody>
                </table>
        </section>
    );
}

export default Breakfast;