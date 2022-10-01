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
  Alert,
  AlertIcon,
  VStack,
} from "@chakra-ui/react";
import {Formik, Form, Field} from "formik";
import {FaEdit} from "react-icons/fa";
import Input from "components/Input";
import {useUsers} from "context/UserContextProvider";
import CustomSelect from "components/CustomSelect";
import {isEmpty} from "utils";
import * as Yup from "yup";

const NewMessageForm = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const {users} = useUsers();
  const errors = [];

  const filterUsers = (inputValue) =>
    users
      .map((user) => ({value: user.id, label: user.email}))
      .filter((data) => data.label.toLowerCase().includes(inputValue.toLowerCase()));

  const promiseOptions = (inputValue) => {
    return new Promise((resolve) => {
      resolve(filterUsers(inputValue));
    });
  };

  return (
    <>
      <Button w="full" borderRadius={0} gap={1} onClick={onOpen}>
        New Message <FaEdit />
      </Button>

      <Formik
        initialValues={{
          receiver_id: "",
        }}
      >
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <Form>
              <ModalHeader>New Message</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                {!isEmpty(errors)
                  ? errors?.map((error, index) => (
                      <Alert status="error" key={index}>
                        <AlertIcon />
                        {error}
                      </Alert>
                    ))
                  : null}
                <VStack w="full" gap={2}>
                  <Field
                    label="Recipient"
                    component={CustomSelect}
                    name="receiver_id"
                    placeholder="Start typing"
                    loadOptions={promiseOptions}
                    cacheOptions
                    defaultOptions
                  />
                  <Input name="name" label="Channel name" />
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
