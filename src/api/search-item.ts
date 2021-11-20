import { axiosClient } from "./client";

interface IGetItems {
    author:     Author;
    categories: string[];
    items:      Item[];
}

interface Author {
    name:     string;
    lastname: string;
}

interface Item {
    id:           string;
    title:        string;
    price:        Price;
    picture:      string;
    condition:    string;
    free_shipping: boolean;
    seller_address: string;
}

interface Price {
    currency: string;
    amount:   number | string;
    decimals: number | string;
}

const fetchGetItems = (query: string) => {
  return axiosClient.get<IGetItems>(`/items?search=${query}`);
}

export default fetchGetItems;
