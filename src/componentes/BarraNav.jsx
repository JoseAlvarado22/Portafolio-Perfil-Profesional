import React from 'react';
import '../estylos-css/BarraNav.css';
import MenuDesplegable from './MenuDesplegable';
import { useContext } from 'react';
import ContextoLenguaje from '../context/ContextoLenguaje';
import ContextoModoOscuroClaro from '../context/ContextoModoOscuroClaro';
import modoOscuro from '../img/ModoOscuro.svg'
import modoClaro from '../img/ModoClaro.svg'

function BarraNav(){

    const { cambioModo, eventoModo } = useContext(ContextoModoOscuroClaro);
    const {lenguaje, eventoLenguaje} = useContext(ContextoLenguaje);
    
    return(
        <header className={`header ${cambioModo == 'modoClaro'? 'header-modo-claro':'header-modo-oscuro'}`}>
            <nav className='container-nav'>

                <MenuDesplegable/>

                <div className='contenedor-nav-menu-links'>
                    <div className='contenedor-leguaje'>
                        <select onChange={eventoLenguaje} className='selector-lenguaje' >
                            <option value='es'>ES</option>
                            <option value='en'>EN</option>
                        </select>
                    </div>

                    <img className='icono-modo-oscuro-claro' src={`${cambioModo == 'modoOscuro'? modoOscuro:modoClaro }`} onClick={eventoModo} />

                    <a href={`#${lenguaje.inicio}`}>{lenguaje.inicio}</a>
                    <a href={`#${lenguaje.educacion}`}>{lenguaje.educacion}</a>
                    <a href={`#${lenguaje.tecnologias}`}>{lenguaje.tecnologias}</a>
                    <a href={`#${lenguaje.contacto}`} className='contacto'>{lenguaje.contacto}</a>
                </div>
            </nav>
        </header>
    )
}

export default BarraNav;