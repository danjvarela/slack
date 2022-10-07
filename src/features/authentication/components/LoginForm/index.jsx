import useAuth from "hooks/useAuth";
import authStore from "stores/authStore";
import * as Yup from "yup";
import LoginFormRenderer from "./LoginFormRenderer";

const LoginForm = (props) => {
  const {login} = useAuth();
  const errMessages = authStore.use.errMessages();

  const formikProps = {
    initialValues: {email: "", password: ""},
    validationSchema: Yup.object({
      email: Yup.string().required("Please input an email").email("Invalid email"),
      password: Yup.string().required("Please input a password"),
    }),
    onSubmit: login,
  };

  return (
    <LoginFormRenderer formikProps={formikProps} errMessages={errMessages} {...props} />
  );
};

export default LoginForm;
