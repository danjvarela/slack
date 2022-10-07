import {createStore} from "@udecode/zustood";

const receiverStore = createStore("receiver")(
  () => ({
    allReceivers: [],
    currentReceiver: null,
    errMessages: [],
  }),
  {
    persist: {
      enabled: true,
      partialize: (state) => ({currentReceiver: state.currentReceiver}),
    },
  }
);

export default receiverStore;
