import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

export const sendMessage = (data) => {

    return axios.post(baseUrl + "/send", data);
};