import React from 'react'
import '../estylos-css/MenuDesplegable.css'
import menu from '../img/menu.svg';
import circuloX from '../img/x-circle.svg'
import {useState} from 'react';

function MenuDesplegable(props){

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
            <img onClick={alternarMenu} className='hambuerguesa' src={icono} alt='menu' />

            <div className={`contenedor-lista ${abierto? 'menuAbierto' : ''}`}>
                <ul className='lista'>
                    <li>
                        <a onClick={cerrarMenu} href={`#${props.inicio}`}>{props.inicio}</a>
                    </li>

                    <li>
                        <a onClick={cerrarMenu} href={`#${props.educacion}`}>{props.educacion}</a>
                    </li>

                    <li>
                        <a onClick={cerrarMenu} href={`#${props.tecnologias}`}>{props.tecnologias}</a>
                    </li>

                    <li>
                        <a onClick={cerrarMenu} href={`#${props.contacto}`}>{props.contacto}</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MenuDesplegable;