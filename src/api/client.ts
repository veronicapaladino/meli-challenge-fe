import axios, { AxiosInstance } from "axios";

export const axiosClient: AxiosInstance = axios.create({
    baseURL: 'https://api.mercadolibre.com/sites/MLA/search?q=:'
});