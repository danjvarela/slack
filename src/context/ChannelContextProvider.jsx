import {createContext, useMemo, useContext, useState, useEffect} from "react";
import {useAuth} from "context/AuthContextProvider";
import {getRequest, postRequest} from "lib/axios";

const ChannelContext = createContext();

const useChannels = () => useContext(ChannelContext);

const ChannelContextProvider = ({children}) => {
  const {auth} = useAuth();
  const [channels, setChannels] = useState({});
  const [errors, setErrors] = useState([]);

  const getChannels = async () => {
    const {headers} = auth;
    const response = await getRequest("/api/v1/channels", {headers});
    if (response.data?.errors) return setChannels([]);
    setChannels(response.data.data);
  };

  const addChannel = async (values, opts = {}) => {
    const response = await postRequest("/api/v1/channels", values, opts);
    if (response.data?.errors) return setErrors(response.data.errors);
    setChannels([...channels, response.data.data]);
    return response.data.data;
  };

  useEffect(() => {
    getChannels();
  }, [auth]);

  return (
    <ChannelContext.Provider value={{channels, getChannels, addChannel, errors}}>
      {children}
    </ChannelContext.Provider>
  );
};

export {ChannelContextProvider, useChannels};
