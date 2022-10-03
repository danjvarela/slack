import {Avatar, Text} from "@chakra-ui/react";
import SidebarItem from "layouts/Sidebar/SidebarItem";
import {useReceivers} from "context/ReceiverContextProvider";

const DirectMessageItem = ({user}) => {
  const {email} = user;
  const {setCurrentReceiver} = useReceivers();

  return (
    <SidebarItem onClick={() => setCurrentReceiver({...user, class: "User"})}>
      <Avatar size="xs" name={email} />
      <Text>{email}</Text>
    </SidebarItem>
  );
};

export default DirectMessageItem;
