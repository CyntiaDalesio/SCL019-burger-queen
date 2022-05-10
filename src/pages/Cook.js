import React, { useEffect, useState } from 'react';
import Logo from '../components/Logo';
import { getOrders } from '../Firebase/firebaseFunctions';
import { Link } from 'react-router-dom';
function Cook(props) {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getOrdersData();
    }, []);

    const getOrdersData = async () => {

        const p = await getOrders();

        console.log(p.docs[0].data());
        setOrders(p.docs);
        // setOrders(p.docs[0].data())
    }
    return (
        <div>
            <Logo />

            <article className='d-flex align-items-start'>
                <div className="">
                    <table className="table table-dark -responsive-md">
                        <thead>
                            <tr>
                                <th scope="col" colSpan="2">Pedidos</th>
                                <th scope="col" colSpan="1">Detalle</th>
                                <th scope="col" colSpan="1">Nombre del Mesero</th>
                                <th scope="col" colSpan="1">Mesa</th>
                                <th scope="col" colSpan="1">Estado</th>
                                <th scope="col" colSpan="1">Cambiar Estado</th>
                            </tr>
                        </thead>
                        
                                      <thead>
                                            <tr>
                                                <th scope="col">Cant</th>
                                                <th scope="col">Nombre</th>
                                            </tr>
                                        </thead>

                     {orders.map(element => {
                         console.log('elemente',element.data());
                         console.log('detalles',element.data().Order);
                        // let detailsOrder =  element.data().Order;
                            return (
                                <tbody>
                                    {element.data()?.Order?.map(item => {
                                        return (
                                            <table className="table table-dark">
                                                <tbody>
                                                    <tr>
                                                        <td> {item.cant}</td>
                                                        <td> {item.name}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                    ) ;
                                  })}  
                                    <td> {element.data().addDetalls}</td>
                                    <td> {element.data().nameWaiter}</td>
                                    <td>{element.data().numTable}</td>
                                    <td> {element.data().status}</td>
                                    <td> <button className='btn-warning btn-large'>Listo</button></td>
                                </tbody>
                            )
                        })} 

                    </table>
                </div>
            </article>
            <Link to='/'>
                <img id='back' src={require('../img/back.png')} alt=''></img>

            </Link>
        </div>
    );
   
    
}
                    

export default Cook;