declare module "items-types" {
    interface IGetItems {
        author:     Author;
        categories: string[];
        items:      IItem[];
    }
    
    interface Author {
        name:     string;
        lastname: string;
    }

    interface IShipping {
        free_shipping: boolean;
        mode: string;
    }
    
    interface IItem {
        id:           string;
        title:        string;
        price:        Price;
        picture:      string;
        condition:    string;
        free_shipping: boolean;
        seller_address: string;
        thumbnail: string;
        currency_id: string;
        shipping: IShipping;
    }
    
    interface Price {
        currency: string;
        amount:   number | string;
        decimals: number | string;
        style: string;
    }

    interface IItemDetail extends IItem {
        sold_quantity: number;
        pictures: any[];
    }
}