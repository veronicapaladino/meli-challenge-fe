import { Stack, Box, Image } from "@chakra-ui/react";
import { IItemDetail } from "items-types";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  fetchItemDetail,
  fetchItemDetailDescription,
} from "../../api/item-detail";
import fetchGetItems from "../../api/search-item";
import Categories from "../categories";
import BuyBox from "./buybox";
import Description from "./description";
import Pictures from "./pictures";

const ItemDetail = (): JSX.Element => {
  const [categories, setCategories] = useState([]);
  const [item, setItem] = useState<IItemDetail>();
  const [description, setDescription] = useState<IItemDetail>();
  const [isLoading, setIsLoading] = useState(false);
  const {state} = useLocation();
  const [selectedImage, setSelectedImage] = useState('');
  const pathname = location.pathname;

  useEffect(() => {
      setIsLoading(true);
      const position = pathname.indexOf("/", 2);
      const parseString = pathname.substring(position);

      if (state?.categories) setCategories(state.categories);

      // obtenemos las categorias
      fetchGetItems(parseString.toString()).then((res: any) => {
        setIsLoading(false);
      });

      // obtenemos el detalle del item
      fetchItemDetail(parseString.toString()).then((res: any) => {
            setItem(res.data);
            const defaultImage = res.data.pictures[0].url;
            setSelectedImage(defaultImage)
        }
      );

      // obtenemos la descripción del item
      fetchItemDetailDescription(parseString.toString()).then((res: any) => 
        setDescription(res.data.plain_text)
      );
  }, []);

  return (
    <>
      {!!categories.length && <Categories categories={categories} />}
      {item && (
        <Box paddingX={32} paddingY={8} width="90%">
          <Stack background="white" padding={4}>
            <Stack direction="row">
                <Pictures pictures={item.pictures} selectedImage={selectedImage} onClick={setSelectedImage} />
              <Stack width="70%" flexDirection="row" justifyContent="center">
                <Image
                  width="400px"
                  height="400px"
                  src={selectedImage}
                  objectFit="contain"
                />
              </Stack>
              <BuyBox item={item} />
            </Stack>
            <Description description={description} />
          </Stack>
        </Box>
      )}
      )
    </>
  );
};

export default ItemDetail;
