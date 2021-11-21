import React from "react";
import { ICategories } from "categories";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from '@chakra-ui/icons'

interface ICategoriesComponent {
    categories: ICategories[]
}

const Categories = ({ categories }: ICategoriesComponent) => (
    categories.length > 0 ? 
    <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
        {
            categories[0].path_from_root.map(({ name }) => {
                return (
                    <BreadcrumbItem key={name}>
                        <BreadcrumbLink >{name}</BreadcrumbLink>
                    </BreadcrumbItem>
                )
            })
        }
    </Breadcrumb> : <h5>No se encontraron categorias para esta busqueda...</h5>
    )

export default Categories;
