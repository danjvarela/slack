import {Button} from "@chakra-ui/react";
import Header from "layouts/Header";
import {FaEdit} from "react-icons/fa";

const SidebarHeader = () => {
  return (
    <Header size="sm" variant="outlined" px={0}>
      <Button w="full" borderRadius={0} gap={1}>
        New Message <FaEdit />
      </Button>
    </Header>
  );
};

export default SidebarHeader;
