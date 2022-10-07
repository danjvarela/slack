import SidebarGroup from "layouts/Sidebar/SidebarGroup";
import channelStore from "stores/channelStore";
import {isEmpty} from "utils";
import ChannelItem from "./ChannelItem";
import CreateChannelForm from "./CreateChannelForm";

const Channels = () => {
  const channels = channelStore.use.channels();

  return (
    <SidebarGroup name="Channels" modifiers={<CreateChannelForm />}>
      {!isEmpty(channels)
        ? channels.map((channel, index) => {
            return <ChannelItem channel={channel} key={index} />;
          })
        : null}
    </SidebarGroup>
  );
};

export default Channels;
