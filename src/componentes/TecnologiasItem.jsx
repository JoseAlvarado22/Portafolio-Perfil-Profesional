import React from "react";
import '../estylos-css/TecnologiasItem.css';

function TecnologiasItem(props){

    return(
        <div className='container-tecnologias-item'>

            <h3>{props.item}</h3>

            <div className="contenedor-imagen">
                <img className="imagen" src={props.imagen} alt='leguajes' />
            </div>
            
            <div className="contenedor-barra">
                <img className="barra" src={props.barra} alt='barra decorativa' />
            </div>

        </div>
    )
}

export default TecnologiasItem;