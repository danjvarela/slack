import {
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
  IconButton,
  HStack,
  List,
  Heading,
} from "@chakra-ui/react";
import {useAuth} from "context/AuthContextProvider";
import {useChannels} from "context/ChannelContextProvider";
import {FaPlus} from "react-icons/fa";
import {isEmpty} from "utils";
import ChannelItem from "./ChannelItem";
import AddChannelForm from "./AddChannelForm";

const Channels = () => {
  const {channels} = useChannels();

  return (
    <Accordion defaultIndex={[0]} allowMultiple w="full" borderWidth={0}>
      <AccordionItem>
        <HStack spacing={0} px={2}>
          <AccordionButton justifyContent="flex-start" pl={0}>
            <AccordionIcon />
            <Heading size="sm" flex="1" textAlign="left">
              Channels
            </Heading>
          </AccordionButton>
          <AddChannelForm />
        </HStack>
        <AccordionPanel p={0}>
          <List spacing={2} w="full">
            {!isEmpty(channels)
              ? channels.map((channel, index) => (
                  <ChannelItem name={channel.name} key={index} />
                ))
              : null}
          </List>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Channels;
