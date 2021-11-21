import { IItem } from 'items-types';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Item = ({id, picture, title, price, seller_address}: IItem) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/items/${id}`);
    };

    return (
        <div className="product-container" onClick={handleClick}>
            <div className="item-image-container">
               {picture && <img src={picture} />}
            </div>
            <div className="title-container">
                <h4>{title}</h4>
            </div>
            <div className="seller-address-container">
                <h4 className="seller-address"></h4>
            </div>
        </div>
    )
}

export default Item;
