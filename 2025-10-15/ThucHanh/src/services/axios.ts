import axios from "axios";
import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
    timeout: 3 * 60 * 1000,
});

axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        console.log("Request:", config.method?.toUpperCase(), config.url);
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        return response.data;
    },
    (error: AxiosError) => {
        console.error("API Error:", error.message);
        return Promise.reject(error);
    }
);

export default axiosInstance;
