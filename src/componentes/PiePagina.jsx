import React from 'react';
import barraModoOscuro from '../img/Barra Decorativa.svg'
import barraModoClaro from '../img/Barra Decorativa Modo Claro.svg'
import '../estylos-css/PiePagina.css';
import { useContext } from 'react';
import ContextoLenguaje from '../context/ContextoLenguaje.jsx';
import ContextoModoOscuroClaro from '../context/ContextoModoOscuroClaro.jsx';

function PiePagina(){

    const {cambioModo} = useContext(ContextoModoOscuroClaro);
    const {lenguaje} = useContext(ContextoLenguaje);

    return(
        <footer className={`footer ${cambioModo == 'modoClaro'? 'modo-claro-primario':'modo-oscuro-primario'}`}>
            <di className={`contenedor-pie-pagina ${cambioModo == 'modoClaro'? 'contenedor-pie-pagina-modo-claro':'contenedor-pie-pagina-modo-oscuro'}`}>
                <p>{lenguaje.desarrollador}</p>
                
                <div className='container-barra'>
                    <img className='barra' src={cambioModo == 'modoClaro'? barraModoClaro:barraModoOscuro} alt='barra decorativa'/>
                </div>

                <p>{lenguaje.entorno}</p>
            </di>
        </footer>
    )
}

export default PiePagina;