import React, { Fragment } from 'react';
import data from '../data/menus.js';
import Logo from './Logo.js';
function Menus(props) {

    return (
        <Fragment>
            <div className='Container'>
            <div className="d-flex flex-row bd-highlight">
                {/* <div className="p-2 bd-highlight">
                    <img id='food' src={require('../img/foot.png')} alt=''></img>
                </div> */}
                <Logo />
                <div className="p-2 bd-highlight">
                    <button className="btn btn-warning">Pedidos</button>
                </div>

            </div>
            </div>
           

            <div className='row breakfast-lunch'>
                <div className='col-6'>
                    <div className='selection'>
                        <button className="btn btn-warning Des">Desayuno</button>
                        <button className="btn btn-warning Des">Almuerzo</button>
                    </div>


                    <div className='col'>

                        <span>

                            {data.breakfast.map(element => {

                                return (<li className='list-group-item list-group-item-action'>{element.name} ---------{element.price} </li>)

                            })}
                        </span>
                    </div>
                    <div className='col'>

                        <span>

                            {data.lunch.map(element => {

                                return (<li className='list-group-item list-group-item-action'>{element.name} ------- {element.price} </li>)

                            })}
                        </span>


                    </div>
                </div>

                <div className='col'>
                    <p>Pedido: 02020020</p>
                    <p>Mesero: Juan Perez</p>
                    <p>Cliente: Melisa Lara</p>
                </div>
            </div>

        </Fragment>
    );
}

export default Menus;