import {createStore} from "@udecode/zustood";

const messageStore = createStore("message")(
  {
    messages: [],
    directMessages: [],
    errMessages: [],
  },
  {
    persist: {
      enabled: true,
      partialize: (state) => ({directMessages: state.directMessages}),
    },
  }
);

export default messageStore;
