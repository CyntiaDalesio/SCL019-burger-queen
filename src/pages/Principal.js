import React from 'react';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import Buttons from '../components/Buttons';
import Logo from '../components/Logo';
function Principal() {
    return (
        <div className='d-grid gap-2 col-5 mx-auto'>
           <Logo/>
            <Link  to='/Cook'>
                      <button className='btn-warning btn-large'>Cocinero</button>
            </Link>
            <Link  to='/Menu'>
            <button className='btn-warning btn-large' >Mesero</button>

            </Link>
           

           
        </div>
    );
}

export default Principal;