import React from 'react';
import reset from '../img/reset1.png'
function Reset({ keys, rest }) {
    return (
        <figure onClick={() => rest(keys)}>

            <img id='add-items' src={reset} alt='Agregar items'></img>

        </figure>
    );
}

export default Reset;