import {
  VStack,
  HStack,
  Button,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Avatar,
  Heading,
  IconButton,
  List,
  ListItem,
} from "@chakra-ui/react";
import {FaEdit, FaPlus} from "react-icons/fa";
import ColorModeSwitcher from "components/ColorModeSwitcher";
import Header from "layouts/Header";
import {AuthContextProvider} from "context/AuthContextProvider";
import MessageBox from "features/messages/components/MessageBox";

const App = () => {
  return (
    <AuthContextProvider>
      <VStack w="full" h="100vh" spacing={0}>
        <Header justifyContent="flex-end" size="md" variant="outlined">
          <ColorModeSwitcher />
        </Header>
        <HStack w="full" flexGrow={1} spacing={0}>
          <VStack
            w={56}
            h="full"
            borderRightWidth={1}
            display={{base: "none", md: "unset"}}
          >
            <Header size="sm" variant="outlined" px={0}>
              <Button w="full" borderRadius={0} gap={1}>
                New Message <FaEdit />
              </Button>
            </Header>
            <Accordion defaultIndex={[0]} allowMultiple w="full" borderWidth={0}>
              <AccordionItem>
                <HStack spacing={0}>
                  <AccordionButton justifyContent="flex-start">
                    <AccordionIcon />
                    <Heading size="sm" flex="1" textAlign="left">
                      Channels
                    </Heading>
                  </AccordionButton>
                  <IconButton icon={<FaPlus />} isRound variant="ghost" size="sm" />
                </HStack>
                <AccordionPanel pb={4}>
                  <List spacing={2} w="full" pl={2}>
                    <ListItem>
                      <Button
                        size="sm"
                        w="full"
                        justifyContent="flex-start"
                        variant="outline"
                        borderWidth={0}
                      >
                        Channel1
                      </Button>
                    </ListItem>
                  </List>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </VStack>
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
    </AuthContextProvider>
  );
};

export default App;
