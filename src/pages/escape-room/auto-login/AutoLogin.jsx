import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { UserContext } from '../../../contexts/UserContext';
import { login } from '../../../services/user.service';


const AutoLogin = () => {

    const { userStorage, setUserStorage } = useContext(UserContext);
    
    const navigate = useNavigate();
    
    const { email } = useParams();
    const { name } = useParams();

    const [errors, setErrors] = useState('')

    const handleLogin = async () => {


        const formData = {
            email: email,
            password: name,
        }
        
        try {

            const { data } = await login(formData);
            setUserStorage(data)
            navigate('/home')
            
        }
        catch (error) {

            //manejo de errores

            if(error.response.status == 400){
                setErrors(error.response.data.error)
            }
            if(error.response.status == 422){
                setErrors(error.response.data.message)
            }
        }
    };
    useEffect(() => {

        handleLogin();
    }, [])
    

    return (
        <div>
            <p>{errors ? errors : null}</p>
        </div>
    )
}

export default AutoLogin