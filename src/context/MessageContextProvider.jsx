import {getRequest, postRequest} from "lib/axios";
import {createContext, useContext, useEffect, useState} from "react";
import {useAuth} from "./AuthContextProvider";
import {isEmpty} from "utils";

const MessageContext = createContext();

const useMessages = () => useContext(MessageContext);

const MessageContextProvider = ({children}) => {
  const {auth} = useAuth();
  const [messages, setMessages] = useState([]);
  const [errors, setErrors] = useState([]);
  const [directMessages, setDirectMessages] = useState([]);

  const handleError = (errors, fn) => {
    if (!isEmpty(errors)) return setErrors(Array.isArray(errors) ? errors : [errors]);
    fn();
  };

  const sendMessage = async (content) => {
    const response = await postRequest("/api/v1/messages", content, {
      headers: auth.headers,
    });
    if (!isEmpty(response.data.errors)) return response.data.errors;
    return response.data.data ?? {};
  };

  const getMessages = async (params = {}) => {
    const response = await getRequest("/api/v1/messages", {
      params: params,
      headers: auth.headers,
    });
    const {errors, data} = response.data;
    handleError(errors, () => setMessages(data ?? []));
  };

  return (
    <MessageContext.Provider
      value={{
        messages,
        errors,
        sendMessage,
        getMessages,
        directMessages,
        setDirectMessages,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export {MessageContextProvider, useMessages};
