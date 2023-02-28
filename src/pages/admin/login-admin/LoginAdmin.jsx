import React, { useState, useEffect } from "react";
import { register } from "../../../services/user.service";
import { Link } from "react-router-dom";
import { StyledForm } from "./loginStyled";

const LoginAdmin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, setUser] = useState(null);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleLogin = async (formData) => {
        const { data } = await register(formData);
        setUser(data);
        // localStorage.setItem('token', data.token)
        // localStorage.setItem('user_name', data.user.name)
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const loginData = {
            email: email,
            name: name,
            password: password,
            password_confirmation: password,
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
                <Link to="/"><button type="submit">Ingresar</button></Link>
            </form>
        </StyledForm>
    );
};

export default LoginAdmin;