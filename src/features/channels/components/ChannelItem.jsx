import {Avatar, Text} from "@chakra-ui/react";
import SidebarItem from "layouts/Sidebar/SidebarItem";

const ChannelItem = ({channel}) => {
  const {name} = channel;
  return (
    <SidebarItem>
      <Avatar size="xs" name={name} src={`https://www.gravatar.com/avatar/?d=retro`} />
      <Text>{name}</Text>
    </SidebarItem>
  );
};

export default ChannelItem;
