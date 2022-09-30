import {VStack, HStack, Button, Text, Avatar, List, ListItem} from "@chakra-ui/react";
import {FaEdit} from "react-icons/fa";
import ColorModeSwitcher from "components/ColorModeSwitcher";
import Header from "layouts/Header";
import {AuthContextProvider} from "context/AuthContextProvider";
import {ChannelContextProvider} from "context/ChannelContextProvider";
import MessageBox from "features/messages/components/MessageBox";
import Channels from "features/channels/components/Channels";
import Sidebar from "layouts/Sidebar";

const App = () => {
  return (
    <AuthContextProvider>
      <ChannelContextProvider>
        <VStack w="full" h="100vh" spacing={0}>
          <Header justifyContent="flex-end" size="md" variant="outlined">
            <ColorModeSwitcher />
          </Header>
          <HStack w="full" flexGrow={1} spacing={0}>
            <Sidebar />
            <VStack flexGrow={1} h="full">
              <Header size="sm" variant="outlined" justifyContent="space-between">
                <Text>Receiver Name</Text>
                <Text>Avatars</Text>
              </Header>
              <VStack w="full" flexGrow={1} px={5}>
                <List w="full" spacing={5}>
                  <ListItem display="flex" gap={3} alignItems="center">
                    <Avatar
                      name="Dan Abrahmov"
                      src="https://bit.ly/dan-abramov"
                      size="sm"
                    />
                    <Text>Hi</Text>
                  </ListItem>
                  <ListItem display="flex" gap={3} alignItems="center">
                    <Avatar
                      name="Dan Abrahmov"
                      src="https://bit.ly/dan-abramov"
                      size="sm"
                    />
                    <Text>Hi</Text>
                  </ListItem>
                </List>
              </VStack>
              <HStack w="full" p={5}>
                <MessageBox />
              </HStack>
            </VStack>
          </HStack>
        </VStack>
      </ChannelContextProvider>
    </AuthContextProvider>
  );
};

export default App;
