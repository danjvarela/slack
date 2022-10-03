import SidebarGroup from "layouts/Sidebar/SidebarGroup";
import {useMessages} from "context/MessageContextProvider";
import DirectMessageItem from "./DirectMessageItem";
import {isEmpty} from "utils";
import CreateDirectMessageForm from "./CreateDirectMessageForm";

const DirectMessages = () => {
  const {directMessages} = useMessages();

  return (
    <SidebarGroup name="Direct Messages" modifiers={<CreateDirectMessageForm />}>
      {!isEmpty(directMessages)
        ? directMessages.map((user) => {
            return <DirectMessageItem user={user} key={user.id} />;
          })
        : null}
    </SidebarGroup>
  );
};

export default DirectMessages;
