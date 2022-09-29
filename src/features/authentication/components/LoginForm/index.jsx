import {useAuth} from "context/AuthContextProvider";
import * as Yup from "yup";
import LoginFormRenderer from "./LoginFormRenderer";

const LoginForm = (props) => {
  const {login, errors} = useAuth();

  const formikProps = {
    initialValues: {email: "", password: ""},
    validationSchema: Yup.object({
      email: Yup.string().required("Please input an email").email("Invalid email"),
      password: Yup.string().required("Please input a password"),
    }),
    onSubmit: login,
  };

  return <LoginFormRenderer formikProps={formikProps} errors={errors} {...props} />;
};

export default LoginForm;
