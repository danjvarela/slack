import {useChannels} from "context/ChannelContextProvider";
import {useEffect} from "react";
import receiverStore from "stores/receiverStore";
import selectOptionStore from "stores/selectOptionStore";

const useReceivers = () => {
  const {getChannelDetails} = useChannels();
  const userOptions = selectOptionStore.use.users();
  const users = selectOptionStore.use.users();
  const channelOptions = selectOptionStore.use.channels();
  const currentReceiver = receiverStore.use.currentReceiver();

  useEffect(() => {
    if (currentReceiver.class === "Channel") {
      getChannelDetails(currentReceiver.id)
        .then((channel) =>
          channel.channel_members.map((member) =>
            users.find((user) => user.id === member.user_id)
          )
        )
        .then((members) => {
          selectOptionStore.set.channelMembers(members);
        });
    }
  }, [currentReceiver, users]);

  useEffect(() => {
    selectOptionStore.set.receivers([...channelOptions, ...userOptions]);
  }, [channelOptions, userOptions]);
};

export default useReceivers;
