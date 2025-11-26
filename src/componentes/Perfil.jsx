import React from 'react';
import cv from '../img/CV.png';
import barraDecorativaModoOscuro from '../img/Barra Decorativa.svg';
import barraDecorativaModoClaro from '../img/Barra Decorativa Modo Claro.svg'
import '../estylos-css/Perfil.css';
import iconoCv from '../img/cv.svg';
import iconoLinkedin from '../img/Linkedin.svg';
import iconoGitHub from '../img/Github.svg';
import {useContext} from 'react';
import ContextoLenguaje from '../context/ContextoLenguaje'; 
import ContextoModoOscuroClaro from '../context/ContextoModoOscuroClaro';

function Perfil(){

    const {cambioModo} = useContext(ContextoModoOscuroClaro);
    const {lenguaje} = useContext(ContextoLenguaje);

    return(
        <main className={`main ${cambioModo == 'modoClaro'? 'modo-claro-primario':'modo-oscuro-primario'}`}>
            <div className={`seccion-perfil ${cambioModo == 'modoClaro'? 'seccion-perfil-modo-claro':'seccion-perfil-modo-oscuro'}`} id={`${lenguaje.inicio}`}>
                <div className='container-img-nombre'>
                    <div className='container-imagen-perfil'>
                        <img className={`perfil ${cambioModo == 'modoClaro'? 'perfil-modo-claro':'perfil-modo-oscuro'}`} alt='Foto de perfil' src={cv}/>
                    </div>

                    <h1>{lenguaje.nombre}</h1>
                    <p>{lenguaje.perfilProfesional}</p>
                </div>

                <div className='container-profesion'>
                    <div className='container-ing'>
                        <h2>{lenguaje.profesion}</h2>
                        <img className='barra-decorativa' src={`${cambioModo === 'modoClaro'? barraDecorativaModoClaro:barraDecorativaModoOscuro}`} /> 
                    </div>

                    <p>{lenguaje.descripcion}</p>
                </div>

                <div className='container-iconos'>
                    <a href='https://drive.google.com/file/d/1vD98960ybK6906gkFpe-Lavh6mjRlxg4/view?usp=drive_link' target='_blank'>
                        <img className={`icono-cv iconos ${cambioModo == 'modoClaro'? 'iconos-modo-claro':'iconos-modo-oscuro'}`} alt='icono' src={iconoCv} />
                    </a>

                    <a href='https://www.linkedin.com/in/josé-carlos-alvarado-barragan' target='_blank'>
                        <img className={`icono-linkedin iconos ${cambioModo == 'modoClaro'? 'iconos-modo-claro':'iconos-modo-oscuro'}`} alt='icono' src={iconoLinkedin} />
                    </a>

                    <a href='https://github.com/JoseAlvarado22' target='_blank'>
                        <img className={`icono-github iconos ${cambioModo == 'modoClaro'? 'iconos-modo-claro':'iconos-modo-oscuro'}`} alt='icono' src={iconoGitHub} />
                    </a>
                </div>
            </div>
        </main>
    )
}

export default Perfil;