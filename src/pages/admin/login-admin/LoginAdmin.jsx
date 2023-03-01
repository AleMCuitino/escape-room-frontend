import React, { useState, useEffect, useContext } from "react";
import { login } from "../../../services/user.service";
import { Link } from "react-router-dom";
import { StyledForm } from "./loginStyled";
import { UserContext } from "../../../contexts/UserContext";

const LoginAdmin = () => {

    const {userStorage, setUserStorage} = useContext(UserContext);
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
        <StyledForm>
            <form
                onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                    maxWidth: "500px",
                }}
            >
                
                <label htmlFor="">Email</label>
                <input type="email" onChange={handleEmailChange} />
                <label htmlFor="">password</label>
                <input type="password" onChange={handlePasswordChange} />
                <button type="submit">Ingresar </button>                
            </form>
        </StyledForm>
    );
};

export default LoginAdmin;

