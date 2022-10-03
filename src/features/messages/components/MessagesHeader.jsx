import {Heading, Text} from "@chakra-ui/react";
import Header from "layouts/Header";
import {useReceivers} from "context/ReceiverContextProvider";

const MessagesHeader = () => {
  const {currentReceiver} = useReceivers();

  const title =
    currentReceiver.class === "Channel" ? currentReceiver.name : currentReceiver.email;

  return (
    <Header size="sm" variant="outlined" justifyContent="space-between">
      <Heading size="md">{title}</Heading>
      <Text>Avatars</Text>
    </Header>
  );
};

export default MessagesHeader;
