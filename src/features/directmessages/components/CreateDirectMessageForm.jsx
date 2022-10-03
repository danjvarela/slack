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
  IconButton,
} from "@chakra-ui/react";
import {Formik, Form} from "formik";
import {FaPlus} from "react-icons/fa";
import {isEmpty} from "utils";
import UsersSelect from "components/UsersSelect";
import Textarea from "components/Textarea";
import * as Yup from "yup";
import {useMessages} from "context/MessageContextProvider";
import {useReceivers} from "context/ReceiverContextProvider";
import {useUsers} from "context/UserContextProvider";

const CreateDirectMessageForm = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const {sendMessage, setDirectMessages} = useMessages();
  const {setCurrentReceiver} = useReceivers();
  const {users} = useUsers();

  return (
    <>
      <IconButton icon={<FaPlus />} variant="ghost" isRound size="sm" onClick={onOpen} />

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
          const user = users.find((val) => val.id === data.receiver_id);
          setCurrentReceiver({...user, class: "User"});
          setDirectMessages((prev) => [...prev, user]);
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
                  <UsersSelect
                    name="receiver"
                    label="Recipient"
                    placeholder="Select a user"
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

export default CreateDirectMessageForm;
