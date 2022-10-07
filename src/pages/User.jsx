import {VStack, HStack, Grid} from "@chakra-ui/react";
import ColorModeSwitcher from "components/ColorModeSwitcher";
import Header from "layouts/Header";
import MessageBox from "features/messages/components/MessageBox";
import Sidebar from "layouts/Sidebar";
import Channels from "features/channels/components/Channels";
import DirectMessages from "features/directmessages/components/DirectMessages";
import MessagesHeader from "features/messages/components/MessagesHeader";
import MessagesSection from "features/messages/components/MessagesSection";
import useReceivers from "hooks/useReceivers";
import useUsers from "hooks/useUsers";

const User = () => {
  useReceivers();
  useUsers();

  return (
    <Grid
      w="full"
      h="100vh"
      maxH="100vh"
      spacing={0}
      gridTemplateRows="auto 1fr"
      alignItems="stretch"
    >
      <Header justifyContent="flex-end" size="md" variant="outlined">
        <ColorModeSwitcher />
      </Header>
      <Grid
        w="full"
        h="full"
        overflowY="hidden"
        spacing={0}
        gridTemplateColumns="auto 1fr"
        gridTemplateRows="full"
      >
        <Sidebar>
          <Channels />
          <DirectMessages />
        </Sidebar>
        <VStack flexGrow={1} overflowY="hidden" h="100%">
          <MessagesHeader />
          <MessagesSection />
          <HStack w="full" p={5}>
            <MessageBox />
          </HStack>
        </VStack>
      </Grid>
    </Grid>
  );
};

export default User;
