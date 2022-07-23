import axios, { AxiosInstance } from "axios";

const BASE_URL: string = "http://localhost:8000/";

export const axiosPublic: AxiosInstance = axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json"
    },
    // If set to true, cookies will be sent, but CORS errors can occur
    //withCredentials: true
});
