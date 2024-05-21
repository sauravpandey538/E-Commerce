import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Flex, Image, Text, Spinner, Card, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function ApiCallByCategory() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { category } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://fakestoreapi.com/products/category/${encodeURIComponent(
          category
        )}`
      )
      .then((res) => {
        const truncatedData = res.data.map((item) => ({
          ...item,
          title: `${item.title.slice(0, 20)}...`, // Adjust truncation length as needed
        }));
        setData(truncatedData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [category]); // Add category to dependency array

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

  return (
    <Box px={["15px", "30px", "80px", "150px"]} py={[null, "20px"]}>
      <Text py={"40px"}>Home / {category.replace("%20", " ")}</Text>
      <Flex gap={6} flexWrap={"wrap"} justifyContent={"space-between"}>
        {data.map((item) => (
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
              >
                {item.title}
              </Link>
              <Link to={`/category/product/${item.id}`} as={RouterLink}>
                <Text fontWeight={700} fontSize={"23px"}>
                  ${item.price}
                </Text>
              </Link>
            </Flex>
          </Card>
        ))}
      </Flex>
    </Box>
  );
}

export default ApiCallByCategory;
