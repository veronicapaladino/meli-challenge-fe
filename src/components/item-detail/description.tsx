import { Stack, Text, Table, Tbody } from "@chakra-ui/react"
import React from "react"


const Description = ({ description }: any) => {
    return (
        <Stack style={{ marginTop: 40, marginLeft: 20 }} maxWidth="60%">
            <Text fontSize={24} fontWeight={400}>
              Descripción del Producto
            </Text>
            <Text fontSize={16} fontWeight={400} color="rgba(0,0,0,.45)">
              {description}
            </Text>
          </Stack>
    )
}

export default Description;