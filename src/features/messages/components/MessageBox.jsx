import {FormControl, Textarea, IconButton, HStack} from "@chakra-ui/react";
import {Formik, Form, Field} from "formik";
import * as Yup from "yup";
import {MdSend} from "react-icons/md";
import {postRequest} from "lib/axios";
import {useAuth} from "context/AuthContextProvider";

const sendMessage = async (values, opts = {}) => {
  const response = await postRequest("/api/v1/messages", values, opts);
  return response.data;
};

const MessageBox = () => {
  const {auth} = useAuth();

  return (
    <Formik
      initialValues={{body: ""}}
      validationSchema={Yup.object({
        body: Yup.string().required(),
      })}
      onSubmit={(values, {resetForm}) => {
        const completeBody = {...values, receiver_id: "3", receiver_class: "User"};
        sendMessage(completeBody, {headers: auth.headers});
        resetForm({body: ""});
      }}
    >
      <HStack as={Form} w="full">
        <FormControl>
          <Field
            as={Textarea}
            variant="filled"
            placeholder="Message user 1"
            name="body"
          />
        </FormControl>
        <IconButton icon={<MdSend />} colorScheme="green" type="submit" />
      </HStack>
    </Formik>
  );
};

export default MessageBox;
