import React, { Fragment } from 'react';
import data from '../data/menus.js';
import Logo from './Logo.js';
import Buttons from './Buttons.js';
import { Link } from 'react-router-dom';
import Breakfast from './Breakfast.js';
import Lunch from './Lunch.js';
import Order from './Order.js';
import Add from './Add.js';
import Delete from './Delete.js';
function Menus(props) {

    return (
        <Fragment>
            <div className='container d-flex bd-highlight'>
                <div className="p-2 flex-fill bd-highlight">
                    <Logo />
                </div>
                <div className="p-2 d-flex flex-fill bd-highlight justify-content-end">
                    <Link to='*'>

                        <Buttons name='Pedidos' />

                    </Link>
                </div>


            </div>

            <div className='container-fluid'>
                <div className='row d-flex justify-content-around'>
                    <div className='col-6 seleccion-Menu'>
                        <div className='row'>
                            <div className='col-6'>
                                <Link to='*'>
                                    <button className="btn btn-warning">Desayuno</button>
                                </Link>
                            </div>
                            <div className='col-6'>
                                <Link to='*'>
                                    <button className="btn btn-warning">Almuerzo</button>

                                </Link>
                            </div>


                        </div>
                        <div className='col'>
                            <Breakfast />

                        </div>
                        <div className='col'>
                            <Lunch />



                        </div>
                    </div>
                    <div className='col-6 seleccion-Menu'>
                        <div className='d-flex flex-column  mb-3'>
                            <div className='p-2'>
                                <p>Pedido: 02020020</p>
                                <p>Mesero: Juan Perez</p>
                                <textarea className="form-control" placeholder='Nombre Cliente'></textarea>
                                <p>Mesa</p>
                                <input type="number" id="tentacles" name="tentacles"
                                    min="1" max="10" defaultValue={1}></input>
                            </div>
                            <div className="orderes d-flex flex-row  mb-3">

                                <Order />

                            </div>
                            <div className='p-2  d-flex justify-content-center'>
                                <Buttons name='Crear Pedido' />
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </Fragment>
    );
}

export default Menus;