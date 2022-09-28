import {extendTheme} from "@chakra-ui/react";
import Header from "./components/Header";
import Card from "./components/Card";

const theme = extendTheme({
  components: {
    Header,
    Card,
  },
});

export default theme;
