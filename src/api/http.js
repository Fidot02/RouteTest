import axios from "axios";


const apiURL = import.meta.env.VITE_API_URL;
const instance = axios.create({baseURL: apiURL/* ,params: {api_key : import.meta.env.VITE_API_KEY}*/});

instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    });

    export default instance;