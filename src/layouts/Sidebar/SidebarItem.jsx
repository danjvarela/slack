import {Button, ListItem} from "@chakra-ui/react";

const SidebarItem = ({children}) => {
  return (
    <ListItem w="full">
      <Button
        w="full"
        borderRadius={0}
        borderWidth={0}
        justifyContent="flex-start"
        size="sm"
        gap={2}
        variant="outline"
      >
        {children}
      </Button>
    </ListItem>
  );
};

export default SidebarItem;
