import Card from "components/Card";
import {VStack, Button, Divider, Link, Text} from "@chakra-ui/react";
import {Formik, Form} from "formik";
import * as Yup from "yup";
import Input from "components/Input";
import PasswordInput from "components/PasswordInput";

const LoginForm = (props) => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string().required("Please input an email").email("Invalid email"),
        password: Yup.string().required("Please input a password"),
      })}
    >
      <Card {...props} gap={5}>
        <VStack as={Form} w="full" gap={2}>
          <Input label="Email" name="email" placeholder="user@example.com" />
          <PasswordInput label="Password" name="password" />
          <Button w="full" colorScheme="purple" type="submit">
            Login
          </Button>
        </VStack>
        <Divider orientation="horizontal" />
        <Text>
          Don't have an account yet? <Link color="blue.500">Sign up</Link>
        </Text>
      </Card>
    </Formik>
  );
};

export default LoginForm;
