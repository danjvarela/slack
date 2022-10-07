import {useCallback, useEffect} from "react";
import authStore from "stores/authStore";
import {getRequest} from "lib/axios";
import userStore from "stores/userStore";
import selectOptionStore from "stores/selectOptionStore";

const useUsers = () => {
  const auth = authStore.use.auth();
  const users = userStore.use.users();

  const getUsers = useCallback(async () => {
    const response = await getRequest("/api/v1/users", {headers: auth?.headers ?? {}});
    const {errors, data} = response.data;
    userStore.set.errMessages(Array.isArray(errors) ? errors : [errors]);
    userStore.set.users(data ?? []);
  }, [auth]);

  useEffect(() => {
    selectOptionStore.set.users(
      users.map((user) => ({value: user.id, label: user.email, class: "User"}))
    );
  }, [users]);

  useEffect(() => {
    const id = setTimeout(() => {
      getUsers();
    }, 3000);
    return () => clearTimeout(id);
  });

  return {getUsers};
};

export default useUsers;
