import Card from "components/Card";
import {VStack, Button, Divider, Link, Text, Alert, AlertIcon} from "@chakra-ui/react";
import {Formik, Form} from "formik";
import {Link as RouterLink} from "react-router-dom";
import Input from "components/Input";
import PasswordInput from "components/PasswordInput";
import {isEmpty} from "utils";

const LoginFormRenderer = ({formikProps, errors, ...props}) => {
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
          </VStack>
          <Button w="full" colorScheme="purple" type="submit">
            Login
          </Button>
        </VStack>
        <Divider orientation="horizontal" />
        <Text>
          Don't have an account yet?{" "}
          <Link as={RouterLink} color="blue.500" to="/signup">
            Sign up
          </Link>
        </Text>
      </Card>
    </Formik>
  );
};

export default LoginFormRenderer;
