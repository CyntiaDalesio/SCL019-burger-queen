import React from 'react';
import { Link } from 'react-router-dom';

function Error(props) {
    return (
        <div className='PagError'>
            <img id='Error' src={require('../img/Error.png')} alt=''></img>
            <h1>¡Página no encontrada! </h1>
            <Link to='/'>
            <img id ='back' src={require('../img/back.png')} alt=''></img>

            </Link>
        </div>
    );
}

export default Error;