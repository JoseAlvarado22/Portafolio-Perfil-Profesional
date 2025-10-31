import React from 'react';
import barraDecorativa from '../img/Barra Decorativa.svg'
import '../estylos-css/PiePagina.css';

function PiePagina(props){
    return(
        <di className="contenedor-pie-pagina">
            <p>{props.desarrollador}</p>
            
            <div className='container-barra'>
                <img className='barra' src={barraDecorativa} alt='barra decorativa'/>
            </div>

            <p>{props.entorno}</p>
        </di>
    )
}

export default PiePagina;