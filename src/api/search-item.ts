import { IGetItems } from "items-types";
import { axiosClient } from "./client";

const fetchGetItems = (query: string) => {
  return axiosClient.get<IGetItems>(`/items?search=${query}`);
}

export default fetchGetItems;
