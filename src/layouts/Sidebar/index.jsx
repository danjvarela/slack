import {VStack} from "@chakra-ui/react";
import SidebarGroupContainer from "./SidebarGroupContainer";
import SidebarHeader from "./SidebarHeader";

const Sidebar = ({children}) => {
  return (
    <VStack w={56} h="full" borderRightWidth={1} display={{base: "none", md: "unset"}}>
      <SidebarHeader />
      <SidebarGroupContainer>{children}</SidebarGroupContainer>
    </VStack>
  );
};

export default Sidebar;
