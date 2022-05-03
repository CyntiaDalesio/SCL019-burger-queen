import React from 'react';
import data from '../data/menus.json';
import Add from './Add';
import Delete from './Delete';
function Lunch(props) {
    const select = (id) =>{
        console.log('el id es:',id);
    }
    return (
        <div>
            <span>

                {data.lunch.map(element => {

                    return (
                        <div className="">
                            
                            <li className='list-group-item list-group-item-action' onClick={() =>select(element.id)}>{element.name} ------- {element.price} </li>
                            
                        </div>
                    )

                })}
            </span>
        </div>
    );
}

export default Lunch;