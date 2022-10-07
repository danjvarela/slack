import {createStore} from "@udecode/zustood";

const authStore = createStore("auth")(
  () => ({
    auth: null,
    errMessages: [],
  }),
  {
    persist: {enabled: true, partialize: (state) => ({auth: state.auth})},
  }
);

export default authStore;
