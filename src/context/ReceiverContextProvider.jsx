import {createContext, useContext, useEffect, useState} from "react";
import {useChannels} from "./ChannelContextProvider";
import {useUsers} from "./UserContextProvider";

const ReceiverContext = createContext();

const useReceivers = () => useContext(ReceiverContext);

const ReceiverContextProvider = ({children}) => {
  const [currentReceiver, setCurrentReceiver] = useState({});
  const [allReceivers, setAllReceivers] = useState({});
  const {users, userOptions} = useUsers();
  const {channels, channelOptions} = useChannels();
  const [receiverOptions, setReceiverOptions] = useState([]);

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
      }}
    >
      {children}
    </ReceiverContext.Provider>
  );
};

export {ReceiverContextProvider, useReceivers};
