import React, { useState } from "react";
import { Box, Flex, Text, Button, Input, Card } from "@chakra-ui/react";
import ProductImageSlider from "./ProductImageSlider";
import { FaCartShopping } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

function SingleProduct() {
  const [quantity, setQuantity] = useState(1);
  const [fav, setFav] = useState(false);
  const handleAdd = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleSub = () => {
    setQuantity((prev) => prev - 1);
  };
  return (
    <Flex
      h={"fit-content"}
      //   w={"100%"}
      gap={6}
      px={["auto", "30px", "80px", "150px"]}
      py={"40px"}
      flexWrap={"wrap"}
    >
      <Flex flex={1} bg={"white"} direction={"column"} gap={6}>
        <Text>Home/ Women/ Catagory/ Flared Midi Skirt</Text>
        <Box maxW={"50vw"}>
          <ProductImageSlider />
        </Box>
        <Text
          fontSize={"25px"}
          fontWeight={700}
          letterSpacing={1.3}
          pl={"10px"}
        >
          DESCRIPTION
        </Text>
        <Text letterSpacing={1.4} lineHeight={1.3} pl={"10px"}>
          Sapiente exercitationem qui voluptatem adipisci rem nobis. Minus
          perspiciatis nam et repellat ea voluptates. Et velit ducimus et
          nostrum. Ipsum deleniti odit excepturi magnam non non consequatur ea.
          Nesciunt earum architecto soluta dolores velit nostrum facere.
        </Text>
      </Flex>

      <Card
        alignItems="center"
        mb={4}
        h={"fit-content"}
        p={"20px"}
        maxW={"md"}
        border={"2px solid black"}
      >
        <Box
          flex={1}
          color={"black"}
          p={6}
          borderRadius={8}
          //   boxShadow="md"
        >
          <Text fontSize={"2xl"} fontWeight={700} mb={2}>
            Flared Midi Skirt
          </Text>
          <Text mb={2}>Rating: 4.5/5</Text>
          <Flex alignItems={"baseline"} mb={2}>
            <Text fontWeight={700} fontSize={"xl"}>
              $200
            </Text>
            <Text fontSize={"sm"} color={"gray.600"} pl={2}>
              Including VAT
            </Text>
          </Flex>
          <Text
            borderTop={"1px solid gray"}
            borderBottom={"1px solid gray"}
            py={"5px"}
            textAlign={"center"}
            my={"10px"}
          >
            Details about deailer {"^"}
          </Text>
          <Flex className="Size" gap={2} mb={4}>
            <Button colorScheme="black" variant="outline">
              XS
            </Button>
            <Button colorScheme="black" variant="outline">
              XL
            </Button>
            <Button colorScheme="black" variant="outline">
              LG
            </Button>
          </Flex>
          <Flex
            alignItems="center"
            mb={4}
            lineHeight={1}
            my={"25px"}
            justifyContent={"space-between"}
            flexWrap={"wrap"}
          >
            <Flex gap={1}>
              <Box
                onClick={handleSub}
                border={"2px solid black"}
                borderRadius={4}
                cursor="pointer"
                p={3}
                fontSize={"xl"}
              >
                -
              </Box>
              <Box
                border={"2px solid black"}
                borderRadius={4}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                p={3}
                fontSize={"xl"}
                w={"40px"}
              >
                {quantity}
              </Box>
              <Box
                onClick={handleAdd}
                border={"2px solid black"}
                borderRadius={4}
                cursor="pointer"
                p={3}
                fontSize={"xl"}
              >
                +
              </Box>
            </Flex>
            <Flex
              borderRadius={4}
              p={3}
              width={"auto"}
              readOnly
              border="2px solid black"
              fontSize={"xl"}
              ml={"5px"}
            >
              <Text>Total: </Text>
              <Text pl={"5px"}>{`$${quantity * 200}`}</Text>
            </Flex>
          </Flex>
          <Flex className="Cart" gap={4} flexWrap={"wrap"}>
            <Button
              leftIcon={<FaCartShopping />}
              variant="solid"
              color={"white"}
              bg={"gray.600"}
            >
              Add to cart
            </Button>
            <Button
              leftIcon={fav ? <FaHeart color="red" /> : <CiHeart />}
              color={"black"}
              border={"2px solid black"}
              variant="solid"
              onClick={() => setFav(!fav)}
            >
              Favourite
            </Button>
          </Flex>
        </Box>
      </Card>
    </Flex>
  );
}

export default SingleProduct;
{
  /* <ProductImageSlider /> */
}
