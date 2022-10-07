import {Avatar, Text} from "@chakra-ui/react";
import SidebarItem from "layouts/Sidebar/SidebarItem";
import receiverStore from "stores/receiverStore";

const DirectMessageItem = ({user}) => {
  const {email} = user;

  return (
    <SidebarItem
      onClick={() => receiverStore.set.currentReceiver({...user, class: "User"})}
    >
      <Avatar size="xs" name={email} />
      <Text>{email}</Text>
    </SidebarItem>
  );
};

export default DirectMessageItem;
