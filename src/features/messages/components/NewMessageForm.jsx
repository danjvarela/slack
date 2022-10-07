import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  VStack,
} from "@chakra-ui/react";
import {Formik, Form} from "formik";
import {FaEdit} from "react-icons/fa";
import {isEmpty} from "utils";
import ReceiversSelect from "components/ReceiversSelect";
import Textarea from "components/Textarea";
import * as Yup from "yup";
import useMessages from "hooks/useMessages";
import receiverStore from "stores/receiverStore";
import channelStore from "stores/channelStore";
import userStore from "stores/userStore";
import messageStore from "stores/messageStore";

const NewMessageForm = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const {sendMessage} = useMessages();
  const channels = channelStore.use.channels();
  const users = userStore.use.users();

  return (
    <>
      <Button w="full" borderRadius={0} gap={1} onClick={onOpen}>
        New Message <FaEdit />
      </Button>

      <Formik
        initialValues={{
          receiver: {label: "", value: "", class: ""},
          body: "",
        }}
        validationSchema={Yup.object({
          receiver: Yup.object().test({
            message: "Please add a recipient",
            test: (obj) => !isEmpty(obj.value),
          }),
          body: Yup.string().required("Message cannot be blank"),
        })}
        onSubmit={async (values, {resetForm}) => {
          const {body, receiver} = values;
          const data = {
            receiver_id: receiver.value,
            receiver_class: receiver.class,
            body,
          };
          sendMessage(data);
          if (data.receiver_class === "Channel") {
            const channel = channels.find((val) => val.id === data.receiver_id);
            receiverStore.set.currentReceiver({...channel, class: "Channel"});
          }
          if (data.receiver_class === "User") {
            const user = users.find((val) => val.id === data.receiver_id);
            receiverStore.set.currentReceiver({...user, class: "User"});
            messageStore.set.directMessages([...messageStore.get.directMessages, user]);
          }
          onClose();
          resetForm();
        }}
      >
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <Form>
              <ModalHeader>New Message</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <VStack w="full" gap={2}>
                  <ReceiversSelect
                    name="receiver"
                    label="Recipient"
                    placeholder="Select a user or channel"
                  />
                  <Textarea name="body" label="Message" />
                </VStack>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} type="submit">
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </Form>
          </ModalContent>
        </Modal>
      </Formik>
    </>
  );
};

export default NewMessageForm;
