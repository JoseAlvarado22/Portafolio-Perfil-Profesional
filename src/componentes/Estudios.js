import React from 'react';
import EstudiosItem from './EstudiosItem';
import drive from '../img/Drive.svg';
import proximo from '../img/Proximo.svg';
import elipse from '../img/Ellipse.svg'
import '../estylos-css/Estudios.css';

function Estudios(props){
    return(
        <div className='container-estudios' id={`${props.educacion}`}>
            <h2>{props.titulo}</h2>

            <div className='contenedor-certificados'>
                <EstudiosItem 
                    item={elipse}
                    drive={drive}
                    estudio='Ingeniero Electrónico, Universidad popular del cesar- Valledupar – 2023'
                    link='https://drive.google.com/file/d/1CSM0aPe-PWm3kw1TkBdw2c2AVRpy9Uzy/view?usp=drive_link'
                />

                <EstudiosItem 
                    item={elipse}
                    drive={drive}
                    estudio='Programación de microcontroladores PIC SENA - 2019'
                    link='https://drive.google.com/file/d/10kj1vUD1sBc3rkhqhsePRF9jHjSVrQ4u/view?usp=drive_link'
                />

                <EstudiosItem 
                    item={elipse}
                    drive={drive}
                    estudio='Git y GitHub: Reporsitorios, Commit y Versiones Alura Latam – 2025'
                    link='https://drive.google.com/file/d/1x1p4gi4jp4rVWL-VxENYhRt6s2B3ij51/view?usp=drive_link'
                /> 

                <EstudiosItem 
                    item={elipse}
                    drive={drive}
                    estudio='IA: Explorando el potencial de las IA generativas + Ingenieria de prompt Alura Latam - 2025'
                    link='https://drive.google.com/file/d/1CPvqiga5ekSReNsRoJKdJWl4A0B3DHBa/view?usp=drive_link'
                />

                <EstudiosItem 
                    item={elipse}
                    drive={drive}
                    estudio='HTML Y CSS (Clases, posicionamiento, Flexbox, Variables Css) - Alura Latam - 2025'
                    link='https://drive.google.com/file/d/1KjdJmZBczxBzmiRp8_Sc8kyfI15uw9u_/view?usp=drive_link'
                />    

                <EstudiosItem 
                    item={elipse}
                    drive={proximo}
                    estudio='Data Science + IA Oracle Next Education - Actualmente Cursando'
                />
            </div>
                     
        </div>
    )
}

export default Estudios;