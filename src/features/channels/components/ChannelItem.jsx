import {Avatar, Text} from "@chakra-ui/react";
import SidebarItem from "layouts/Sidebar/SidebarItem";
import receiverStore from "stores/receiverStore";

const ChannelItem = ({channel}) => {
  const {name} = channel;

  return (
    <SidebarItem
      onClick={() => receiverStore.set.currentReceiver({...channel, class: "Channel"})}
    >
      <Avatar size="xs" name={name} />
      <Text>{name}</Text>
    </SidebarItem>
  );
};

export default ChannelItem;
