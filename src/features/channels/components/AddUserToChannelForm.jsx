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
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import {Formik, Form} from "formik";
import {isEmpty} from "utils";
import UsersSelect from "components/UsersSelect";
import * as Yup from "yup";
import {ChevronDownIcon} from "@chakra-ui/icons";
import useChannels from "hooks/useChannels";
import receiverStore from "stores/receiverStore";
import channelStore from "stores/channelStore";

const AddUserToChannelForm = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  const receiver = receiverStore.use.currentReceiver();
  const errMessages = channelStore.use.errMessages();
  const {addMemberToChannel} = useChannels();

  return (
    <>
      <IconButton
        icon={<ChevronDownIcon />}
        variant="ghost"
        isRound
        size="sm"
        onClick={onOpen}
      />

      <Formik
        initialValues={{
          member: {},
        }}
        validationSchema={Yup.object({
          member: Yup.object().test({
            message: "Add at least 1 user",
            test: (obj) => !isEmpty(obj),
          }),
        })}
        onSubmit={(values) => {
          const {id} = receiver;
          const {
            member: {value: member_id},
          } = values;
          addMemberToChannel({id, member_id});
        }}
      >
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <Form>
              <ModalHeader>Add user to channel</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                {!isEmpty(errMessages)
                  ? errMessages?.map((message, index) => (
                      <Alert status="error" key={index}>
                        <AlertIcon />
                        {message}
                      </Alert>
                    ))
                  : null}
                <VStack w="full" gap={2}>
                  <UsersSelect name="member" label="User" placeholder="Select a user" />
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

export default AddUserToChannelForm;
