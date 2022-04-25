import React from 'react';
import Menu from './Menu';
import { Link } from 'react-router-dom';
function Principal() {
    return (
        <div className='d-grid gap-2 col-5 mx-auto'>
            <img id ='food' src={require('../img/foot.png')} alt=''></img>
            <Link to='/Cook'>
            <button className="btn btn-warning">Cocinero</button>
            </Link>
            <Link to='/Menu'>
            <button className="btn btn-warning">Mesero</button>
            </Link>
           

           
        </div>
    );
}

export default Principal;