import React, { useState } from "react";
import {
  Box,
  Text,
  Flex,
  Button,
  useBreakpointValue,
  Input,
} from "@chakra-ui/react";
import Icons from "../Helper/Icons";
import { LuShoppingCart } from "react-icons/lu";
import { IoMdSearch } from "react-icons/io";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { Link } from "react-router-dom";

function Navigation() {
  const [items, setItems] = useState(0);
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
            <Button colorScheme="black" variant="link" as={Link} to="/women">
              Women
            </Button>
            <Button colorScheme="black" variant="link" as={Link} to="/men">
              Men
            </Button>
            <Button colorScheme="black" variant="link">
              Electronics
            </Button>
            <Button
              colorScheme="black"
              variant="link"
              as={Link}
              to="/jewellery"
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
          <Box>
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
            {items}
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Navigation;
