import useAuth from "hooks/useAuth";
import authStore from "stores/authStore";
import * as Yup from "yup";
import SignupFormRenderer from "./SignupFormRenderer";

const SignupForm = (props) => {
  const {signup} = useAuth();
  const errMessages = authStore.use.errMessages();

  const formikProps = {
    initialValues: {email: "", password: "", password_confirmation: ""},
    validationSchema: Yup.object({
      email: Yup.string().required("Please input an email").email("Invalid email"),
      password: Yup.string().required("Please input a password"),
      password_confirmation: Yup.string()
        .required("Please retype the password for confirmation")
        .oneOf([Yup.ref("password")], "Passwords do not match"),
    }),
    onSubmit: signup,
  };

  return (
    <SignupFormRenderer formikProps={formikProps} errMessages={errMessages} {...props} />
  );
};

export default SignupForm;
