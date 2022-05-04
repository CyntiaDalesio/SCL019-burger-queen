import React from 'react';
import { Link } from 'react-router-dom';
import iconAdd from '../img/iconAdd.png'
function Add({texto,esBotonDeClic, manejarClic}) {
    // return (
    //     <div>
    //          <Link to='/'>
    //             <img id='add-items' src={iconAdd} alt='Agregar items'></img>
    //         </Link>
    //     </div>
    // );


    return(

<button className={ esBotonDeClic ? 'button-add-items' : 'button-reset-items' }
onClick={()=>manejarClic()}
>
    {texto}
{/* <img id='add-items' src={iconAdd} alt='Agregar items'></img> */}
</button>        
    );
}

export default Add;