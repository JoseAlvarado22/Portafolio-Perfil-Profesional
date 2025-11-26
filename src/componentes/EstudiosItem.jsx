import React from 'react';
import '../estylos-css/EstudiosItem.css';
import { useContext } from 'react';
import ContextoModoOscuroClaro from '../context/ContextoModoOscuroClaro';

function EstudiosItem(props){

    const {cambioModo}=useContext(ContextoModoOscuroClaro);

    const documento = (link) =>{
        const anchoNavegador = window.innerWidth;
        // console.log(anchoNavegador);

        if(anchoNavegador < 650){
            return
        }
        else{
            window.open(link);
        }  
    }

    return(
        <div className={`conteiner-item ${cambioModo == 'modoClaro'? 'conteiner-item-modo-claro':'conteiner-item-modo-oscuro'}`} onClick={()=>documento(props.link)}>
            <div className='item-estudios'>
                <img className='item' alt='item' src={props.item} />
                <p>{props.estudio}</p>
            </div>

            <div className='item-drive'>
                <a href={props.link} target='_blank'><img className={`drive ${cambioModo === 'modoClaro'? 'drive-modo-claro':'drive-modo-oscuro'}`} alt='drive' src={props.drive} /></a>
            </div>

        </div>
    )
}

export default EstudiosItem;