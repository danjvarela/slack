import {Center, VStack, Text, HStack, Heading} from "@chakra-ui/react";
import {ColorModeSwitcher} from "components/ColorModeSwitcher";
import Header from "layouts/Header";
import {ReactComponent as SlackLogo} from "assets/slack.svg";

const Home = () => {
  return (
    <VStack w="full" h="100vh">
      <Header justifyContent="flex-end" size="md">
        <ColorModeSwitcher />
      </Header>
      <Center w="full" flexGrow={1}>
        <HStack>
          <VStack alignItems="flex-start">
            <Heading display="flex">
              <SlackLogo />
              Welcome to Slack!
            </Heading>
            <Text>
              Log in now and start collaborating or hanging out with your friends!
            </Text>
          </VStack>
        </HStack>
      </Center>
    </VStack>
  );
};

export default Home;
