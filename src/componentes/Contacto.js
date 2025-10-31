import React from 'react';
import ContactoForm from './ContactoForm';
import '../estylos-css/Contacto.css'

function Contacto(props){
    return(
        <div className='container-contacto' id={`${props.contacto}`}>

            <h2>{props.titulo}</h2>

            <div className='contenedor-elementos-contacto'>

                <p>{props.parrafo}</p>

                <ContactoForm />

                <div className='contenedor-contacto-redes'>
                    <div>
                        <a href='https://www.linkedin.com/in/josé-carlos-alvarado-barragan' target='_blank'>
                            <img src={props.linkedin} alt='LinkedIn'/>
                        </a>
                    </div>
                
                    <div>
                        <a href='https://github.com/JoseAlvarado22' target='_blank'>
                            <img src={props.github} alt='GitHub'/>
                        </a>
                    </div>

                    <div>
                        <a href='mailto:josecarlosalvaradobarragan@gmail.com'>
                            <img src={props.email} alt='Email'/>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Contacto;