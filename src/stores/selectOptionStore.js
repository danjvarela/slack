import {createStore} from "@udecode/zustood";

const selectOptionStore = createStore("selectOption")({
  users: [],
  channels: [],
  receivers: [],
  channelMembers: [],
});

export default selectOptionStore;
