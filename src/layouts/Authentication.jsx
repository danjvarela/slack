import {VStack, Center} from "@chakra-ui/react";
import ColorModeSwitcher from "components/ColorModeSwitcher";
import Header from "./Header";

const Authentication = ({children}) => {
  return (
    <VStack w="full" h="100vh">
      <Header justifyContent="flex-end" size="md">
        <ColorModeSwitcher />
      </Header>
      <Center w="full" flexGrow={1} px={5}>
        {children}
      </Center>
    </VStack>
  );
};

export default Authentication;
