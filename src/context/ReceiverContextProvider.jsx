import {createContext, useContext, useEffect, useState} from "react";
import {useChannels} from "./ChannelContextProvider";
import {useUsers} from "./UserContextProvider";

const ReceiverContext = createContext();

const useReceivers = () => useContext(ReceiverContext);

const ReceiverContextProvider = ({children}) => {
  const [currentReceiver, setCurrentReceiver] = useState();
  const [allReceivers, setAllReceivers] = useState({});
  const {users} = useUsers();
  const {channels} = useChannels();

  useEffect(() => {
    setAllReceivers({users, channels});
  }, [users, channels]);

  return (
    <ReceiverContext.Provider
      value={{currentReceiver, setCurrentReceiver, allReceivers, setAllReceivers}}
    >
      {children}
    </ReceiverContext.Provider>
  );
};

export {ReceiverContextProvider, useReceivers};
