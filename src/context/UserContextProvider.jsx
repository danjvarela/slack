import {getRequest} from "lib/axios";
import {createContext, useContext, useEffect, useState} from "react";
import {isEmpty} from "utils";
import {useAuth} from "./AuthContextProvider";

const UserContext = createContext();

const useUsers = () => useContext(UserContext);

const UserContextProvider = ({children}) => {
  const {auth} = useAuth();
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState([]);
  const [userOptions, setUserOptions] = useState([]);

  const handleError = (errors, fn) => {
    if (!isEmpty(errors)) return setErrors(Array.isArray(errors) ? errors : [errors]);
    fn();
  };

  const getUsers = async () => {
    const response = await getRequest("/api/v1/users", {headers: auth.headers});
    const {errors, data} = response.data;
    handleError(errors, () => setUsers(data ?? []));
  };

  useEffect(() => {
    setUserOptions(users.map((user) => ({value: user.id, label: user.email})));
  }, [users]);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UserContext.Provider value={{users, errors, getUsers, userOptions}}>
      {children}
    </UserContext.Provider>
  );
};

export {UserContextProvider, useUsers};
