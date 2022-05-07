import React from 'react';
import { Link } from 'react-router-dom';
function Footer(props) {
    return (
        <footer>
            <Link to='/'>
                <img id='back' src={require('../img/back.png')} alt=''></img>
            </Link>
        </footer>
    );
}

export default Footer;