import React from "react";
import {ChakraProvider} from "@chakra-ui/react";
import router from "router";
import {RouterProvider} from "react-router-dom";
import {AuthContextProvider} from "context/AuthContextProvider";
import theme from "theme";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
};

export default App;
