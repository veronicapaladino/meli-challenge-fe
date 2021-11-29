import React from 'react';
import { Spinner } from "@chakra-ui/spinner"
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IItem } from 'items-types';
import fetchGetItems from '../../api/search-item';
import Item from '../item';
import Categories from '../categories';
import EmptyState from '../empty-state';


const ItemsList = () => {
    const [items, setItems] = useState<IItem[]>([])
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { state} = useLocation();
    const searchParam = new URLSearchParams(location.search);

    useEffect(() => {
        setIsLoading(true);
        fetchGetItems(searchParam.toString()).then((res: any) => {
            if (res.data.filters[0]?.values) setCategories(res.data.filters[0].values)
            setItems(res.data.results);
            setIsLoading(false);
        })
    }, []);
        
    return (
        !isLoading
        ? <>
            <div className="items">
                <div className="items-container">
                    <Categories categories={categories} />
                    {
                        items.length ? items.map((item: IItem) => {
                            return <Item {...item} key={item.id}/>
                        })
                        : <EmptyState />
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
