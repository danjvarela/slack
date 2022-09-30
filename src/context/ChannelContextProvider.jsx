import {createContext, useContext, useState, useEffect} from "react";
import {useAuth} from "context/AuthContextProvider";
import {getRequest, postRequest} from "lib/axios";
import {isEmpty} from "utils";

const ChannelContext = createContext();

const useChannels = () => useContext(ChannelContext);

const ChannelContextProvider = ({children}) => {
  const {auth} = useAuth();
  const [errors, setErrors] = useState([]);
  const [channels, setChannels] = useState([]);

  const getChannels = async () => {
    const response = await getRequest("/api/v1/channels", {headers: auth.headers});
    if (!isEmpty(response.data.errors)) return setErrors(response.data.errors);
    setChannels(response.data.data ?? []);
  };

  const createChannel = async (body) => {
    const response = await postRequest("/api/v1/channels", {
      body: body,
      headers: auth.headers,
    });
    if (!isEmpty(response.data.errors)) return setErrors(response.data.errors);
    setChannels([...channels, response.data.data ?? []]);
  };

  const getChannelDetails = async (id) => {
    const response = await getRequest("/api/v1/channels", {params: {id: id}});
    if (!isEmpty(response.data.errors)) return response.data.errors;
    return response.data.data ?? {};
  };

  const addMemberToChannel = async (body) => {
    const response = await postRequest("/api/v1/channel/add_member", {body: body});
    if (!isEmpty(response.data.errors)) return response.data.errors;
    return response.data.data ?? {};
  };

  useEffect(() => {
    getChannels();
  }, [auth]);

  return (
    <ChannelContext.Provider
      value={{
        channels,
        errors,
        getChannels,
        createChannel,
        getChannelDetails,
        addMemberToChannel,
      }}
    >
      {children}
    </ChannelContext.Provider>
  );
};

export {ChannelContextProvider, useChannels};
