import React from 'react';
import iconAdd from '../img/iconAdd.png'
function Add({ keys, add }) {

    return (
        <figure onClick={() => add(keys)}>

            <img id='add-items' src={iconAdd} alt='Agregar items'></img>
            
        </figure>
    );
}

export default Add;