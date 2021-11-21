import React from 'react';
import { Stack, Image, Text } from "@chakra-ui/react";
import { IItem } from 'items-types';
import { useNavigate } from 'react-router-dom';
import CONDITION from '../../constants/items';
import formatPrice from '../../constants/utils';


const Item = ({id, thumbnail, title, price, shipping: { free_shipping }, currency_id, condition}: IItem) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/items/${id}`);
    };

    const secondaryText = "rgba(0,0,0,.45)";

    return (
        <div className="product-container" onClick={handleClick}>
            <Stack direction="row" padding={4} >
                <Image width="160px" height="160px" src={thumbnail} objectFit="contain" />
                <Stack style={{ marginLeft: 32 }}>
                    <Text
                    color={secondaryText}
                    fontSize={14}
                    fontWeight={400}
                    whiteSpace="pre-wrap"
                    >
                        {CONDITION[condition]}
                    </Text>
                    <Text fontSize={20} fontWeight={300}>
                        {title}
                    </Text>
                    <Text fontSize={24} fontWeight={400}>
                        {formatPrice(price, currency_id)}
                    </Text>
                    {free_shipping && (
                        <Text fontSize={14} fontWeight={400} color="#00a650">
                            Envío gratis
                        </Text>
                    )}
                </Stack>
            </Stack>
        </div>
    )
}

export default Item;
