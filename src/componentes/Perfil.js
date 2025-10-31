import React from 'react';
import cv from '../img/CV.png';
import barraDecorativa from '../img/Barra Decorativa.svg';
import '../estylos-css/Perfil.css';
import iconoCv from '../img/cv.svg';
import iconoLinkedin from '../img/Linkedin.svg';
import iconoGitHub from '../img/Github.svg';

function Perfil(props){
    return(
        <div className='seccion-perfil' id={`${props.inicio}`}>
            <div className='container-img-nombre'>
                <div className='container-imagen-perfil'>
                    <img className='perfil' alt='Foto de perfil' src={cv}/>
                </div>

                <h1>{props.nombre}</h1>
                <p>{props.perfilProfesional}</p>
            </div>

            <div className='container-profesion'>
                <div className='container-ing'>
                    <h2>{props.profesion}</h2>
                    <img className='barra-decorativa' src={barraDecorativa} /> 
                </div>

                <p>{props.descripcion}</p>
            </div>

            <div className='container-iconos'>
                <a href='https://drive.google.com/file/d/1vD98960ybK6906gkFpe-Lavh6mjRlxg4/view?usp=drive_link' target='_blank'>
                    <img className='icono-cv iconos' alt='icono' src={iconoCv} />
                </a>

                <a href='https://www.linkedin.com/in/josé-carlos-alvarado-barragan' target='_blank'>
                    <img className='icono-linkedin iconos' alt='icono' src={iconoLinkedin} />
                </a>

                <a href='https://github.com/JoseAlvarado22' target='_blank'>
                    <img className='icono-github iconos' alt='icono' src={iconoGitHub} />
                </a>
            </div>
        </div>
    )
}

export default Perfil;