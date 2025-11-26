import './App.css';
import BarraNav from './componentes/BarraNav';
import Contacto from './componentes/Contacto';
import Estudios from './componentes/Estudios';
import Perfil from './componentes/Perfil';
import Tecnologias from './componentes/Tecnologias';
import PiePagina from './componentes/PiePagina';
import { LenguajeProvider } from './context/ContextoLenguaje';
import { ModoOscuroClaroProvider } from './context/ContextoModoOscuroClaro';

function App() {
  return (
    <div className="App">

      <LenguajeProvider>
        <ModoOscuroClaroProvider>
          <BarraNav/>
          
          <Perfil/>
          
          <Estudios/>

          <Tecnologias/>
    
          <Contacto/>
      
          <PiePagina/>
        </ModoOscuroClaroProvider>
      </LenguajeProvider>

    </div>
  )
}

export default App
