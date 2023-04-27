import { useState } from "react";


export const useForm = ( initialForm = {}) => {

    const onResetForm = () =>{
        console.log('ResetForm estoy aca');
        setFormState( initialForm );
    }
    
    const [formState, setFormState] = useState( initialForm);

    

    const inputChange = ({target}) =>{
        const { name, value } = target;

        setFormState({
            ...formState,
            [ name ]: value
        })
    };

    return {
        ...formState,
        formState,
        inputChange,
        onResetForm
    };
}
