import React from 'react';
import reset from '../img/reset1.png'
function Reset({ esBotonDeClic, keys, rest }) {
    return (
        <div
            onClick={() => rest(keys)}>

            <img id='add-items' src={reset} alt='Agregar items'></img>

        </div>
    );
}

export default Reset;