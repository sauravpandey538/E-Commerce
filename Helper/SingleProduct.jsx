import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Box, Flex, Text, Button, Card, Spinner, Icon } from "@chakra-ui/react";
import ProductImageSlider from "./ProductImageSlider";
import { FaCartShopping } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import StarRating from "./RandomRating";
import { motion } from "framer-motion";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import Icons from "./Icons";
import { CiLocationOn } from "react-icons/ci";
import { IoMdArrowDropupCircle } from "react-icons/io";
import { AppContext } from "../src/App";

function SingleProduct() {
  const [quantity, setQuantity] = useState(1);
  const [data, setData] = useState(null); // Change to null to handle loading state
  const [fav, setFav] = useState(false);
  const [openDealer, SetOpenDelear] = useState(false);
  const { id } = useParams();
  const { addProduct } = useContext(AppContext);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [id]);

  const handleAdd = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleSub = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  if (!data) {
    return (
      <Box textAlign="center" mt="20">
        <Spinner size="xl" />
      </Box>
    );
  }

  return (
    <Flex
      h={"fit-content"}
      gap={6}
      px={["auto", "30px", "80px", "150px"]}
      py={"40px"}
      flexWrap={"wrap"}
    >
      <Flex flex={1} bg={"white"} direction={"column"} gap={6}>
        <Text>
          Home / {data.category} / {data.title}
        </Text>
        <Box maxW={"50vw"}>
          <ProductImageSlider mainImage={data.image} />{" "}
        </Box>
        <Text
          fontSize={"25px"}
          fontWeight={700}
          letterSpacing={1.3}
          pl={"10px"}
          color={"gray.700"}
        >
          DESCRIPTION
        </Text>
        <Text letterSpacing={1.4} lineHeight={1.3} pl={"10px"}>
          {data.description}
        </Text>
      </Flex>

      <Card alignItems="center" mb={4} h={"fit-content"} p={"20px"} maxW={"md"}>
        <Box flex={1} color={"black"} p={6} borderRadius={8}>
          <Text fontSize={"2xl"} fontWeight={700} mb={2} color={"gray.700"}>
            {data.title}
          </Text>
          <Text mb={2}>
            Rating: <StarRating rating={data.rating?.rate} />
          </Text>
          <Flex alignItems={"baseline"} mb={2}>
            <Text fontWeight={700} fontSize={"xl"}>
              ${data.price}
            </Text>
            <Text fontSize={"sm"} color={"gray.600"} pl={2}>
              Including VAT
            </Text>
          </Flex>

          <Flex
            borderTop={"1px solid gray"}
            borderBottom={"1px solid gray"}
            py={"5px"}
            textAlign={"center"}
            my={"10px"}
            onClick={() => SetOpenDelear(!openDealer)}
            justifyContent={"space-between"}
          >
            <Text>Details about dealer</Text>
            <motion.div animate={{ rotate: openDealer ? 180 : 0 }}>
              <Icons name={IoMdArrowDropupCircle} />
            </motion.div>
          </Flex>
          <motion.div
            animate={{ height: openDealer ? "fit-content" : 0 }}
            style={{ overflow: "hidden" }}
          >
            {openDealer && (
              <Flex
                h={"100px"}
                w={"100%"}
                gap={1}
                direction={"column"}
                justifyContent={"space-evenly"}
              >
                <Flex>
                  <Text mr={"2px"}>From : </Text>

                  <Text as="span" fontWeight={600}>
                    Easy Nepal
                  </Text>
                </Flex>
                <Flex>
                  <Text mr={"3px"}>Status: </Text>
                  <Icons name={VscWorkspaceTrusted} />
                </Flex>
                <Flex>
                  Samakhusi, Kathmandu{" "}
                  <Box as="span">
                    <Icons name={CiLocationOn} />
                  </Box>
                </Flex>
              </Flex>
            )}
          </motion.div>
          <Flex className="Size" gap={2} my={4}>
            <Button
              colorScheme="black"
              variant="outline"
              _hover={{ bg: "gray.600", color: "white" }}
            >
              XS
            </Button>
            <Button
              colorScheme="black"
              variant="outline"
              _hover={{ bg: "gray.600", color: "white" }}
            >
              XL
            </Button>
            <Button
              colorScheme="black"
              variant="outline"
              _hover={{ bg: "gray.600", color: "white" }}
            >
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
              <Text pl={"5px"}>{`$${quantity * data.price}`}</Text>
            </Flex>
          </Flex>
          <Flex className="Cart" gap={4} flexWrap={"wrap"}>
            <Button
              leftIcon={<FaCartShopping />}
              variant="solid"
              color={"white"}
              bg={"gray.600"}
              onClick={() => {
                addProduct({
                  id,
                  quantity,
                  Total: quantity * data.price,
                  Image: data.image,
                  Title: data.title,
                });
              }}
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
