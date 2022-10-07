import {List} from "@chakra-ui/react";
import {isEmpty} from "utils";
import MessageItem from "./MessageItem";
import {useEffect} from "react";
import receiverStore from "stores/receiverStore";
import messageStore from "stores/messageStore";
import useMessages from "hooks/useMessages";

const MessagesSection = () => {
  const receiver = receiverStore.use.currentReceiver();
  const messages = messageStore.use.messages();
  const {getMessages} = useMessages();

  useEffect(() => {
    if (receiver) {
      const {id: receiver_id, class: receiver_class} = receiver;
      const id = setTimeout(() => getMessages({receiver_id, receiver_class}), 0.5 * 1000);
      return () => clearTimeout(id);
    }
  });

  return (
    <List w="full" h="100%" overflowY="scroll" spacing={5} px={5}>
      {!isEmpty(messages)
        ? messages.map((message) => <MessageItem key={message.id} message={message} />)
        : null}
    </List>
  );
};

export default MessagesSection;
