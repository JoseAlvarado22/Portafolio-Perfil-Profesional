import React from 'react';
import TecnologiasItem from './TecnologiasItem';
import lenguajes from '../img/Iconos Leguajes.svg'
import barra from '../img/Barra Decorativa.svg'
import '../estylos-css/Tecnologias.css';
import bd from '../img/Icono BD.svg'
import frameworks from '../img/Iconos Framework.svg'
import herramientas from '../img/Iconos Herramientas.svg'
import desarrollo from '../img/Iconos Desarrollo.svg'

function Tecnologias(props){
    return(
        <div className='container-tecnologias' id={`${props.tecnologias}`}>

            <h2>{props.titulo}</h2>

            <div className='contenedor-componentes-tec'>

                <TecnologiasItem 
                    item='Lenguajes'
                    imagen={lenguajes}
                    barra={barra}
                />

                <TecnologiasItem 
                    item='Bases de Datos'
                    imagen={bd}
                    barra={barra}
                />

                <TecnologiasItem 
                    item='Desarrollo'
                    imagen={desarrollo}
                    barra={barra}
                />

                <TecnologiasItem 
                    item='Frameworks'
                    imagen={frameworks}
                    barra={barra}
                />

                <TecnologiasItem 
                    item='Herramientas'
                    imagen={herramientas}
                    barra={barra}
                />
            </div>

        </div>
    )
}

export default Tecnologias; 