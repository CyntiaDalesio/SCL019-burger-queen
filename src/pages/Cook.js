import React,{useEffect, useState} from 'react';
import Logo from '../components/Logo';
import {getOrders} from '../Firebase/firebaseFunctions';
import { Link } from 'react-router-dom';
function Cook(props) {

const [orders, setOrders] = useState([]);

    useEffect( ()=>{
        getOrdersData();
    }, []);
    
    const getOrdersData = async() =>{
    
    const p = await getOrders();
    
    console.log(p.docs[0].data());
    setOrders(p.docs);
    }


    return (
        <div>
            <Logo/>

            <article className='d-flex align-items-start'>
                <div className="">
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Cant</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Nombre del Cliente</th>
                                <th scope="col">Estado</th>
                                <th scope="col">Cambiar Estado</th>
                            </tr>
                        </thead>


                        {orders.map(element => {
                            return (
                                <tbody>
                                    <tr key={element.id}>
                                        <th scope='row'> {element.data().Order.cant}</th>
                                        <td>{element.data().Order.name}</td>
                                        <td>$ {element.data().price}</td>
                                        <td>{element.data().nameClient}</td>
                                        <td> {element.data().status}</td>
                                        <td> <button>Listo</button></td>
                                        {/* <td onClick={() => removeCart(element.id)}><Delete /></td> */}
                                    </tr>

                                </tbody>

                            )

                        })}

                    </table>
                </div>
            </article>
            <Link to='/'>
            <img id ='back' src={require('../img/back.png')} alt=''></img>

            </Link>
        </div>
    );
}

export default Cook;