import {extendTheme} from "@chakra-ui/react";
import Header from "./components/Header";

const theme = extendTheme({
  components: {
    Header,
  },
});

export default theme;
