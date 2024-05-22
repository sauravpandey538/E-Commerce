import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, Text } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <React.StrictMode>
      <App />
      <Text
        position={"sticky"}
        bottom={0}
        right={0}
        zIndex={999}
        py={"15px"}
        textAlign={"center"}
        color={"white"}
        bg={"black"}
        letterSpacing={1.7}
      >
        {" "}
        This is the beta version. So it doesn't represent my full project{" "}
      </Text>
    </React.StrictMode>
  </ChakraProvider>
);
