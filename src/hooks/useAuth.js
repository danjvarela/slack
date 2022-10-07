import {postRequest} from "lib/axios";
import {useCallback, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import authStore from "stores/authStore";

const useAuth = () => {
  const auth = authStore.use.auth();
  const navigate = useNavigate();

  const login = useCallback(async (body) => {
    try {
      const {data, headers} = await postRequest("/api/v1/auth/sign_in", body);
      authStore.set.auth({...data, headers});
    } catch (err) {
      const messages = err.response.data?.errors ?? [];
      authStore.set.errMessages(Array.isArray(messages) ? messages : [messages]);
    }
  }, []);

  const signup = useCallback(async (body) => {
    try {
      postRequest("/api/v1/auth/", body);
      login({email: body.email, password: body.password});
    } catch (err) {
      const messages = err.response.data.errors?.full_messages ?? [];
      authStore.set.errMessages(Array.isArray(messages) ? messages : [messages]);
    }
  }, []);

  const logout = useCallback(() => {
    authStore.set.auth(null);
  }, []);

  useEffect(() => {
    if (auth?.data?.id) navigate(`/users/${auth.data?.id}`);
  }, [auth]);

  return {login, signup, logout};
};

export default useAuth;
