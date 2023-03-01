import React, { useState, useEffect, useContext } from "react";
import { login } from "../../../services/user.service";
import { Link } from "react-router-dom";
import LogoEscape from "@/assets/logotype/logo404.svg"
import { ContainerLogin, LoginMain, ToAction, StyledForm, GameLogo } from "./loginStyled";
import { UserContext } from "../../../contexts/UserContext";

const LoginAdmin = () => {

    const { userStorage, setUserStorage } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleLogin = async (formData) => {
        const { data } = await login(formData);
        //recibe el usuario y lo guarda en el local storage
        setUserStorage(data.user)
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
                            <label htmlFor="" >Correo electrónico</label>
                            <input type="email" placeholder="name@example.com" onChange={handleEmailChange} />
                            <label htmlFor="" >Contraseña</label>
                            <input type="password" placeholder="**********" onChange={handlePasswordChange} />
                            <button type="submit">Ingresar </button>
                        </form>
                    </div>
                </StyledForm>
            </LoginMain>
        </ContainerLogin>
    );
};

export default LoginAdmin;

