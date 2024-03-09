import axios from "axios";

const authorizationHeader = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
};

const api = (method, url, data = {}, headers = {}) =>
    axios.request({
        baseURL: "https://oprec-api.labse.in/api",
        headers: {
            "Content-Type": "application/json",
            ...headers,
        },
        method,
        url,
        data,
    });

const auth = (url, data) => {
    return api("POST", url, data);
};

const getTasks = (url) => {
    return api("GET", url, {}, authorizationHeader);
};

const addTask = (url, data) => api("POST", url, data, authorizationHeader);

const updateTask = (url, data) => api("PUT", url, data, authorizationHeader);

const deleteTask = (url) => api("DELETE", url, authorizationHeader);

export default {
    auth,
    getTasks,
    addTask,
    updateTask,
    deleteTask,
};
