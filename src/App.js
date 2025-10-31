import './App.css';
import BarraNav from './componentes/BarraNav';
import Contacto from './componentes/Contacto';
import Estudios from './componentes/Estudios';
import Perfil from './componentes/Perfil';
import Tecnologias from './componentes/Tecnologias';
import linkedin from './img/Linkedin.svg'
import github from './img/Github.svg'
import email from './img/Email.svg'
import PiePagina from './componentes/PiePagina';

function App() {
  return (
    <div className="App">

      <header className='header'>
        <BarraNav 
          inicio='Inicio'
          educacion='Educacion'
          tecnologias='Tecnologias'
          contacto='Contacto'
        />
      </header>
      
      <main className='main'>
        <Perfil 
          inicio='Inicio'
          nombre='JOSE CARLOS ALVARADO BARRAGAN'
          profesion='INGENIERO ELECTRONICO'
          descripcion='Ingeniero Electrónico con formación en el Desarrollo FrontEnd 
          con JavaScript, HTML5, CSS y React.js para la construcción de páginas web 
          Responsivas e interactivas, utilizando Figma para la creación del prototipado 
          y diseño UI/UX, manejo herramientas de control de versiones como Git y GitHub, aplicando 
          metodologías ágiles y buenas prácticas de programación. Estudiante de Data 
          Sciense + IA en el programa de ORACLE NEXT EDUCATION, Me caracterizo por mi 
          capacidad de aprendizaje continuo, adaptabilidad y compromiso con la entrega 
          de soluciones eficientes, escalables y de alta calidad.'
          perfilProfesional='DESARROLLADOR FRONTEND | REACT - JAVASCRIPT'
        />
      </main>
      
      <section className='seccion-estudios'>
        <Estudios
          educacion='Educacion' 
          titulo='ESTUDIOS'
        />
      </section>

      <section className='seccion-tecnoligias'>
        <Tecnologias 
          tecnologias='Tecnologias'
          titulo='TECNOLOGIAS'
        />
      </section>

      <section className='seccion-contacto'>
        <Contacto 
          contacto='Contacto'
          titulo='CONTACTO'
          parrafo='Me encuentro abierto a oportunidades profesionales y 
          colaboraciones en el área de Desarrollo FrontEnd. Contactame para 
          mas informacion o para dialogar sobre como contribuir a tu equipo o proyecto.'
          linkedin={linkedin}
          github={github}
          email={email}
        />
      </section>

      <footer className='footer'>
        <PiePagina 
          desarrollador='&copy;José Alvarado - Desarrollador FrontEnd - Reservados todos los derechos'
          entorno='Desarrollado con React.js'
        />
      </footer>

    </div>
  );
}

export default App;
