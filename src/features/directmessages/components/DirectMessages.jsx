import SidebarGroup from "layouts/Sidebar/SidebarGroup";
import CreateChannelForm from "features/channels/components/CreateChannelForm";

const DirectMessages = () => {
  return (
    <SidebarGroup name="Direct Messages" modifiers={<CreateChannelForm />}></SidebarGroup>
  );
};

export default DirectMessages;
