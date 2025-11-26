import React from 'react'
import '../estylos-css/MenuDesplegable.css'
import menu from '../img/menu.svg';
import circuloX from '../img/x-circle.svg'
import {useState} from 'react';
import { useContext } from 'react';
import ContextoLenguaje from '../context/ContextoLenguaje';
import ContextoModoOscuroClaro from '../context/ContextoModoOscuroClaro';
import modoOscuro from '../img/ModoOscuro.svg'
import modoClaro from '../img/ModoClaro.svg'

function MenuDesplegable(){

    const {cambioModo, eventoModo} = useContext(ContextoModoOscuroClaro);
    const {lenguaje, eventoLenguaje} = useContext(ContextoLenguaje);

    const [abierto, setAbierto] = useState(false);
    const [icono, setIcono] = useState(menu);

    const alternarMenu = () =>{
        setAbierto(!abierto);

        if(abierto){
            setIcono(menu);
        }
        else{
            setIcono(circuloX);
        }
    }

    const cerrarMenu = () =>{
        setAbierto(!abierto);

        if(abierto){
            setIcono(menu);
        }
        else{
            setIcono(circuloX);
        }
    }

    return(
            <div className='contenedor-menu-desplegable'>

                <div className='contenedor-leguaje'>
                    <select onChange={eventoLenguaje} className='selector-lenguaje'>
                        <option value='es'>ES</option>
                        <option value='en'>EN</option>
                    </select>
                </div>

                <img className='icono-modo-oscuro-claro' src={`${cambioModo == 'modoOscuro'? modoOscuro:modoClaro }`} onClick={eventoModo} />

                <img onClick={alternarMenu} className='hambuerguesa' src={icono} alt='menu' />

                <div className={`contenedor-lista ${abierto? 'menuAbierto' : ''}`}>
                    <ul className='lista'>
                        <li>
                            <a onClick={cerrarMenu} href={`#${lenguaje.inicio}`}>{lenguaje.inicio}</a>
                        </li>

                        <li>
                            <a onClick={cerrarMenu} href={`#${lenguaje.educacion}`}>{lenguaje.educacion}</a>
                        </li>

                        <li>
                            <a onClick={cerrarMenu} href={`#${lenguaje.tecnologias}`}>{lenguaje.tecnologias}</a>
                        </li>

                        <li>
                            <a onClick={cerrarMenu} href={`#${lenguaje.contacto}`}>{lenguaje.contacto}</a>
                        </li>
                    </ul>
                </div>
            </div>   
    )
}

export default MenuDesplegable;