import {Avatar, AvatarGroup} from "@chakra-ui/react";
import {useReceivers} from "context/ReceiverContextProvider";
import {isEmpty} from "utils";

const ChannelMemberAvatars = () => {
  const {members} = useReceivers();

  return (
    <AvatarGroup size="xs" max={3}>
      {!isEmpty(members)
        ? members.map((member) =>
            member ? <Avatar name={member.email} key={member.uid} /> : null
          )
        : null}
    </AvatarGroup>
  );
};

export default ChannelMemberAvatars;
