import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 0,
    headers: {
        'Content-Type': 'application/json'
    },
});

instance.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error)
);

instance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
);


export default instance;