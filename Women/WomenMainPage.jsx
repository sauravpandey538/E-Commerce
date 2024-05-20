import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Flex,
  Image,
  Text,
  Button,
  Spinner,
  Card,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
function WomenMainPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/women's%20clothing")
      .then((res) => {
        const truncatedData = res.data.map((item) => ({
          ...item,
          title: `${item.title.slice(0, -3)}...`,
        }));
        setData(truncatedData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box textAlign="center" mt="20">
        <Spinner size="xl" />
      </Box>
    );
  }
  if (error) {
    return (
      <Box textAlign="center" mt="20">
        <Text color="red.500">Error: {error.message}</Text>
      </Box>
    );
  }
  console.log(data);

  return (
    <Box px={["15px", "30px", "80px", "150px"]} py={[null, "20px"]}>
      <Text py={"40px"}>Home/ Women</Text>
      <Flex gap={6} flexWrap={"wrap"} justifyContent={"space-between"}>
        {data.map((data) => (
          <Card key={data.id} h={"xs"} minW={"2xs"} maxW={"xs"}>
            <Box overflow={"hidden"} minH={"80%"}>
              <Image
                src={data.image}
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
                to="/catagory/product"
                as={RouterLink}
              >
                {" "}
                {data.title}
              </Link>
              <Link
                fontWeight={700}
                fontSize={"23px"}
                to="/catagory/product"
                as={RouterLink}
              >
                ${data.price}
              </Link>
            </Flex>
          </Card>
        ))}
      </Flex>
    </Box>
  );
}

export default WomenMainPage;
{
}
{
  /* <Box>
              <Link> {data.title}</Link>
              <Link fontWeight={800}> `$${data.price}`</Link>
            </Box> */
}
