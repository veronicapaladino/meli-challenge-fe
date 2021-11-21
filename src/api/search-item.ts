import { IGetItems } from "items-types";
import { axiosClient } from "./client";

const fetchGetItems = (query: string) => {
  const position = query.indexOf("=");
  const parseString = query.substring(position)
  return axiosClient.get<IGetItems>(`${parseString}`);
}

export default fetchGetItems;
