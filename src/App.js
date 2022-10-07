import React, {useEffect} from "react";
import {ChakraProvider} from "@chakra-ui/react";
import router from "router";
import {RouterProvider} from "react-router-dom";
import theme from "theme";
import authStore from "stores/authStore";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
};

export default App;
