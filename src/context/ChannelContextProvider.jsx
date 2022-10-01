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

  const handleError = (errors, fn) => {
    if (!isEmpty(errors)) return setErrors(Array.isArray(errors) ? errors : [errors]);
    fn();
  };

  const getChannels = async () => {
    const response = await getRequest("/api/v1/channels", {headers: auth.headers});
    const {errors, data} = response.data;
    handleError(errors, () => setChannels(data ?? []));
  };

  const createChannel = async (body) => {
    const response = await postRequest("/api/v1/channels", body, {headers: auth.headers});
    const {errors, data} = response.data;
    handleError(errors, () => setChannels([...channels, data ?? []]));
  };

  const getChannelDetails = async (id) => {
    const response = await getRequest("/api/v1/channels", {
      params: {id: id},
      headers: auth.headers,
    });
    const {errors, data} = response.data;
    if (!isEmpty(errors)) return errors;
    return data ?? {};
  };

  const addMemberToChannel = async (body) => {
    const response = await postRequest("/api/v1/channel/add_member", body, {
      headers: auth.headers,
    });
    const {errors, data} = response.data;
    if (!isEmpty(errors)) return errors;
    return data ?? {};
  };

  useEffect(() => {
    getChannels();
  }, []);

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
