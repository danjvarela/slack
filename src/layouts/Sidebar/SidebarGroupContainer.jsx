import {Accordion} from "@chakra-ui/react";

const SidebarGroupContainer = ({children}) => {
  return (
    <Accordion defaultIndex={[0, 1]} allowMultiple>
      {children}
    </Accordion>
  );
};

export default SidebarGroupContainer;
