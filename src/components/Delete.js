import React from 'react';
import { Link } from 'react-router-dom';
import iconDelete from '../img/iconDelete.png'

function Delete({texto,esBotonDeClic,manejarClic}) {
    return (
        <div>
             <Link to='/'>
                <img id='delete-items' src={iconDelete} alt='Borrar item'></img>
            </Link>
        </div>
    );

    // return(

    //     <button className={ esBotonDeClic ? 'button-Add-Items' : 'button-Delete-Items' }
    //     onClick={manejarClic}
    //     >
    //         {texto}
    //     {/* <img id='add-items' src={iconAdd} alt='Agregar items'></img> */}
    //     </button>        
    //         );
}

export default Delete;