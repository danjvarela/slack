import {createStore} from "@udecode/zustood";

const userStore = createStore("user")({
  users: [],
  errMessages: [],
});

export default userStore;
