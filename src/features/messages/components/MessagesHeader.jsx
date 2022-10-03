import {Heading} from "@chakra-ui/react";
import Header from "layouts/Header";
import {useReceivers} from "context/ReceiverContextProvider";
import ChannelMemberAvatars from "features/channels/components/ChannelMemberAvatars";

const MessagesHeader = () => {
  const {currentReceiver: receiver} = useReceivers();

  const title = receiver.class === "Channel" ? receiver.name : receiver.email;

  return (
    <Header size="sm" variant="outlined" justifyContent="space-between">
      <Heading size="sm">{title}</Heading>
      {receiver.class === "Channel" ? (
        <ChannelMemberAvatars channelId={receiver.id} />
      ) : null}
    </Header>
  );
};

export default MessagesHeader;
