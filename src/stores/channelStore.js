import {createStore} from "@udecode/zustood";

const channelStore = createStore("channel")(() => ({
  channels: [],
  errMessages: [],
}));

export default channelStore;
