import React from 'react';
import { Link } from 'react-router-dom';
function Footer(props) {
    return (
        <div>
            <Link to='/'>
                <img id='back' src={require('../img/back.png')} alt=''></img>
            </Link>
        </div>
    );
}

export default Footer;