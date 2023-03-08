import React, { useState, useEffect, useContext } from "react";
import { login } from "../../../services/user.service";
import swal from 'sweetalert';

import { Link, useNavigate } from "react-router-dom";
import LogoEscape from "@/assets/logotype/logo404.svg";
import LogoFactoria from "@/assets/logotype/factoria.svg";
import { FactoriaLogo, ContainerLogin, LoginMain, ToAction, StyledForm, GameLogo } from "./loginStyled";
import { UserContext } from "../../../contexts/UserContext";
import Footer from "../../../components/admin/footer/FooterAdmin"

const LoginAdmin = () => {

    const { userStorage, setUserStorage } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleLogin = async (formData) => {
        
        try {
            const { data } = await login(formData);
            setUserStorage(data);
            navigate('/mi-admin');
        }
        catch (error) {

            //manejo de errores

            if(error.response.status == 400){
                swal(error.response.data.error);
            }
            if(error.response.status == 422){
                swal(error.response.data.error);
            }
        }        
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const loginData = {
            email: email,
            password: password,
        };

        handleLogin(loginData);
    };

    return (
        <ContainerLogin>
            <FactoriaLogo>
                <img src={LogoFactoria}></img>
            </FactoriaLogo>
            <LoginMain>
                <GameLogo>
                    <img src={LogoEscape}></img>
                </GameLogo>
                <ToAction>
                    Por favor, ingresa tus credenciales para acceder a tu cuenta
                </ToAction>
                <StyledForm>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="">Correo electrónico</label>
                            <input 
                                type="email"
                                id="email" 
                                placeholder="name@example.com" 
                                onChange={handleEmailChange} 
                                // value={email} para limpiar los campos?
                                required
                            />
                            <label htmlFor="" >Contraseña</label>
                            <input 
                                type="password" 
                                id="password"
                                placeholder="**********" 
                                onChange={handlePasswordChange}
                                required 
                            />
                                <button type="submit">Ingresar </button>
                        </form>
                    </div>
                </StyledForm>
            </LoginMain>
            <Footer />
        </ContainerLogin >
    );
};

export default LoginAdmin;

