import {useCallback, useEffect} from "react";
import authStore from "stores/authStore";
import channelStore from "stores/channelStore";
import selectOptionStore from "stores/selectOptionStore";
import {isEmpty} from "utils";
import {postRequest, getRequest} from "lib/axios";

const useChannels = () => {
  const auth = authStore.use.auth();
  const channels = channelStore.use.channels();

  const getChannels = useCallback(async () => {
    const response = await getRequest("/api/v1/channels", {headers: auth?.headers ?? {}});
    const {errors, data} = response.data;
    if (isEmpty(errors)) channelStore.set.channels(data ?? []);
  }, [auth]);

  const createChannel = useCallback(
    async (body) => {
      const response = await postRequest("/api/v1/channels", body, {
        headers: auth?.headers ?? {},
      });
      const {errors, data} = response.data;
      channelStore.set.errMessages(Array.isArray(errors) ? errors : [errors]);
      channelStore.set.channels([...channelStore.get.channels, data ?? []]);
    },
    [auth]
  );

  const getChannelDetails = useCallback(
    async (id) => {
      const response = await getRequest(`/api/v1/channels/${id}`, {
        headers: auth?.headers ?? {},
      });
      const {errors, data} = response.data;
      if (!isEmpty(errors)) return errors;
      return data ?? {};
    },
    [auth]
  );

  const addMemberToChannel = useCallback(
    async (body) => {
      const response = await postRequest("/api/v1/channel/add_member", body, {
        headers: auth?.headers ?? {},
      });
      const {errors} = response.data;
      channelStore.set.errMessages(Array.isArray(errors) ? errors : [errors]);
    },
    [auth]
  );

  useEffect(() => {
    selectOptionStore.set.channels(
      channels.map((channel) => ({
        label: channel.name,
        value: channel.id,
        class: "Channel",
      }))
    );
  }, [channels]);

  useEffect(() => {
    const id = setTimeout(() => {
      getChannels();
    }, 1000);
    return () => clearTimeout(id);
  });

  return {getChannels, createChannel, getChannelDetails, addMemberToChannel};
};

export default useChannels;
