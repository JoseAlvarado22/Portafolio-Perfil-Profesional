import React from 'react';
import {createContext} from 'react';
import {useState} from 'react'; 

const ContextoLenguaje = createContext();

const LenguajeProvider = ({children}) =>{

    const lenguajeInicial = 'es';  

    const BdLenguajes = {
        'es':{
            inicio:'Inicio',
            educacion:'Educacion',
            tecnologias:'Tecnologias',
            contacto:'Contacto',
            nombre:'JOSE CARLOS ALVARADO BARRAGAN',
            profesion:'INGENIERO ELECTRONICO',
            descripcion:'Ingeniero Electrónico con formación en el Desarrollo FrontEnd con JavaScript, HTML5, CSS y React.js para la construcción de páginas web Responsivas e interactivas, utilizando Figma para la creación del prototipado y diseño UI/UX, manejo herramientas de control de versiones como Git y GitHub, aplicando metodologías ágiles y buenas prácticas de programación. Estudiante de Data Sciense + IA en el programa de ORACLE NEXT EDUCATION, Me caracterizo por mi capacidad de aprendizaje continuo, adaptabilidad y compromiso con la entrega de soluciones eficientes, escalables y de alta calidad.',
            perfilProfesional:'DESARROLLADOR FRONTEND | REACT - JAVASCRIPT',
            tituloEstudios:'ESTUDIOS',
            tituloTecnologias:'TECNOLOGIAS',
            tituloContacto:'CONTACTO',
            parrafoContacto:'Me encuentro abierto a oportunidades profesionales y colaboraciones en el área de Desarrollo FrontEnd. Contactame para mas informacion o para dialogar sobre como contribuir a tu equipo o proyecto.',
            desarrollador:'José Alvarado - Desarrollador FrontEnd - Reservados todos los derechos',
            entorno:'Desarrollado con React.js',
            estudioIngeniero:'Ingeniero Electrónico, Universidad popular del cesar- Valledupar – 2023',
            estudioMicrocontroladores:'Programación de microcontroladores PIC SENA - 2019',
            estudioGitGitHub:'Git y GitHub: Reporsitorios, Commit y Versiones Alura Latam – 2025',
            estudioIA:'IA: Explorando el potencial de las IA generativas + Ingenieria de prompt Alura Latam - 2025',
            estudioHTMLCSS:'HTML Y CSS (Clases, posicionamiento, Flexbox, Variables Css) - Alura Latam - 2025',
            estudioDataScience:'Ciencia de Datos + IA Oracle Next Education - Actualmente Cursando',
            itemLenguajes:'Lenguajes',
            itemBasesDatos:'Bases de Datos',
            itemDesarrollo:'Desarrollo',
            itemFrameworks:'Frameworks',
            itemHerramientas:'Herramientas',
            nombreFormulario:'Nombre',
            correoFormulario:'Correo',
            motivoFormulario:'Motivo',
            placeholderNombre:'Nombre Completo',
            placeholderCorreo:'Ejemplo@gmail.com',
            botonEnviar:'Enviar',
            placeholderMotivo:'Escribe tu mensaje aqui...'
        },
        'en':{
            inicio:'Home',
            educacion:'Education',
            tecnologias:'Technologies',
            contacto:'Contact',
            nombre:'JOSE CARLOS ALVARADO BARRAGAN',
            profesion:'ELECTRONIC ENGINEER',
            descripcion:'Electronic Engineer with training in FrontEnd Development with JavaScript, HTML5, CSS and React.js for the construction of Responsive and interactive web pages, using Figma for prototyping and UI/UX design, I handle version control tools such as Git and GitHub, applying agile methodologies and good programming practices. Student of Data Science + AI in the ORACLE NEXT EDUCATION program, I am characterized by my ability for continuous learning, adaptability and commitment to delivering efficient, scalable and high-quality solutions.',
            perfilProfesional:'FRONTEND DEVELOPER | REACT - JAVASCRIPT',
            tituloEstudios:'STUDIES',
            tituloTecnologias:'TECHNOLOGIES',
            tituloContacto:'CONTACT',
            parrafoContacto:'I am open to professional opportunities and collaborations in the FrontEnd Development area. Contact me for more information or to discuss how to contribute to your team or project.',
            desarrollador:'José Alvarado - FrontEnd Developer - All rights reserved',
            entorno:'Developed with React.js',
            estudioIngeniero:'Electronic Engineer, Universidad popular del cesar- Valledupar – 2023',
            estudioMicrocontroladores:'PIC microcontroller programming SENA - 2019',
            estudioGitGitHub:'Git and GitHub: Repositories, Commit and Versions Alura Latam – 2025',
            estudioIA:'AI: Exploring the potential of generative AIs + Prompt Engineering Alura Latam - 2025',
            estudioHTMLCSS:'HTML AND CSS (Classes, positioning, Flexbox, Css Variables) - Alura Latam - 2025',
            estudioDataScience:'Data Science + AI Oracle Next Education - Currently Studying',
            itemLenguajes:'Languages',
            itemBasesDatos:'Databases',
            itemDesarrollo:'Development',
            itemFrameworks:'Frameworks',
            itemHerramientas:'Tools',
            nombreFormulario:'Name',
            correoFormulario:'Email',
            motivoFormulario:'Reason',
            placeholderNombre:'Full Name',
            placeholderCorreo:'Example@gmail.com',
            botonEnviar:'Submit',
            placeholderMotivo:'Write your message here...'
        }
    }

    const [lenguaje, setLenguaje] = useState(BdLenguajes[lenguajeInicial]);

    const eventoLenguaje = (e) =>{
        if(e.target.value === 'es'){
            setLenguaje(BdLenguajes['es']);
        }
        else{
            setLenguaje(BdLenguajes['en']);
        }
    }

    const datos = {lenguaje, eventoLenguaje}

    return(
        <ContextoLenguaje.Provider value = {datos}>
            {children}
        </ContextoLenguaje.Provider>
    )
}

export {LenguajeProvider};
export default ContextoLenguaje;