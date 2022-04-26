import React from 'react';
import data from '../data/menus.js';
import Add from './Add';
import Delete from './Delete';
function Lunch(props) {
    return (
        <div>
            <span>

                {data.lunch.map(element => {

                    return (
                        <div className="">
                            
                            <li className='list-group-item list-group-item-action'>{element.name} ------- {element.price} </li>
                            
                        </div>
                    )

                })}
            </span>
        </div>
    );
}

export default Lunch;