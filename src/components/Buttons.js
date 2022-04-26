import React from 'react';

function Buttons({name}) {
    return (
        <div>
             <button className='btn-order'>{name}</button>
        </div>
    );
}

export default Buttons;