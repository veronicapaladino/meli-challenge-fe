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
    
    interface IItem {
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
}