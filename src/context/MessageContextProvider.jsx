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
    if (!isEmpty(response.data.errors)) return setErrors(response.data.errors);
    setMessages(response.data.data ?? []);
  };

  return (
    <MessageContext.Provider value={{messages, errors, sendMessage, getMessages}}>
      {children}
    </MessageContext.Provider>
  );
};

export {MessageContextProvider, useMessages};
