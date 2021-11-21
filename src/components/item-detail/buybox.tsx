import { Stack, Text, Button } from "@chakra-ui/react";
import { IItemDetail } from "items-types";
import React from "react";
import CONDITION from "../../constants/items";
import formatPrice from "../../constants/utils";

interface IBuyBox {
    item: IItemDetail;
}

const BuyBox = ({ item }: IBuyBox): JSX.Element => {
  return (
    <Stack
      width="30%"
      maxWidth={400}
      borderRadius={8}
      border="1px solid rgba(0,0,0,.1)"
      padding={4}
    >
      <Text
        color="rgba(0,0,0,.45)"
        fontSize={14}
        fontWeight={400}
        whiteSpace="pre-wrap"
      >
        {`${CONDITION[item.condition]} | ${item.sold_quantity} vendidos`}
      </Text>
      <Text
        color="rgba(0,0,0,.8)"
        fontSize={22}
        fontWeight={600}
        lineHeight="1.18"
        wordBreak="break-word"
      >
        {item.title}
      </Text>
      <Text color="rgba(0,0,0,.8)" fontSize={36} fontWeight={300}>
        {formatPrice(item.price, item.currency_id)}
      </Text>
      <Text fontSize={14}>
        en 12x {formatPrice(Number(item.price) / 12, item.currency_id)}
      </Text>
      <Text fontSize={14} color="#3483fa">
        Ver los medios de pago
      </Text>
      {item.free_shipping && (
        <Text color="#00a650" fontSize={16}>
          Envío gratis
        </Text>
      )}
      <Button
        width="100%"
        background="rgb(52, 131, 250)"
        size="lg"
        colorScheme="3483fa"
        fontSize={16}
        _hover={{
          background: "#2968c8",
        }}
        _focus={{ border: "none" }}
      >
        Comprar ahora
      </Button>
    </Stack>
  );
};

export default BuyBox;
