import {Avatar, Text} from "@chakra-ui/react";
import SidebarItem from "layouts/Sidebar/SidebarItem";
import {useReceivers} from "context/ReceiverContextProvider";

const ChannelItem = ({channel}) => {
  const {name} = channel;
  const {setCurrentReceiver} = useReceivers();

  return (
    <SidebarItem onClick={() => setCurrentReceiver({...channel, class: "Channel"})}>
      <Avatar size="xs" name={name} />
      <Text>{name}</Text>
    </SidebarItem>
  );
};

export default ChannelItem;
