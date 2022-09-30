import {useChannels} from "context/ChannelContextProvider";
import SidebarGroup from "layouts/Sidebar/SidebarGroup";
import {isEmpty} from "utils";
import ChannelItem from "./ChannelItem";
import CreateChannelForm from "./CreateChannelForm";

const Channels = () => {
  const {channels} = useChannels();

  return (
    <SidebarGroup name="Channels" modifiers={<CreateChannelForm />}>
      {!isEmpty(channels)
        ? channels.map((channel, index) => <ChannelItem channel={channel} key={index} />)
        : null}
    </SidebarGroup>
  );
};

export default Channels;
