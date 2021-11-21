declare module "categories" {

    interface ICategories {  
        id: string;
        name: string;
        path_from_root: IPathFromRoot[];
    }

    interface IPathFromRoot {
        id: string;
        name: string;
    }
}