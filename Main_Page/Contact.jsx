import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

function Contact() {
  return (
    <Flex
      flexWrap={"wrap"}
      pt={"20px"}
      pb={"40px"}
      w={"100%"}
      // justifyContent={"space-between"}
      px={["15px", "30px", "80px", "150px"]}
      gap={6}
    >
      <Box letterSpacing={1.5} color={"gray.600"} fontWeight={500}>
        <Text>Fashion</Text>
        <Text pl={"30px"}>Store</Text>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        w={"100%"}
      >
        <Box b>
          <Text fontSize={"25px"} fontWeight={500}>
            Contact us
          </Text>
          <Box color={"gray.600"}>
            <Text>Fashion Store, 2382 Locust Ave</Text>
            <Text>Long Beach, CA 90806, USA</Text>
            <Text>Call us now: 760-673-8590</Text>
            <Text>Email: fashion_store@example.com</Text>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}

export default Contact;
