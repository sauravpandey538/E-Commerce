import React, { useContext, useState } from "react";
import {
  Box,
  Text,
  Flex,
  Button,
  useBreakpointValue,
  Input,
  Card,
  Image,
} from "@chakra-ui/react";
import Icons from "../Helper/Icons";
import { LuShoppingCart } from "react-icons/lu";
import { IoMdSearch } from "react-icons/io";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { AppContext } from "../src/App";

function Navigation() {
  const { products } = useContext(AppContext);
  const [openDrawer, setOpenDrawer] = useState(false);

  const device = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
  });

  return (
    <Flex
      w={"100%"}
      h={"70px"}
      px={["15px", "80px"]}
      py={"30px"}
      justifyContent={"space-between"}
      position={"sticky"}
      top={0}
      right={0}
      zIndex={999}
      bg={"white"}
    >
      {device === "lg" && (
        <Flex
          justifyContent={"space-between"}
          flex={2}
          maxW={"65%"}
          alignItems={"center"}
        >
          <Box
            letterSpacing={1.5}
            color={"gray.600"}
            fontWeight={500}
            as={Link}
            to="/"
          >
            <Text>Fashion</Text>
            <Text pl={"30px"}>Store</Text>
          </Box>
          <Flex gap={12}>
            <Button
              colorScheme="black"
              variant="link"
              as={Link}
              to="/category/women's%20clothing"
            >
              Women
            </Button>
            <Button
              colorScheme="black"
              variant="link"
              as={Link}
              to="/category/men's%20clothing"
            >
              Men
            </Button>

            <Button
              colorScheme="black"
              variant="link"
              as={Link}
              to="/category/jewelery"
            >
              Jeweleries
            </Button>
          </Flex>
        </Flex>
      )}
      {(device === "base" || device === "sm" || device === "md") && (
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <Icons name={PiDotsThreeOutlineVerticalFill} />
        </Box>
      )}

      <Flex alignItems={"center"} gap={3} justifyContent={"center"}>
        <Flex alignItems={"center"} gap={3}>
          <Input placeholder={"Search by name"} />
          <Icons name={IoMdSearch} />
        </Flex>
        <Flex position={"relative"}>
          <Box onClick={() => setOpenDrawer(!openDrawer)}>
            <Icons name={LuShoppingCart} />
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            boxSize={"30px"}
            position={"absolute"}
            top={-4}
            left={3}
            color={"white"}
            border={"2px solid black"}
            borderRadius={"50%"}
            bgColor={"gray.800"}
          >
            {products.length}
          </Box>
          {openDrawer && (
            <Card
              display={"flex"}
              position={"fixed"}
              top={"70px"}
              right={0}
              h={"90vh"}
              w={"50vw"}
              direction={"column"}
              border={"2px solid black"}
              p={"30px"}
              overflow={"scroll"}
            >
              {products.map((product, index) => (
                <Flex
                  key={index}
                  bg={"white"}
                  h={"auto"}
                  borderBottom={"1px solid gray"}
                  my={"10px"}
                  position={"relative"}
                >
                  <Box>
                    <Image
                      src={product.Image}
                      boxSize="100px"
                      objectFit="cover"
                    />
                  </Box>
                  <Flex direction={"column"}>
                    <Text>{product.Title}</Text>
                    <Flex gap={5} fontWeight={500}>
                      <Text>Total : ${product.Total}</Text>
                      <Text>Quantity : {product.quantity}</Text>
                    </Flex>
                    <Flex position={"absolute"} bottom={0} right={0} gap={2}>
                      <Button>Pay</Button>
                      <Button>Delete</Button>
                    </Flex>
                  </Flex>
                </Flex>
              ))}{" "}
            </Card>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Navigation;
