import {Avatar, AvatarGroup} from "@chakra-ui/react";
import selectOptionStore from "stores/selectOptionStore";
import {isEmpty} from "utils";

const ChannelMemberAvatars = () => {
  const channelMembers = selectOptionStore.use.channelMembers();

  return (
    <AvatarGroup size="xs" max={3}>
      {!isEmpty(channelMembers)
        ? channelMembers.map((member) =>
            member ? <Avatar name={member.email} key={member.uid} /> : null
          )
        : null}
    </AvatarGroup>
  );
};

export default ChannelMemberAvatars;
