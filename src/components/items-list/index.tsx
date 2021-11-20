import React from 'react';
import { useNavigate } from 'react-router-dom';

const ItemsList = ({id, picture, title, price, seller_address}: any) => {
    console.log('Entroooo');
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/items/${id}`);
    };

    return (
        <div className="product-container" onClick={handleClick}>
            <div className="item-image-container">
                <img src={picture} />
            </div>
        <div className="title-container">
                <h4>{title}</h4>
            </div>
            <div className="seller-address-container">
                <h4 className="seller-address">{seller_address}</h4>
            </div>
        </div>
    )
}

export default ItemsList;
