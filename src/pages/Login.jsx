import AuthenticationLayout from "layouts/Authentication";
import LoginForm from "features/authentication/components/LoginForm";

const Login = () => {
  return (
    <AuthenticationLayout>
      <LoginForm w="full" />
    </AuthenticationLayout>
  );
};

export default Login;
