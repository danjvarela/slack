import {createContext, useContext, useState} from "react";

const ReceiverContext = createContext();

const useReceivers = () => useContext(ReceiverContext);

const ReceiverContextProvider = ({children}) => {
  const [receiver, setReceiver] = useState({});

  return (
    <ReceiverContext.Provider value={{receiver, setReceiver}}>
      {children}
    </ReceiverContext.Provider>
  );
};

export {ReceiverContextProvider, useReceivers};
