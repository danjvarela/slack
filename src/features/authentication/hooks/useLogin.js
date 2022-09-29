import {postRequest} from "lib/axios";

const useLogin = () => async (data) => {
  try {
    return await postRequest("/api/v1/auth/sign_in", data);
  } catch (err) {
    return err?.response?.data;
  }
};

export default useLogin;
