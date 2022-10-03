import {createContext, useContext, useEffect, useState} from "react";
import {useChannels} from "./ChannelContextProvider";
import {useUsers} from "./UserContextProvider";

const ReceiverContext = createContext();

const useReceivers = () => useContext(ReceiverContext);

const ReceiverContextProvider = ({children}) => {
  const [currentReceiver, setCurrentReceiver] = useState({});
  const [allReceivers, setAllReceivers] = useState({});
  const {users, userOptions} = useUsers();
  const {channels, channelOptions, getChannelDetails} = useChannels();
  const [receiverOptions, setReceiverOptions] = useState([]);
  const [members, setMembers] = useState([]);

  useEffect(() => {}, [members]);

  useEffect(() => {
    if (currentReceiver.class === "Channel") {
      getChannelDetails(currentReceiver.id)
        .then((channel) =>
          channel.channel_members.map((member) =>
            users.find((user) => user.id === member.user_id)
          )
        )
        .then((members) => {
          setMembers(members);
        });
    }
  }, [currentReceiver, users]);

  useEffect(() => {
    setReceiverOptions([...userOptions, ...channelOptions]);
  }, [channelOptions, userOptions]);

  useEffect(() => {
    setAllReceivers({users, channels});
  }, [users, channels]);

  return (
    <ReceiverContext.Provider
      value={{
        currentReceiver,
        setCurrentReceiver,
        allReceivers,
        setAllReceivers,
        receiverOptions,
        members,
      }}
    >
      {children}
    </ReceiverContext.Provider>
  );
};

export {ReceiverContextProvider, useReceivers};
