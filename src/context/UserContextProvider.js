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

  const getUsers = async () => {
    const response = await getRequest("/api/v1/users", {headers: auth.headers});
    if (!isEmpty(response.data.errors)) return setErrors(response.data.errors);
    setUsers(response.data.data);
  };

  useEffect(() => {
    getUsers();
  }, [auth]);

  return (
    <UserContext.Provider value={{users, errors, getUsers}}>
      {children}
    </UserContext.Provider>
  );
};

export {UserContextProvider, useUsers};
