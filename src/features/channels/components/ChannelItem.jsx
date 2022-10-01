import {Avatar, Text} from "@chakra-ui/react";
import SidebarItem from "layouts/Sidebar/SidebarItem";

const ChannelItem = ({channel}) => {
  const {name} = channel;
  return (
    <SidebarItem>
      <Avatar size="xs" name={name} />
      <Text>{name}</Text>
    </SidebarItem>
  );
};

export default ChannelItem;
