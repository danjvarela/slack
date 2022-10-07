import {IconButton, HStack} from "@chakra-ui/react";
import {Formik, Form} from "formik";
import * as Yup from "yup";
import {MdSend} from "react-icons/md";
import Textarea from "components/Textarea";
import {isEmpty} from "utils";
import messageStore from "stores/messageStore";
import useMessages from "hooks/useMessages";
import receiverStore from "stores/receiverStore";
import userStore from "stores/userStore";

const MessageBox = () => {
  const {sendMessage} = useMessages();
  const users = userStore.use.users();
  const directMessages = messageStore.use.directMessages();
  const receiver = receiverStore.use.currentReceiver();

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
            messageStore.set.directMessages([
              ...messageStore.get.directMessages,
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
