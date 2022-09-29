import {createContext, useContext, useEffect, useState} from "react";
import {useCookies} from "react-cookie";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({children}) => {
  const [userCookie, setUserCookie] = useCookies(["user"]);
  const [auth, setAuth] = useState(userCookie?.auth ?? {data: {}, headers: {}});

  useEffect(() => {
    setUserCookie("auth", auth);
  }, [auth]);

  return <AuthContext.Provider value={{auth, setAuth}}>{children}</AuthContext.Provider>;
};

export {AuthContextProvider, useAuth};
