import React from 'react';
import TecnologiasItem from './TecnologiasItem';
import lenguajesModoOscuro from '../img/Iconos Leguajes.svg'
import lenguajesModoClaro from '../img/Iconos Leguajes Modo Claro.svg'
import barraModoOscuro from '../img/Barra Decorativa.svg'
import barraModoClaro from '../img/Barra Decorativa Modo Claro.svg'
import '../estylos-css/Tecnologias.css';
import bdModoOscuro from '../img/Icono BD.svg'
import bdModoClaro from '../img/Icono BD Modo Claro.svg'
import frameworksModoOscuro from '../img/Iconos Framework.svg'
import frameworksModoClaro from '../img/Iconos Framework Modo Claro.svg'
import herramientasModoOscuro from '../img/Iconos Herramientas.svg'
import herramientasModoClaro from '../img/Iconos Herramientas Modo Claro.svg'
import desarrolloModoOscuro from '../img/Iconos Desarrollo.svg'
import desarrolloModoClaro from '../img/Iconos Desarrollo Modo Claro.svg'
import { useContext } from 'react';
import ContextoLenguaje from '../context/ContextoLenguaje';
import ContextoModoOscuroClaro from '../context/ContextoModoOscuroClaro';

function Tecnologias(){

    const {cambioModo} = useContext(ContextoModoOscuroClaro);
    const {lenguaje} = useContext(ContextoLenguaje);

    return(
        <section className={`seccion-tecnoligias ${cambioModo == 'modoClaro'? 'modo-claro-primario':'modo-oscuro-primario'}`}>
            <div className={`container-tecnologias ${cambioModo == 'modoClaro'? 'container-tecnologias-modo-claro':'container-tecnologias-modo-oscuro'}`} id={`${lenguaje.tecnologias}`}>

                <h2>{lenguaje.tituloTecnologias}</h2>

                <div className='contenedor-componentes-tec'>

                    <TecnologiasItem 
                        item={lenguaje.itemLenguajes}
                        imagen={cambioModo == 'modoClaro'? lenguajesModoClaro:lenguajesModoOscuro}
                        barra={cambioModo == 'modoClaro'? barraModoClaro:barraModoOscuro}
                    />

                    <TecnologiasItem 
                        item={lenguaje.itemBasesDatos}
                        imagen={cambioModo == 'modoClaro'? bdModoClaro:bdModoOscuro}
                        barra={cambioModo == 'modoClaro'? barraModoClaro:barraModoOscuro}
                    />

                    <TecnologiasItem 
                        item={lenguaje.itemDesarrollo}
                        imagen={cambioModo == 'modoClaro'? desarrolloModoClaro:desarrolloModoOscuro}
                        barra={cambioModo == 'modoClaro'? barraModoClaro:barraModoOscuro}
                    />

                    <TecnologiasItem 
                        item={lenguaje.itemFrameworks}
                        imagen={cambioModo == 'modoClaro'? frameworksModoClaro:frameworksModoOscuro}
                        barra={cambioModo == 'modoClaro'? barraModoClaro:barraModoOscuro}
                    />

                    <TecnologiasItem 
                        item={lenguaje.itemHerramientas}
                        imagen={cambioModo == 'modoClaro'? herramientasModoClaro:herramientasModoOscuro}
                        barra={cambioModo == 'modoClaro'? barraModoClaro:barraModoOscuro}
                    />
                </div>

            </div>
        </section>
    )
}

export default Tecnologias; 