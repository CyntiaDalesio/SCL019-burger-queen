import React from 'react';
import { Link } from 'react-router-dom';
import iconAdd from '../img/iconAdd.png'
function Reset({texto,esBotonDeClic,keys,rest}) {
    // return (
    //     <div>
    //          <Link to='/'>
    //             <img id='add-items' src={iconAdd} alt='Agregar items'></img>
    //         </Link>
    //     </div>
    // );


    return(

<button className={ esBotonDeClic ? 'button-Add-Items' : 'button-reset-items' }
onClick={()=>rest(keys)}
>
    {texto}
{/* <img id='add-items' src={iconAdd} alt='Agregar items'></img> */}
</button>        
    );
}

export default Reset;