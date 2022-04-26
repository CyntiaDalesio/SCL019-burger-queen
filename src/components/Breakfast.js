import React from 'react';
import data from '../data/menus.js';

function Breakfast(props) {
    return (
        <div>
            <span>

                {data.breakfast.map(element => {

                    return (<li className='list-group-item list-group-item-action'>{element.name} ---------{element.price} </li>)

                })}
            </span>
        </div>
    );
}

export default Breakfast;