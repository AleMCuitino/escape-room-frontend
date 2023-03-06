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

export const getEscapeById = (id) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    return axios.get(baseUrl + "/escape/" + id, config);
};

export const getUsersInEscapeById = (id) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    return axios.get(baseUrl + "/get-users-in-rooms/" + id, config);
};

export const createEscape = (data) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    return axios.post(baseUrl + "/escape",data, config);
}


export const updateEscape = (id,data) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    return axios.put(baseUrl + "/escape/" + id,data, config);
}

export const deleteEscapes = (id) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    return axios.delete(baseUrl + "/escape/" + id, config);

};

export const addParticipants = (data) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    return axios.post(baseUrl + "/user/assign",data, config);

};

export const sendEmailsToUsersInRooms = (id) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    return axios.get(baseUrl + "/send-emails/" + id, config);
}