import React from 'react';
import EstudiosItem from './EstudiosItem';
import driveModoOscuro from '../img/Drive.svg';
import driveModoClaro from '../img/Drive Modo Claro.svg';
import proximoModoOscuro from '../img/Proximo.svg';
import proximoModoClaro from '../img/Proximo Modo Claro.svg';
import elipseModoOscuro from '../img/Ellipse.svg'
import elipseModoClaro from '../img/Ellipse Modo Claro.svg'
import '../estylos-css/Estudios.css';
import { useContext } from 'react';
import ContextoLenguaje from '../context/ContextoLenguaje';
import ContextoModoOscuroClaro from '../context/ContextoModoOscuroClaro';

function Estudios(){

    const {cambioModo}=useContext(ContextoModoOscuroClaro);
    const {lenguaje} = useContext(ContextoLenguaje);

    return(
        <section className={`seccion-estudios ${cambioModo == 'modoClaro'? 'modo-claro-segundario':'modo-oscuro-segundario'}`}>
            <div className={`container-estudios ${cambioModo == 'modoClaro'? 'container-estudios-modo-claro':'container-estudios-modo-oscuro'}`} id={`${lenguaje.educacion}`}>
                <h2>{lenguaje.tituloEstudios}</h2>

                <div className='contenedor-certificados'>
                    <EstudiosItem 
                        item={cambioModo == 'modoClaro'? elipseModoClaro:elipseModoOscuro}
                        drive={cambioModo == 'modoClaro'? driveModoClaro:driveModoOscuro}
                        estudio={lenguaje.estudioIngeniero}
                        link='https://drive.google.com/file/d/1CSM0aPe-PWm3kw1TkBdw2c2AVRpy9Uzy/view?usp=drive_link'
                    />

                    <EstudiosItem 
                        item={cambioModo == 'modoClaro'? elipseModoClaro:elipseModoOscuro}
                        drive={cambioModo == 'modoClaro'? driveModoClaro:driveModoOscuro}
                        estudio={lenguaje.estudioMicrocontroladores}
                        link='https://drive.google.com/file/d/10kj1vUD1sBc3rkhqhsePRF9jHjSVrQ4u/view?usp=drive_link'
                    />

                    <EstudiosItem 
                        item={cambioModo == 'modoClaro'? elipseModoClaro:elipseModoOscuro}
                        drive={cambioModo == 'modoClaro'? driveModoClaro:driveModoOscuro}
                        estudio={lenguaje.estudioGitGitHub}
                        link='https://drive.google.com/file/d/1x1p4gi4jp4rVWL-VxENYhRt6s2B3ij51/view?usp=drive_link'
                    /> 

                    <EstudiosItem 
                        item={cambioModo == 'modoClaro'? elipseModoClaro:elipseModoOscuro}
                        drive={cambioModo == 'modoClaro'? driveModoClaro:driveModoOscuro}
                        estudio={lenguaje.estudioIA}
                        link='https://drive.google.com/file/d/1CPvqiga5ekSReNsRoJKdJWl4A0B3DHBa/view?usp=drive_link'
                    />

                    <EstudiosItem 
                        item={cambioModo == 'modoClaro'? elipseModoClaro:elipseModoOscuro}
                        drive={cambioModo == 'modoClaro'? driveModoClaro:driveModoOscuro}
                        estudio={lenguaje.estudioHTMLCSS}
                        link='https://drive.google.com/file/d/1KjdJmZBczxBzmiRp8_Sc8kyfI15uw9u_/view?usp=drive_link'
                    />    

                    <EstudiosItem 
                        item={cambioModo == 'modoClaro'? elipseModoClaro:elipseModoOscuro}
                        drive={cambioModo == 'modoClaro'? proximoModoClaro:proximoModoOscuro}
                        estudio={lenguaje.estudioDataScience}
                    />
                </div>

                {/* <div className={`contenedor-ventana-modal ${modalAbierto === 'abierto'? 'contenedor-ventana-modal-abierto':'contenedor-ventana-modal-cerrado'}`}>
                    <img src={iconoCerrar} onClick={eventoModal} className='iconoCerrar' alt='cerrar' />
                    <img src={diplomaIngeniero} className='img-certificado' alt='certificado'/>
                </div> */}
                        
            </div>
        </section>
    )
}

export default Estudios;