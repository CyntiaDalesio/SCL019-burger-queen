import React from 'react';
import { Link } from 'react-router-dom';
import iconDelete from '../img/iconDelete.png'

function Delete() {
    return (
        <div>
           
                <img id='delete-items' src={iconDelete} alt='Borrar item'></img>
          
        </div>
    );
}

export default Delete;