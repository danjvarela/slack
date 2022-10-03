import {Avatar, AvatarGroup} from "@chakra-ui/react";
import {useChannels} from "context/ChannelContextProvider";
import {useUsers} from "context/UserContextProvider";
import {useEffect, useState} from "react";
import {isEmpty} from "utils";

const ChannelMemberAvatars = ({channelId}) => {
  const {getChannelDetails} = useChannels();
  const {users} = useUsers();
  const [channelMembers, setChannelMembers] = useState([]);

  useEffect(() => {
    getChannelDetails(channelId)
      .then((channel) => channel.channel_members)
      .then((members) =>
        members
          .map((member) => member.id)
          .map((id) => users.find((user) => user.id === id))
      )
      .then((members) => setChannelMembers(members));
  }, [channelId]);

  return (
    <AvatarGroup size="xs" max={3}>
      {!isEmpty(channelMembers)
        ? channelMembers.map((member) => (
            <Avatar name={member?.email ?? ""} key={member?.id} />
          ))
        : null}
    </AvatarGroup>
  );
};

export default ChannelMemberAvatars;
