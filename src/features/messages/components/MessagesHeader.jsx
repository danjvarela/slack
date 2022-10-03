import {Heading, Menu, MenuButton, MenuList, MenuItem, Button} from "@chakra-ui/react";
import Header from "layouts/Header";
import {useReceivers} from "context/ReceiverContextProvider";
import ChannelMemberAvatars from "features/channels/components/ChannelMemberAvatars";
import {isEmpty} from "utils";

const MessagesHeader = () => {
  const {currentReceiver: receiver, members} = useReceivers();

  const title = receiver.class === "Channel" ? receiver.name : receiver.email;

  return (
    <Header size="sm" variant="outlined" justifyContent="space-between">
      <Heading size="sm">{title}</Heading>
      {receiver.class === "Channel" ? (
        <Menu>
          <MenuButton as={Button} variant="unstyled">
            <ChannelMemberAvatars />
          </MenuButton>
          {!isEmpty(members) ? (
            <MenuList>
              {members.map((member) =>
                member?.email ? (
                  <MenuItem key={member?.uid}>{member?.email}</MenuItem>
                ) : null
              )}
            </MenuList>
          ) : null}
        </Menu>
      ) : null}
    </Header>
  );
};

export default MessagesHeader;
