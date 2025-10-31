import React from 'react';
import menu from '../img/menu.svg';
import '../estylos-css/BarraNav.css';
import MenuDesplegable from './MenuDesplegable';

function BarraNav(props){
    return(
        <nav className='container-nav'>

            <MenuDesplegable 
                inicio={props.inicio}
                educacion={props.educacion}
                tecnologias={props.tecnologias}
                contacto={props.contacto}
            />

            <div className='contenedor-nav-menu-links'>
                <a href={`#${props.inicio}`}>{props.inicio}</a>
                <a href={`#${props.educacion}`}>{props.educacion}</a>
                <a href={`#${props.tecnologias}`}>{props.tecnologias}</a>
                <a href={`#${props.contacto}`} className='contacto'>{props.contacto}</a>
            </div>
        </nav>
    )
}

export default BarraNav;