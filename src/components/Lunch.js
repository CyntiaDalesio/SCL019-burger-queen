import React, {useContext} from 'react';
import data from '../data/menus.json';
// import Add from './Add';
// import Delete from './Delete';
import {UserContent} from '../Usecontext/UserContent'

function Lunch(props) {

   const {cart,setCart} = useContext(UserContent);

    const select = (id,price,name) =>{
        console.log('el id es:',id);


    }

    // function addToCart(item) {
    //     setCart([...cart, { ...item }]);
    //     console.log("estamos dando click a los elementos");
    // }

    const addcart = (id,price,name) =>{

        setCart([...cart,{ id: id, name: name, price: price }]
            );
      

        // setCart();
        console.log();
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
                {data.lunch.map(element => {

                    return (
                        <tr key={element.id} >
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

export default Lunch;