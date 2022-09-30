import {IconButton} from "@chakra-ui/react";
import {useChannels} from "context/ChannelContextProvider";
import SidebarGroup from "layouts/Sidebar/SidebarGroup";
import {FaPlus} from "react-icons/fa";
import {isEmpty} from "utils";
import ChannelItem from "./ChannelItem";

const Channels = () => {
  const {channels} = useChannels();

  return (
    <SidebarGroup
      name="Channels"
      modifiers={<IconButton icon={<FaPlus />} variant="ghost" isRound size="sm" />}
    >
      {!isEmpty(channels)
        ? channels.map((channel, index) => <ChannelItem channel={channel} key={index} />)
        : null}
    </SidebarGroup>
  );
};

export default Channels;
