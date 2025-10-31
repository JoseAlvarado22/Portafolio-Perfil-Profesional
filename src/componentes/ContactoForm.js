import React from 'react';
import '../estylos-css/ContactoForm.css'
import {useForm} from '../hook/useForm';


const initialForm = {
    Nombre:'',
    Email:'',
    Motivo:''
};

const validacionForm = (form) =>{
    let err = {};

    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;  // expresion regular para validar que el campo solo contenga texto y deje pasar algunos acentos en la cadena de texto
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;  // expresion regular para validar que se ingrese un correo electronico valido, que contenga la @ y el (.com)
    let regexComments = /^.{1,255}$/; // expresion regular para validar que el texto escrito no sobrepase los 255 caracteres

    if(!form.Nombre.trim()){
        err.Nombre = 'El campo "Nombre" es requerido'
    }else if(!regexName.test(form.Nombre.trim())){
        err.Nombre = 'El campo "Nombre" solo acepta letas y espacios en blanco'
    }

    if(!form.Email.trim()){
        err.Email = 'El campo "email" es requerido'
    }else if(!regexEmail.test(form.Email.trim())){
        err.Email = 'El campo "Email" solo acepta correos validos'
    }

    if(!form.Motivo.trim()){
        err.Motivo = 'El campo "comentario" es requerido'
    }else if(!regexComments.test(form.Motivo.trim())){
        err.Motivo = 'El campo "comentario" solo acepta 255 caracteres maximo'
    }

    return err
};

function ContactoForm(){

        const {form, error, eventoChange, eventoSubmit} = useForm(initialForm, validacionForm);
    

    return(
        <div className='contenedor-formulario'>

            <form className='formulario' action="https://formspree.io/f/manldnor" method="POST" target='_blank' onSubmit={eventoSubmit}>

                <label htmlFor='nombre'>Nombre:</label>
                <input id='nombre' name='Nombre' type='text' placeholder='Nombre Completo' value={form.Nombre} onChange={eventoChange} required/>
                {error.Nombre && <p id='error'>{error.Nombre}</p>}

                <label htmlFor='email'>Correo:</label>
                <input id='email' name='Email' type='email' placeholder='Ejemplo@gmail.com' value={form.Email} onChange={eventoChange} required/>
                {error.Email && <p id='error'>{error.Email}</p>}

                <label htmlFor='motivo'>Motivo:</label>
                <textarea id='motivo' name='Motivo' placeholder='Escribe tu mensaje aqui...' value={form.Motivo} onChange={eventoChange} required></textarea>
                {error.Motivo && <p id='error'>{error.Motivo}</p>}

                <button className='enviar' type='submit'>Enviar</button>
            </form>

        </div>
    )
}

export default ContactoForm;