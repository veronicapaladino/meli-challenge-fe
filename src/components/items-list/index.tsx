import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IItem } from 'items-types';
import fetchGetItems from '../../api/search-item';
import Item from '../item';
import { Spinner } from "@chakra-ui/spinner"
import Categories from '../categories';


const ItemsList = () => {
    const location = useLocation();
    const searchParam = new URLSearchParams(location.search);
    const [items, setItems] = useState<IItem[]>()
    const [categories, setCategories] = useState([])

    useEffect(() => {
        if (!location.state ) {
            fetchGetItems(searchParam.toString()).then((res: any) => {
                if (res.data.filters[0]?.values) setCategories(res.data.filters[0].values)
                setItems(res.data.results);
            })
        } else {
            setItems(location.state);
        };
    }, [location.state]);
        
    return (
        items
        ? <>
            <div className="items">
                <div className="items-container">
                    <Categories categories={categories} />
                    {
                        items.length ? items.map((item: IItem) => {
                            return <Item {...item} key={item.id}/>
                        })
                        : <div>No hay resultados</div>
                    }
                </div>
            </div>
        </>
        : <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
        />
    )
}

export default ItemsList;
