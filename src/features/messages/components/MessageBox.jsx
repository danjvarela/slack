import {IconButton, HStack} from "@chakra-ui/react";
import {Formik, Form} from "formik";
import * as Yup from "yup";
import {MdSend} from "react-icons/md";
import {useMessages} from "context/MessageContextProvider";
import Textarea from "components/Textarea";
import {useReceivers} from "context/ReceiverContextProvider";

const MessageBox = () => {
  const {sendMessage} = useMessages();
  const {currentReceiver: receiver} = useReceivers();

  return (
    <Formik
      initialValues={{body: ""}}
      validationSchema={Yup.object({
        body: Yup.string(),
      })}
      onSubmit={(values, {resetForm}) => {
        const completeBody = {
          ...values,
          receiver_id: receiver.id,
          receiver_class: receiver.class,
        };
        sendMessage(completeBody);
        resetForm();
      }}
    >
      <HStack as={Form} w="full">
        <Textarea
          name="body"
          variant="filled"
          placeholder={`Message ${
            receiver.class === "Channel" ? receiver.name : receiver.email
          }`}
        />
        <IconButton icon={<MdSend />} colorScheme="green" type="submit" />
      </HStack>
    </Formik>
  );
};

export default MessageBox;
