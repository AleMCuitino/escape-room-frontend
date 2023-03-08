import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

const user = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : '.';

const token = user.token;

export const sendMessage = (data) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    return axios.post(baseUrl + "/send", data, config);
};