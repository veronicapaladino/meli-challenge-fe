import React from "react";
import { ICategories } from "categories";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from '@chakra-ui/icons'

interface ICategoriesComponent {
    categories: ICategories[]
}

const Categories = ({ categories }: ICategoriesComponent) => {
    console.log('categories', categories);
    return (
         categories.length > 0 ? <div className="categories-container">
            {
                categories[0].path_from_root.map(({ name }) => {
                    return (
                        <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
                            <BreadcrumbItem>
                                <BreadcrumbLink >{name}</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    )
                })
            }
        </div> : <h5>No se encontraron categorias para esta busqueda...</h5>
    )
}

export default Categories;
