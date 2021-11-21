import React from "react";
import { Stack, Image } from "@chakra-ui/react";

const Pictures = ({ pictures, selectedImage, onClick }: any): JSX.Element => {
  return (
    <Stack direction="row">
      <Stack
        width="10%"
        minWidth="70px"
        direction="column"
        maxHeight="400px"
        overflow="scroll"
        alignItems="center"
      >
        {pictures.map(({ id, url }: any) => (
          <Image
            src={url}
            key={id}
            width="60px"
            height="60px"
            objectFit="contain"
            padding={1}
            borderRadius={4}
            border={
              selectedImage === url
                ? "2px solid #3483fa"
                : "1px solid rgba(0,0,0,.25)"
            }
            _hover={{
              border: "2px solid #3483fa",
              cursor: "pointer",
            }}
            onMouseOver={() => onClick(url)}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default Pictures;
