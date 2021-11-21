import { axiosClientDetail } from "./client";

const fetchItemDetail = (itemId: string) => {
  return axiosClientDetail.get(itemId);
}

const fetchItemDetailDescription = (itemId: string) => {
    return axiosClientDetail.get(`${itemId}/description`);
  }

export { fetchItemDetail, fetchItemDetailDescription };