import React from 'react';
import '../estylos-css/EstudiosItem.css';

function EstudiosItem(props){

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
            <div className='conteiner-item' onClick={()=>documento(props.link)}>
            <div className='item-estudios'>
                <img className='item' alt='item' src={props.item} />
                <p>{props.estudio}</p>
            </div>

            <div className='item-drive'>
                <a href={props.link} target='_blank'><img className='drive' alt='drive' src={props.drive} /></a>
            </div>
        </div>
    )
}

export default EstudiosItem;