import {Heading, Menu, MenuButton, MenuList, MenuItem, Button} from "@chakra-ui/react";
import Header from "layouts/Header";
import ChannelMemberAvatars from "features/channels/components/ChannelMemberAvatars";
import {isEmpty} from "utils";
import AddUserToChannelForm from "features/channels/components/AddUserToChannelForm";
import receiverStore from "stores/receiverStore";
import selectOptionStore from "stores/selectOptionStore";
import {useEffect, useState} from "react";

const MessagesHeader = () => {
  const receiver = receiverStore.use.currentReceiver();
  const channelMembers = selectOptionStore.use.channelMembers();
  const [title, setTitle] = useState();

  useEffect(() => {
    if (receiver) setTitle(receiver.class === "Channel" ? receiver.name : receiver.email);
  }, [receiver]);

  return !isEmpty(receiver) ? (
    <Header size="sm" variant="outlined" justifyContent="space-between">
      <Heading size="sm">
        {title} <AddUserToChannelForm />
      </Heading>
      {receiver.class === "Channel" ? (
        <Menu>
          <MenuButton as={Button} variant="unstyled">
            <ChannelMemberAvatars />
          </MenuButton>
          {!isEmpty(channelMembers) ? (
            <MenuList>
              {channelMembers.map((member) =>
                member?.email ? (
                  <MenuItem key={member?.uid}>{member?.email}</MenuItem>
                ) : null
              )}
            </MenuList>
          ) : null}
        </Menu>
      ) : null}
    </Header>
  ) : null;
};

export default MessagesHeader;
