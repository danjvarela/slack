import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import {FaPlus} from "react-icons/fa";
import {Formik, Form} from "formik";
import * as Yup from "yup";
import Input from "components/Input";

const AddChannelForm = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
      <IconButton icon={<FaPlus />} isRound variant="ghost" size="sm" onClick={onOpen} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Formik initialValues={{name: ""}}>
              <VStack as={Form} w="full">
                <Input name="name" label="Channel name" />
                <Input name="members" label="Members" />
              </VStack>
            </Formik>
          </ModalBody>

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

export default AddChannelForm;
