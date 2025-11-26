import React from 'react';
import ContactoForm from './ContactoForm';
import '../estylos-css/Contacto.css'
import { useContext } from 'react';
import ContextoLenguaje from '../context/ContextoLenguaje';
import linkedin from '../img/Linkedin.svg'
import github from '../img/Github.svg'
import email from '../img/Email.svg'
import ContextoModoOscuroClaro from '../context/ContextoModoOscuroClaro';

function Contacto(){

    const {cambioModo} = useContext(ContextoModoOscuroClaro);
    const {lenguaje} = useContext(ContextoLenguaje);

    return(
        <section className={`seccion-contacto ${cambioModo == 'modoClaro'? 'modo-claro-segundario':'modo-oscuro-segundario'}`}>
            <div className={`container-contacto ${cambioModo == 'modoClaro'? 'container-contacto-modo-claro':'container-contacto-modo-oscuro'}`} id={`${lenguaje.contacto}`}>

                <h2>{lenguaje.tituloContacto}</h2>

                <div className='contenedor-elementos-contacto'>

                    <p>{lenguaje.parrafoContacto}</p>

                    <ContactoForm />

                    <div className={`contenedor-contacto-redes ${cambioModo == 'modoClaro'? 'contenedor-contacto-redes-modo-claro':''}`}>
                        <div>
                            <a href='https://www.linkedin.com/in/josé-carlos-alvarado-barragan' target='_blank'>
                                <img className={`iconos-contacto ${cambioModo == 'modoClaro'? 'iconos-contacto-modo-claro': 'iconos-contacto-modo-oscuro'}`} src={linkedin} alt='LinkedIn'/>
                            </a>
                        </div>
                    
                        <div>
                            <a href='https://github.com/JoseAlvarado22' target='_blank'>
                                <img className={`iconos-contacto ${cambioModo == 'modoClaro'? 'iconos-contacto-modo-claro': 'iconos-contacto-modo-oscuro'}`} src={github} alt='GitHub'/>
                            </a>
                        </div>

                        <div>
                            <a href='mailto:josecarlosalvaradobarragan@gmail.com'>
                                <img className={`iconos-contacto ${cambioModo == 'modoClaro'? 'iconos-contacto-modo-claro': 'iconos-contacto-modo-oscuro'}`} src={email} alt='Email'/>
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Contacto;