import React from 'react';

function Buttons({name}) {
    return (
        <div>
             <button className='btn-order' type={ name==='Crear Pedido'? 'submit' : 'button'}>{name}</button>
        </div>
    );
}

export default Buttons;