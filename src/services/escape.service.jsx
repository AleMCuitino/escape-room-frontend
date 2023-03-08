import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

export const getEscapes = () => {

    return axios.get(baseUrl + "/escape");
};


export const getEscapeById = (id) => {

    return axios.get(baseUrl + "/escape/" + id );
};


export const getUsersInEscapeById = (id) => {

    return axios.get(baseUrl + "/get-users-in-rooms/" + id );
};


export const createEscape = (data) => {

    return axios.post(baseUrl + "/escape",data );
}


export const updateEscape = (id,data) => {

    return axios.put(baseUrl + "/escape/" + id,data );
}


export const deleteEscapes = (id) => {

    return axios.delete(baseUrl + "/escape/" + id, );
};


export const addParticipants = (data) => {

    return axios.post(baseUrl + "/user/assign",data );
};


export const sendEmailsToUsersInRooms = (id) => {

    return axios.get(baseUrl + "/send-emails/" + id );
}


export const getUsersInRoom = (id) => {

    return axios.get(baseUrl + "/users-room/" + id );
}


export const updateRoom = (id,data) => {

    return axios.put(baseUrl + "/users-room/" + id,data );
}


