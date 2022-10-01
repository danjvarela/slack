import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  IconButton,
  Button,
  Alert,
  AlertIcon,
  VStack,
} from "@chakra-ui/react";
import {Formik, Form, Field} from "formik";
import {FaPlus} from "react-icons/fa";
import Input from "components/Input";
import {useUsers} from "context/UserContextProvider";
import CustomMultiSelect from "components/CustomMultiSelect";
import {useChannels} from "context/ChannelContextProvider";
import {useEffect} from "react";
import {isEmpty} from "utils";
import * as Yup from "yup";

const CreateChannelForm = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const {users} = useUsers();
  const {channels, createChannel, errors} = useChannels();

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
      <IconButton icon={<FaPlus />} variant="ghost" isRound size="sm" onClick={onOpen} />

      <Formik
        initialValues={{name: "", user_ids: []}}
        validationSchema={Yup.object({
          name: Yup.string().required("Please input a channel name"),
          user_ids: Yup.array().test({
            message: "Please add at least 1 member",
            test: (arr) => arr.length > 0,
          }),
        })}
        onSubmit={(values) => {
          const body = {...values, user_ids: values["user_ids"].map((i) => i.value)};
          createChannel(body);
        }}
      >
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <Form>
              <ModalHeader>Create new channel</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                {!isEmpty(errors)
                  ? errors.map((error, index) => (
                      <Alert status="error" key={index}>
                        <AlertIcon />
                        {error}
                      </Alert>
                    ))
                  : null}
                <VStack w="full" gap={2}>
                  <Input name="name" label="Channel name" />
                  <Field
                    label="Members"
                    component={CustomMultiSelect}
                    name="user_ids"
                    placeholder="Start typing"
                    loadOptions={promiseOptions}
                    cacheOptions
                    defaultOptions
                  />
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

export default CreateChannelForm;
