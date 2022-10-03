import SidebarGroup from "layouts/Sidebar/SidebarGroup";
import CreateChannelForm from "features/channels/components/CreateChannelForm";
import {useMessages} from "context/MessageContextProvider";
import DirectMessageItem from "./DirectMessageItem";
import {isEmpty} from "utils";

const DirectMessages = () => {
  const {directMessages} = useMessages();

  return (
    <SidebarGroup name="Direct Messages" modifiers={<CreateChannelForm />}>
      {!isEmpty(directMessages)
        ? directMessages.map((user) => {
            return <DirectMessageItem user={user} key={user.id} />;
          })
        : null}
    </SidebarGroup>
  );
};

export default DirectMessages;
