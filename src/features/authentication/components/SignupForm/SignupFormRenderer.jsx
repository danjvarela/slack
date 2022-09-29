import Card from "components/Card";
import {VStack, Button, Divider, Link, Text, Alert, AlertIcon} from "@chakra-ui/react";
import {Formik, Form} from "formik";
import {Link as RouterLink} from "react-router-dom";
import Input from "components/Input";
import PasswordInput from "components/PasswordInput";
import {isEmpty} from "utils";

const SignupFormRenderer = ({formikProps, errors, ...props}) => {
  return (
    <Formik {...formikProps}>
      <Card {...props} gap={5}>
        <VStack as={Form} w="full" gap={5}>
          {!isEmpty(errors)
            ? errors.map((error, index) => (
                <Alert status="error" key={index}>
                  <AlertIcon />
                  {error}
                </Alert>
              ))
            : null}
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

export default SignupFormRenderer;
