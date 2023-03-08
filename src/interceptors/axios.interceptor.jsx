import axios from "axios";

const user = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : '.';

const token = user.token;

export const AxiosInterceptor = () => {

    axios.interceptors.request.use((config) => {
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    });
}




