import {Center, VStack, Text} from "@chakra-ui/react";
import {ColorModeSwitcher} from "components/ColorModeSwitcher";
import Header from "layouts/Header";
import Card from "components/Card";

const Home = () => {
  return (
    <VStack w="full" h="100vh">
      <Header justifyContent="flex-end" size="md">
        <ColorModeSwitcher />
      </Header>
      <Center w="full" flexGrow={1}>
        <Card>
          <Text>Somecontent</Text>
        </Card>
      </Center>
    </VStack>
  );
};

export default Home;
