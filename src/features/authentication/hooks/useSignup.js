import {postRequest} from "lib/axios";

const useSignup = () => async (values) => {
  try {
    return await postRequest("/api/v1/auth/", values);
  } catch (error) {
    return error.response?.data;
  }
};

export default useSignup;
