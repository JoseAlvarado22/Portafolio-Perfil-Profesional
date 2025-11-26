import {useState} from 'react';

export const useForm = (initialForm, validacionForm) =>{
    const [form, setForm] = useState(initialForm);
    const [error, setError] = useState({});

    const eventoChange = (e) => {
        setForm({...form, [e.target.name]:e.target.value});
    };

    const eventoSubmit = (e) => {
        e.preventDefault();

        let errorsValidation = validacionForm(form);
        setError(errorsValidation);

        if (Object.keys(errorsValidation).length === 0) {
            
            let confirmacion = window.confirm('Quieres enviar los datos?');

            if(confirmacion == true){
                e.target.submit();
            }

            setForm(initialForm);
        }
 
    };

    return{
        form,
        error,
        eventoSubmit,
        eventoChange
    }
}