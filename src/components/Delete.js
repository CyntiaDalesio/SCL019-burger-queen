import React from 'react';
import iconDelete from '../img/iconDelete.png'

function Delete() {
    return (
        <figure>
           
                <img id='delete-items' src={iconDelete} alt='Borrar item'></img>
          
        </figure>
    );
}

export default Delete;