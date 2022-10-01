import {createContext, useContext, useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import {postRequest} from "lib/axios";
import {useNavigate} from "react-router-dom";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({children}) => {
  const [errors, setErrors] = useState([]);
  const [userCookie, setUserCookie] = useCookies(["user"]);
  const [auth, setAuth] = useState(userCookie?.auth ?? {});
  const navigate = useNavigate();

  const login = async (values) => {
    let loginResponse;
    try {
      loginResponse = await postRequest("/api/v1/auth/sign_in", values);
    } catch (err) {
      setErrors(err.response?.data ?? []);
      return;
    }
    const {data, headers} = loginResponse;
    setAuth({...data, headers}, {path: "/"});
  };

  const signup = async (values) => {
    let signupResponse;
    try {
      signupResponse = await postRequest("/api/v1/auth/", values);
    } catch (err) {
      setErrors(err.response?.data?.errors?.full_messages ?? []);
      return;
    }
    if (signupResponse) login(values);
  };

  useEffect(() => {
    setUserCookie("auth", auth);
    if (auth.data?.id) navigate(`/users/${auth.data.id}`);
  }, [auth]);

  return (
    <AuthContext.Provider value={{auth, errors, login, signup}}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthContextProvider, useAuth};
