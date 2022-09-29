import Card from "components/Card";
import {VStack, Button, Divider, Link, Text} from "@chakra-ui/react";
import {Formik, Form} from "formik";
import {Link as RouterLink} from "react-router-dom";
import * as Yup from "yup";
import Input from "components/Input";
import PasswordInput from "components/PasswordInput";

const SignupForm = (props) => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        password_confirmation: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string().required("Please input an email").email("Invalid email"),
        password: Yup.string().required("Please input a password"),
        password_confirmation: Yup.string()
          .required("Please retype the password for confirmation")
          .oneOf([Yup.ref("password")], "Passwords do not match"),
      })}
    >
      <Card {...props} gap={5}>
        <VStack as={Form} w="full" gap={5}>
          <VStack w="full" gap={1}>
            <Input
              label="Email"
              name="email"
              placeholder="user@example.com"
              variant="filled"
            />
            <PasswordInput label="Password" name="password" variant="filled" />
            <PasswordInput
              label="Confirm Password"
              name="password_confirmation"
              variant="filled"
            />
          </VStack>
          <Button w="full" colorScheme="purple" type="submit">
            Sign up
          </Button>
        </VStack>
        <Divider orientation="horizontal" />
        <Text>
          Already have an account?{" "}
          <Link as={RouterLink} to="/login" color="blue.500">
            Log in
          </Link>
        </Text>
      </Card>
    </Formik>
  );
};

export default SignupForm;
