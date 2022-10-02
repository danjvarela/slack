import {
  VStack,
  HStack,
  Text,
  Avatar,
  List,
  ListItem,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import ColorModeSwitcher from "components/ColorModeSwitcher";
import Header from "layouts/Header";
import MessageBox from "features/messages/components/MessageBox";
import Sidebar from "layouts/Sidebar";
import Channels from "features/channels/components/Channels";
import DirectMessages from "features/directmessages/components/DirectMessages";
import ProvidersWrapper from "layouts/ProvidersWrapper";
import MessagesHeader from "features/messages/components/MessagesHeader";
import MessagesSection from "features/messages/components/MessagesSection";

const User = () => {
  return (
    <ProvidersWrapper>
      <VStack w="full" h="100vh" spacing={0}>
        <Header justifyContent="flex-end" size="md" variant="outlined">
          <ColorModeSwitcher />
        </Header>
        <HStack w="full" flexGrow={1} spacing={0}>
          <Sidebar>
            <Channels />
            <DirectMessages />
          </Sidebar>
          <Grid
            flexGrow={1}
            h="full"
            maxH="full"
            gridTemplateRows="auto 1fr auto"
            alignItems="stretch"
          >
            <GridItem>
              <MessagesHeader />
            </GridItem>
            <GridItem bg="gray.700" overflow="scroll" as={List}>
              <MessagesSection />
            </GridItem>
            <GridItem w="full" p={5} as={HStack}>
              <MessageBox />
            </GridItem>
          </Grid>
        </HStack>
      </VStack>
    </ProvidersWrapper>
  );
};

export default User;
