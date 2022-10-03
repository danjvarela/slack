import {List} from "@chakra-ui/react";
import {isEmpty} from "utils";
import MessageItem from "./MessageItem";
import {useReceivers} from "context/ReceiverContextProvider";
import {useEffect} from "react";
import {useMessages} from "context/MessageContextProvider";

const MessagesSection = () => {
  const {currentReceiver} = useReceivers();
  const {messages, getMessages} = useMessages();

  useEffect(() => {
    const {id: receiver_id, class: receiver_class} = currentReceiver;
    const id = setTimeout(() => getMessages({receiver_id, receiver_class}), 0.5 * 1000);
    return () => clearTimeout(id);
  });

  return (
    <List w="full" h="90%" overflowY="scroll" spacing={5} px={5}>
      {!isEmpty(messages)
        ? messages.map((message) => <MessageItem key={message.id} message={message} />)
        : null}
    </List>
  );
};

export default MessagesSection;
