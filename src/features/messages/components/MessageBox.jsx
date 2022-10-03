import {IconButton, HStack} from "@chakra-ui/react";
import {Formik, Form} from "formik";
import * as Yup from "yup";
import {MdSend} from "react-icons/md";
import {useMessages} from "context/MessageContextProvider";
import Textarea from "components/Textarea";
import {useReceivers} from "context/ReceiverContextProvider";
import {useUsers} from "context/UserContextProvider";
import {isEmpty} from "utils";

const MessageBox = () => {
  const {users} = useUsers();
  const {sendMessage, setDirectMessages, directMessages} = useMessages();
  const {currentReceiver: receiver} = useReceivers();

  return !isEmpty(receiver) ? (
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
        if (receiver.class === "User") {
          const receiverExists = directMessages
            .map((user) => user.id)
            .includes(receiver.id);
          if (!receiverExists) {
            setDirectMessages((prev) => [
              ...prev,
              users.find((val) => val.id === receiver.id),
            ]);
          }
        }
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
  ) : null;
};

export default MessageBox;
