import {useCallback} from "react";
import authStore from "stores/authStore";
import messageStore from "stores/messageStore";

const useMessages = () => {
  const auth = authStore.use.auth();

  const sendMessage = useCallback(async (content) => {
    const response = await postRequest("/api/v1/messages", content, {
      headers: auth?.headers,
    });
    const {data, errors} = response.data;
    if (!isEmpty(errors)) return errors;
    return data ?? {};
  }, []);

  const getMessages = useCallback(async (params = {}) => {
    const response = await getRequest("/api/v1/messages", {
      params: params,
      headers: auth?.headers,
    });
    const {errors, data} = response.data;
    messageStore.set.errMessages(Array.isArray(errors) ? errors : [errors]);
    messageStore.set.messages(data ?? []);
  }, []);

  return {sendMessage, getMessages};
};

export default useMessages;
