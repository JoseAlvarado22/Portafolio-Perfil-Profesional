import React from 'react';
import { createContext } from 'react';
import {useState} from 'react';

const ContextoModoOscuroClaro = createContext();

const ModoOscuroClaroProvider = ({children}) => {

    const esOscuro = true;
    const [modo, setModo] = useState(esOscuro);
    const [cambioModo, setCambioModo] = useState('modoOscuro');

    const eventoModo = () =>{
        
        if(modo === true){
            setModo(!modo);
            setCambioModo('modoClaro');
        }
        else{
            setModo(!modo);
            setCambioModo('modoOscuro');
        }

    }

    const datos = {cambioModo, eventoModo};

    return(
        <ContextoModoOscuroClaro.Provider value={datos}>
            {children}
        </ContextoModoOscuroClaro.Provider>
    )
}

export {ModoOscuroClaroProvider};
export default ContextoModoOscuroClaro;
