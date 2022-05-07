import React from 'react';
import reset from '../img/reset1.png'
function Reset({ texto, esBotonDeClic, keys, rest }) {
    return (
        <div className={esBotonDeClic ? 'button-Add-Items' : 'button-reset-items'}
            onClick={() => rest(keys)}>

            <img id='add-items' src={reset} alt='Agregar items'></img>

        </div>
    );
}

export default Reset;