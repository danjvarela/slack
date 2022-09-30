import {IconButton} from "@chakra-ui/react";
import SidebarGroup from "layouts/Sidebar/SidebarGroup";
import SidebarItem from "layouts/Sidebar/SidebarItem";
import {FaPlus} from "react-icons/fa";
import ChannelItem from "./ChannelItem";

const Channels = () => {
  return (
    <SidebarGroup
      name="Channels"
      modifiers={<IconButton icon={<FaPlus />} variant="ghost" isRound size="sm" />}
    >
      <SidebarItem>
        <ChannelItem name="Channel 1" />
      </SidebarItem>
    </SidebarGroup>
  );
};

export default Channels;
