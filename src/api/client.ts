import axios, { AxiosInstance } from "axios";

const basePath = 'https://api.mercadolibre.com';

export const axiosClient: AxiosInstance = axios.create({
    baseURL: `${basePath}/sites/MLA/search?q=:`
});

export const axiosClientDetail: AxiosInstance = axios.create({
    baseURL: `${basePath}/items/`
});