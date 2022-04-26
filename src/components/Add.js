import React from 'react';
import { Link } from 'react-router-dom';
function Add(props) {
    return (
        <div>
             <Link to='/'>
                <img id='back' src={require('../img/iconAdd.png')} alt=''></img>
            </Link>
        </div>
    );
}

export default Add;