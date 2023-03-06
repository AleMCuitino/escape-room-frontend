import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

const user = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : '.';

const token = user.token;

export const login = (data) => {
    return axios.post(baseUrl + "/login", data);
};

export const register = (data) => {
    return axios.post(baseUrl + "/register", data);
};

export const register_admin = (data) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    return axios.post(baseUrl + "/register_admin", data, config);
};