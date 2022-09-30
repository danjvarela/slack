import {VStack, Button} from "@chakra-ui/react";
import Header from "layouts/Header";
import {FaEdit} from "react-icons/fa";

const Sidebar = ({children}) => {
  return (
    <VStack w={56} h="full" borderRightWidth={1} display={{base: "none", md: "unset"}}>
      {children}
      <Header size="sm" variant="outlined" px={0}>
        <Button w="full" borderRadius={0} gap={1}>
          New Message <FaEdit />
        </Button>
      </Header>
    </VStack>
  );
};

export default Sidebar;
