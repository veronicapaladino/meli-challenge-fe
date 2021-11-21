import { axiosClientDetail } from "./client";

const fetchItemDetail = (itemId: string) => axiosClientDetail.get(`${itemId}`);

const fetchItemDetailDescription = (itemId: string) => axiosClientDetail.get(`${itemId}/description`);

export { fetchItemDetail, fetchItemDetailDescription };