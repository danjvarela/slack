import {useAuth} from "context/AuthContextProvider";
import {postRequest} from "lib/axios";
import {useState} from "react";
import * as Yup from "yup";
import LoginFormRenderer from "./LoginFormRenderer";

const login = async (data) => {
  try {
    return await postRequest("/api/v1/auth/sign_in", data);
  } catch (err) {
    return err?.response?.data;
  }
};

const LoginForm = (props) => {
  const {setAuth} = useAuth();
  const [errors, setErrors] = useState([]);

  const formikProps = {
    initialValues: {email: "", password: ""},
    validationSchema: Yup.object({
      email: Yup.string().required("Please input an email").email("Invalid email"),
      password: Yup.string().required("Please input a password"),
    }),
    onSubmit: async (values) => {
      const loginResponse = await login(values);
      console.log(loginResponse);
      const {errors, data, headers} = loginResponse ?? {};
      if (errors) return setErrors(errors);
      setAuth({...data, headers});
    },
  };

  return <LoginFormRenderer formikProps={formikProps} errors={errors} {...props} />;
};

export default LoginForm;
