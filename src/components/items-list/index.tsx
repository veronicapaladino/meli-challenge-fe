import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IItem } from 'items-types';
import fetchGetItems from '../../api/search-item';
import Item from '../item';
import { Spinner } from "@chakra-ui/spinner"


const ItemsList = () => {
    const location = useLocation();
    const searchParam = new URLSearchParams(location.search);
    const [items, setItems] = useState<IItem[]>()

    useEffect(() => {
        if (!location.state ) {
            fetchGetItems(searchParam.toString()).then((res: any) => {
                setItems(res.data.results);
            })
        } else {
            setItems(location.state);
        };
    }, [location.state]);

    console.log('data', items);
        
    return (
        items
        ? <>
            <div className="items">
                <div className="items-container">
                        <div>Categorias</div>
                    {
                        items.length ? items.map((item: IItem) => {
                            return <Item {...item} />
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
