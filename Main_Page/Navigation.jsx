import React, { useContext, useState } from "react";
import {
  Box,
  Text,
  Flex,
  Button,
  useBreakpointValue,
  Input,
  Card,
  SimpleGrid,
  Image,
  Link,
  IconButton,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { CloseIcon } from "@chakra-ui/icons";
import Icons from "../Helper/Icons";
import { LuShoppingCart } from "react-icons/lu";
import { IoMdSearch } from "react-icons/io";
import { AppContext } from "../src/App";
import { ApiValue } from "../Api/SearchContext";

function Navigation() {
  const { products, removeProduct } = useContext(AppContext);
  const [inputVal, setInputVal] = useState("");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const { apiData } = useContext(ApiValue);

  const device = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
  });

  const filteredArr = apiData.filter((item) =>
    item.title.toLowerCase().includes(inputVal.toLowerCase())
  );

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
    setShowSearchResults(e.target.value !== "");
  };

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
            as={RouterLink}
            to="/"
          >
            <Text>Fashion</Text>
            <Text pl={"30px"}>Store</Text>
          </Box>
          <Flex gap={12}>
            <Button
              colorScheme="black"
              variant="link"
              as={RouterLink}
              to="/category/women's%20clothing"
            >
              Women
            </Button>
            <Button
              colorScheme="black"
              variant="link"
              as={RouterLink}
              to="/category/men's%20clothing"
            >
              Men
            </Button>
            <Button
              colorScheme="black"
              variant="link"
              as={RouterLink}
              to="/category/jewelery"
            >
              Jewelries
            </Button>
          </Flex>
        </Flex>
      )}
      {(device === "base" || device === "sm" || device === "md") && (
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <Box
            letterSpacing={1.5}
            color={"gray.600"}
            fontWeight={500}
            as={RouterLink}
            to="/"
            mr={"10px"}
          >
            <Text>Fashion</Text>
            <Text pl={"30px"}>Store</Text>
          </Box>
        </Box>
      )}

      <Flex alignItems={"center"} gap={3} justifyContent={"center"}>
        <Flex alignItems={"center"} gap={3}>
          <Input
            placeholder={"Search items..."}
            value={inputVal}
            onChange={handleInputChange}
          />
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
            <Box
              h={"100vh"}
              w={"100vw"}
              backgroundColor="rgba(0, 0, 0, 0.7)"
              top={"70px"}
              right={0}
              position={"fixed"}
            >
              <Card
                float={"right"}
                display={"flex"}
                h={"85vh"}
                w={"50vw"}
                direction={"column"}
                border={"2px solid black"}
                overflow={"scroll"}
                px={"15px"}
              >
                <Flex
                  justifyContent={"space-between"}
                  zIndex={999}
                  bg={"white"}
                  py={"10px"}
                >
                  <Text>Cart List</Text>

                  <CloseIcon onClick={() => setOpenDrawer(false)} />
                </Flex>
                {products.length === 0 && (
                  <Text textAlign={"center"}>No items have been added</Text>
                )}
                {products.map((product, index) => (
                  <Flex
                    key={index}
                    bg={"white"}
                    h={"auto"}
                    borderBottom={"1px solid gray"}
                    my={"10px"}
                    position={"relative"}
                    flexWrap={"wrap"}
                  >
                    <Box>
                      <Image
                        src={product.Image}
                        boxSize="100px"
                        objectFit="cover"
                      />
                    </Box>
                    <Flex direction={"column"} ml={"15px"}>
                      <Text>{product.Title}</Text>
                      <Flex gap={5} fontWeight={500} flexWrap={"wrap"}>
                        <Text minW={"fit-content"}>
                          Quantity: {product.quantity}
                        </Text>
                        <Text>Total: ${product.Total}</Text>
                      </Flex>
                      <Flex position={"relative"} bottom={0} right={0} gap={2}>
                        {/* <Button>Pay</Button> */}
                        <Button onClick={() => removeProduct(index)}>
                          Remove
                        </Button>
                      </Flex>
                    </Flex>
                  </Flex>
                ))}
                <Button
                  w={"100%"}
                  py={"12px"}
                  // my={"20px"}
                  fontSize={"lg"}
                  fontWeight={"bold"}
                  colorScheme={"gray"}
                  _hover={{
                    bgGradient: "linear(to-r, black.500, black.700)",
                  }}
                >
                  Checkout
                </Button>
              </Card>
            </Box>
          )}
        </Flex>
      </Flex>
      {/* task : make a component and share */}
      {showSearchResults && (
        <Box
          position="fixed"
          top="70px"
          left="0"
          w="100vw"
          h="100vh"
          bg="white"
          zIndex={1000}
          overflowY="auto"
          p={4}
        >
          <Flex justifyContent="flex-end" mb={2}>
            <IconButton
              icon={<CloseIcon />}
              onClick={() => setShowSearchResults(false)}
              aria-label="Close search results"
            />
          </Flex>
          {filteredArr.length > 0 ? (
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
              {filteredArr.map((item) => (
                <Card key={item.id} h={"xs"} minW={"2xs"} maxW={"xs"}>
                  <Box overflow={"hidden"} minH={"80%"}>
                    <Image
                      src={item.image}
                      w={"100%"}
                      objectFit={"cover"}
                      h={"100%"}
                    />
                  </Box>
                  <Flex
                    justifyContent={"flex-start"}
                    direction={"column"}
                    py={"7px"}
                    px={"10px"}
                  >
                    <Link
                      color={"gray.700"}
                      isTruncated
                      to={`/category/product/${item.id}`}
                      as={RouterLink}
                      onClick={() => setShowSearchResults(false)}
                    >
                      {item.title}
                    </Link>
                    <Link
                      to={`/category/product/${item.id}`}
                      as={RouterLink}
                      onClick={() => setShowSearchResults(false)}
                    >
                      <Text fontWeight={700} fontSize={"23px"}>
                        ${item.price}
                      </Text>
                    </Link>
                  </Flex>
                </Card>
              ))}
            </SimpleGrid>
          ) : (
            <Text>No items found</Text>
          )}
        </Box>
      )}
    </Flex>
  );
}

export default Navigation;
