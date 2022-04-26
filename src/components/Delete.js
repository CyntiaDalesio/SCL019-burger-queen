import React from 'react';
import { Link } from 'react-router-dom';
function Delete(props) {
    return (
        <div>
             <Link to='/'>
                <img id='back' src={require('../img/iconDelete.png')} alt=''></img>
            </Link>
        </div>
    );
}

export default Delete;