import axios from "axios";

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

export default {
    auth,
};
