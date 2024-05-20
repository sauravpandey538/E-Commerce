import React from "react";
import { Box, Flex, Link, useBreakpointValue, Text } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
// router not added and not planned also cause it is too time consuming for me 😛
function Footer() {
  const first = [
    "WOMEN",
    "SKIRTS",
    "DRESSES",
    "SHIRTS AND BLOUSES",
    "SWEATERS",
    "TOPS AND T-SHIRTS",
    "JACKETS AND COATS",
  ];
  const second = [
    "MEN",
    "SHIRTS",
    "T-SHIRTS",
    "SWEATERS",
    "SWEATERS",
    "JACKETS AND COATS",
  ];
  const third = ["NECKLACE", "BRACLETS", "RINGS", "TOPS", "FOOTWEAR"];
  const fourth = ["MY ACCOUNT", "ORDER"];
  const device = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
  });
  return (
    <>
      {device === "lg" && (
        <Flex
          gap={4}
          justifyContent={"space-between"}
          LinkAlign={"left"}
          mx={["15px", "30px", "80px", "150px"]}
          borderTop={"1px solid gray"}
          py={"30px"}
        >
          <Flex
            direction={"column"}
            gap={4}
            color={"gray.600"}
            letterSpacing={1.4}
          >
            {first.map((item, index) => (
              <Link
                color={index === 0 ? "black" : "gray.600"}
                fontWeight={index === 0 ? 600 : 400}
              >
                {item}
              </Link>
            ))}
          </Flex>
          <Flex
            direction={"column"}
            gap={4}
            color={"gray.600"}
            letterSpacing={1.4}
          >
            {second.map((item, index) => (
              <Link
                color={index === 0 ? "black" : "gray.600"}
                fontWeight={index === 0 ? 600 : 400}
              >
                {item}
              </Link>
            ))}
          </Flex>
          <Flex
            direction={"column"}
            gap={4}
            color={"gray.600"}
            letterSpacing={1.4}
          >
            {third.map((item, index) => (
              <Link
                color={index === 0 ? "black" : "gray.600"}
                fontWeight={index === 0 ? 600 : 400}
              >
                {item}
              </Link>
            ))}
          </Flex>
          <Flex
            direction={"column"}
            gap={4}
            color={"gray.600"}
            letterSpacing={1.4}
          >
            {fourth.map((item, index) => (
              <Link
                color={index === 0 ? "black" : "gray.600"}
                fontWeight={index === 0 ? 600 : 400}
              >
                {item}
              </Link>
            ))}
          </Flex>{" "}
        </Flex>
      )}
      <Box
        borderTop={"1px solid gray"}
        w={"auto"}
        py={"15px"}
        textAlign={"center"}
        color={"gray.600"}
      >
        Developed by{" "}
        <Box as="span" color={"black"} fontWeight={700}>
          Saurav{" "}
        </Box>{" "}
        | © 2024 Shopping Mall. All rights reserved.
      </Box>
    </>
  );
}

export default Footer;
