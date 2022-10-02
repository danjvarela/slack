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
import {Formik, Form} from "formik";
import {FaPlus} from "react-icons/fa";
import Input from "components/Input";
import {useUsers} from "context/UserContextProvider";
import {useChannels} from "context/ChannelContextProvider";
import {isEmpty, pipe} from "utils";
import * as Yup from "yup";
import Select from "components/Select";

const CreateChannelForm = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const {userOptions} = useUsers();
  const {createChannel, errors} = useChannels();

  const filterOptions = (inputValue) =>
    userOptions.filter((user) =>
      user.label.toLowerCase().includes(inputValue.toLowerCase())
    );

  const promiseOptions = (inputValue) =>
    new Promise((resolve) => {
      pipe(filterOptions, resolve)(inputValue);
    });

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
        onSubmit={(values, {resetForm}) => {
          const body = {...values, user_ids: values["user_ids"].map((i) => i.value)};
          createChannel(body);
          resetForm();
          onClose();
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
                  ? errors?.map((error, index) => (
                      <Alert status="error" key={index}>
                        <AlertIcon />
                        {error}
                      </Alert>
                    ))
                  : null}
                <VStack w="full" gap={2}>
                  <Input name="name" label="Channel name" />
                  <Select
                    name="user_ids"
                    isMulti
                    loadOptions={promiseOptions}
                    label="Members"
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
