import React from "react";
import { Box, Image, Text, Button } from "@chakra-ui/react";
import BelowNavImg from "../public/vite.jpeg";
function BelowNav() {
  return (
    <Box letterSpacing={1.5} position={"relative"}>
      <Image
        src={BelowNavImg}
        w={"100%"}
        h={["40vh", "70vh"]}
        objectFit={"cover"}
        overflow={"hidden"}
      />
      <Box maxW={"400px"} position={"absolute"} top={"25%"} right={"10%"}>
        <Text fontSize={"45px"} textAlign={"center"}>
          Fashion{" "}
        </Text>
        <Text fontSize={"45px"} textAlign={"center"} mt={"-20px"}>
          Store
        </Text>
        <Text
          color={"white"}
          bg={"gray.800"}
          w={"100%"}
          py={"10px"}
          px={"10px"}
          _hover={{ bgColor: "none" }}
          borderRadius={"5px"}
        >
          Your wallet won't empty
        </Text>
      </Box>
    </Box>
  );
}

export default BelowNav;
