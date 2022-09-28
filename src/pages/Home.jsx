import {Box, Center, VStack, Text, HStack, Heading} from "@chakra-ui/react";
import ColorModeSwitcher from "components/ColorModeSwitcher";
import Header from "layouts/Header";
import {ReactComponent as SlackLogo} from "assets/slack.svg";
import {ReactComponent as PeopleSvg} from "assets/people.svg";
import LoginForm from "features/authentication/components/LoginForm";
import AuthenticationLayout from "layouts/Authentication";

const Home = () => {
  return (
    <AuthenticationLayout>
      <Center w="full" flexDir={{base: "column", md: "row"}} gap={5}>
        <VStack alignItems={{base: "center", md: "flex-start"}} maxW="sm">
          <Heading display="flex" alignItems="center">
            <SlackLogo />
            Welcome to Slack!
          </Heading>
          <Text textAlign={{base: "center", md: "left"}}>
            Log in now and start collaborating or hanging out with your friends!
          </Text>
          <PeopleSvg />
        </VStack>
        <LoginForm w="full" />
      </Center>
    </AuthenticationLayout>
  );
};

export default Home;
