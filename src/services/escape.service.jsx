import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

const user = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : '.';

const token = user.token;

export const getEscapes = () => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    return axios.get(baseUrl + "/escape", config);
};

export const createEscape = (data) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    return axios.post(baseUrl + "/escape",data, config);
}

export const deleteEscapes = (id) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    return axios.delete(baseUrl + "/escape/" + id, config);

};