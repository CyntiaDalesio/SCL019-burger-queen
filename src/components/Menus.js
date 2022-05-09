import React, { Fragment } from 'react';
import Logo from './Logo.js';
import Buttons from './Buttons.js';
import { Link } from 'react-router-dom';
import Breakfast from './Breakfast.js';
import Lunch from './Lunch.js';
import Order from './Order.js';
import { useState, useEffect ,useContext } from 'react';
import { createOrder, getOrders } from '../Firebase/firebaseFunctions';
import {UserContent} from '../Usecontext/UserContent'

function Menus() {
//---------------------------
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);

    }
    const { cart, setCart } = useContext(UserContent);

//-------------------------------

const [nameClient, setNameClient] = useState(null);
const [addDetalls,setAddDetalls] = useState('');
const [numOrder,setNumOrder] = useState(null);
const [numTable, setNumTable] = useState(null);
const [nameWaiter,setNameWaiter] = useState(null);

// const nameClients = (name) =>{

//     setNameClient(name);

// }
const saveOrder = (e) => {
    console.log('saveOrder');
    e.preventDefault();
    createOrder(cart,nameClient,addDetalls,numOrder,numTable,nameWaiter);
  
}
useEffect( ()=>{

}, []);

const getOrdersData = async =>{

// const o = await getOrders();

// console.log(o.docs[0].data());

}
//------------------------------
    return (
        <Fragment>
            <header className='container d-flex bd-highlight'>
                <figure className="p-2 flex-fill bd-highlight">
                    <Link to='/'>
                        <Logo />
                    </Link>

                </figure>
                <div className="p-2 d-flex flex-fill bd-highlight justify-content-end">
                    <Link to='*'>

                        <Buttons name='Pedidos' />

                    </Link>
                </div>


            </header>

            <div className='container-fluid'>
                <div className='row d-flex justify-content-around'>
                    <div className='col-6 seleccion-Menu'>
                        <div className='row'>
                            <div className={toggleState === 1 ? 'col-6 tabs active-tabs' : ' col-6 tabs'}>

                                <button className="btn btn-warning" 
                                onClick={() => toggleTab(1)}
                                >Desayuno</button>

                            </div>
                            <div className={toggleState === 2 ? 'col-6 tabs active-tabs' : ' col-6 tabs'}>

                                <button className="btn btn-warning"
                                onClick={() => toggleTab(2)}

                                >Almuerzo</button>


                            </div>


                        </div>
                        <div className='content-tabs'>
                            <div className={toggleState === 1 ? 'active-content' : 'content'}>
                                <Breakfast />

                            </div>
                            <div className={toggleState === 2 ? 'active-content' : 'content'}>
                                <Lunch />



                            </div>
                        </div>

                    </div>
                    <form className='col-6 seleccion-Menu' onSubmit={saveOrder}>
                        <div className='d-flex flex-column  mb-3'>
                            <header className='p-2'>
                                <p>Pedido: 02020020</p>
                                <p>Mesero: Juan Perez</p>
                                <textarea className="form-control" placeholder='Nombre Cliente'
                                value={nameClient}
                                onChange={(e) =>setNameClient(e.target.value)}
                                ></textarea>
                                <p>Mesa</p>
                                <input type="number" id="tentacles" name="tentacles"
                                    min="1" max="10" defaultValue={1}
                                    onChange={setNumTable}
                                    ></input>
                            </header>
                            <section className="orderes d-flex flex-row  mb-3">

                                <Order />

                            </section>
                            <textarea className="form-control" placeholder='Agregar Detalle' value={addDetalls}
                            onChange={(e) =>setAddDetalls(e.target.value)}
                            ></textarea>

                            <footer className='p-2  d-flex justify-content-center'>
                                <Buttons name='Crear Pedido' />
                            </footer>
                        </div>


                    </form>
                </div>
            </div>

        </Fragment>
    );
}

export default Menus;