import AuthenticationLayout from "layouts/Authentication";
import SignupForm from "features/authentication/components/SignupForm";

const Signup = () => {
  return (
    <AuthenticationLayout>
      <SignupForm w="full" />
    </AuthenticationLayout>
  );
};

export default Signup;
