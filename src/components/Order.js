import React, { useContext } from 'react';
import Add from './Add.js';
import Delete from './Delete.js';
import Reset from './Reset';
import { UserContent } from '../Usecontext/UserContent'

function Order() {
    // funciones de agregar, restar y eliminar items del pedido
    const { cart, setCart } = useContext(UserContent);


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
        const arrCard = cart.map((item) => { 
        if(item.cant>1){
         return    item.id === id ? { ...item, cant: item.cant - 1 } : item

        }else{
         return   item.id === id ? { ...item, cant: 1 } : item

        }

    });
        setCart(arrCard);
    }


    //calcular el total del pedido
    let priceInitial = 0;
    const total = cart.reduce((acc, curr) => acc + curr.price * curr.cant, priceInitial);


    return (
        <section >

            <article className='d-flex align-items-start'>
                <div className="">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Cant</th>
                                <th scope="col">Agregar</th>
                                <th scope="col">Restar</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Eliminar</th>
                            </tr>
                        </thead>


                        {cart.map(element => {
                            return (
                                <tbody>
                                    <tr key={element.id}>
                                        <th scope='row'> {element.cant}</th>
                                        <th> <Add
                                            keys={element.id}
                                            add={addCant}
                                        /></th>
                                        <th className='reset'> <Reset
                                            keys={element.id}
                                            rest={restCant}
                                        /></th>

                                        <td>{element.name}</td>
                                        <td>$ {element.price}</td>
                                        <td onClick={() => removeCart(element.id)}><Delete /></td>
                                    </tr>

                                </tbody>

                            )

                        })}

                    </table>
                </div>
            </article>
            <article className="div">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col"></th>
                          
                        </tr>
                    </thead>
                    <tbody>
                      
                        <tr key={total}>
                            <th scope="row">Total</th>
                            <td colSpan="2"></td>
                            <td>$ {total}</td>
                        </tr>
                    </tbody>
                </table>
            </article>

        </section>
    );
}

export default Order;