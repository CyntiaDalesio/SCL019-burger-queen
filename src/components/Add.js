import React from 'react';
import iconAdd from '../img/iconAdd.png'
function Add({  esBotonDeClic, keys, add }) {

    return (
        <figure className={esBotonDeClic ? 'button-Add-Items' : 'button-reset-items'}
            onClick={() => add(keys)}>

            <img id='add-items' src={iconAdd} alt='Agregar items'></img>

        </figure>
    );
}

export default Add;