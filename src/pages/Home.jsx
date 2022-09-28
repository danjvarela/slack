import {Center, VStack} from "@chakra-ui/react";
import {ColorModeSwitcher} from "components/ColorModeSwitcher";
import Header from "layouts/Header";

const Home = () => {
  return (
    <VStack w="full" h="100vh">
      <Header justifyContent="flex-end" size="md">
        <ColorModeSwitcher />
      </Header>
      <Center></Center>
    </VStack>
  );
};

export default Home;
