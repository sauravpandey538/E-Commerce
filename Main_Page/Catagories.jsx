import React from "react";
import { Box, Flex, Button, Image } from "@chakra-ui/react";
import Men from "../public/men.jpeg";
import Women from "../public/Women.jpeg";
import Jewellery from "../public/Jewellery.jpeg";
import { Link } from "react-router-dom";

function Catagories() {
  return (
    <Flex
      gap={6}
      px={["15px", "30px", "80px", "150px"]}
      py={"80px"}
      borderBottom={"1px solid gray"}
    >
      <Box flex={1} position={"relative"}>
        <Image
          src={Jewellery}
          w={"100%"}
          objectFit={"cover"}
          overflow={"hidden"}
        />
        <Button
          position={"absolute"}
          bottom={"10%"}
          left={"43%"}
          size={["sm", "md"]}
          variant="link"
          as={Link}
          to="/category/jewelery"
          bg={"white"}
          color={"black"}
        >
          Jewellery
        </Button>
      </Box>
      <Flex flex={1} flexDirection={"column"} gap={2}>
        <Box flex={1} position={"relative"}>
          {" "}
          <Image src={Men} w={"100%"} objectFit={"cover"} overflow={"hidden"} />
          <Button
            position={"absolute"}
            bottom={"10%"}
            left={"43%"}
            size={["sm", "md"]}
            variant="link"
            as={Link}
            to="/category/men's%20clothing"
            bg={"white"}
            color={"black"}
          >
            Men
          </Button>
        </Box>
        <Box flex={1} position={"relative"}>
          {" "}
          <Image
            src={Women}
            w={"100%"}
            objectFit={"cover"}
            overflow={"hidden"}
          />
          <Button
            position={"absolute"}
            bottom={"10%"}
            left={"43%"}
            size={["sm", "md"]}
            variant="link"
            as={Link}
            to="/category/women's%20clothing"
            bg={"white"}
            color={"black"}
          >
            Women
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Catagories;
