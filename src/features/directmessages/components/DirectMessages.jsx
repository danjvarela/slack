import SidebarGroup from "layouts/Sidebar/SidebarGroup";
import DirectMessageItem from "./DirectMessageItem";
import {isEmpty} from "utils";
import CreateDirectMessageForm from "./CreateDirectMessageForm";
import messageStore from "stores/messageStore";

const DirectMessages = () => {
  const directMessages = messageStore.use.directMessages();

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
