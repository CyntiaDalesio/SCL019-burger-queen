import React, { useEffect, useState } from 'react';
import Logo from '../components/Logo';
import { getOrders, changeStatusReady } from '../Firebase/firebaseFunctions';
import { Link } from 'react-router-dom';
function Cook(props) {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getOrdersData();
    }, []);

    const getOrdersData = async () => {

        const p = await getOrders();

        setOrders(p.docs);
    }

    const changeStatus = async (element) => {
        console.log('elemento clicleado', element);
        const changeStatus = await changeStatusReady(element);
    }
    return (
        <div>
            <Link to='/'>
                <Logo />
            </Link>

            <article className='d-flex align-items-start'>
                <div className="">
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col" colSpan="1">Pedidos</th>
                                <th scope="col" colSpan="1">Detalle</th>
                                <th scope="col" colSpan="1">Nombre del Mesero</th>
                                <th scope="col" colSpan="1">Mesa</th>
                                <th scope="col" colSpan="1">Estado</th>
                                <th scope="col" colSpan="1">Cambiar Estado</th>
                            </tr>
                        </thead>

                        <thead>
                            <tr>
                                {/* <th scope="col">Cant</th> */}
                                <th scope="col">Nombre</th>
                            </tr>

                        </thead>

                        {orders.map(element => {
                            //  console.log('elemente',element.data());
                            //  console.log('detalles',element.data().Order);
                            // let detailsOrder =  element.data().Order;
                            return (
                                <tbody>
                                    {element.data()?.Order?.map(item => {
                                        return (
                                            <table className="table table-dark">
                                                <tbody>
                                                    <td>
                                                        <td> {item.cant}</td>
                                                        <td> {item.name}</td>
                                                    </td>

                                                </tbody>
                                            </table>
                                        );
                                    })}
                                    <td> {element.data().addDetalls}</td>
                                    <td> {element.data().nameWaiter}</td>
                                    <td>{element.data().numTable}</td>
                                    <td> {element.data().numTable}</td>
                                    <td> {element.data().status}</td>
                                    <td> <button className='btn-warning btn-large' onClick={() => changeStatus(element.id)}>Listo</button></td>
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