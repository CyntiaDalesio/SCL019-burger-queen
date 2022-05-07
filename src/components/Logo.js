import React from 'react';

function Logo(props) {
    return (
        <figure>
             <img id='food' src={require('../img/food.gif')} alt=''></img>
        </figure>
    );
}

export default Logo;