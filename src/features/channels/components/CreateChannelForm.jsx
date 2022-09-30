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
} from "@chakra-ui/react";
import {Formik, Form} from "formik";
import {FaPlus} from "react-icons/fa";
import Input from "components/Input";
import {AsyncSelect} from "chakra-react-select";
import {useChannels} from "context/ChannelContextProvider";

const CreateChannelForm = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
      <IconButton icon={<FaPlus />} variant="ghost" isRound size="sm" onClick={onOpen} />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new channel</ModalHeader>
          <ModalCloseButton />
          <Formik initialValues={{name: "", user_ids: []}}>
            <ModalBody pb={6} as={Form}>
              <Input name="name" label="Channel name" />
            </ModalBody>
          </Formik>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateChannelForm;
