import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  HStack,
  List,
  Heading,
} from "@chakra-ui/react";

const SidebarGroup = ({children, name, modifiers}) => {
  return (
    <AccordionItem>
      <HStack w="full" px={3} spacing={0}>
        <AccordionIcon />
        <AccordionButton px={0} flex={1}>
          <Heading textAlign="left" w="full" size="sm">
            {name}
          </Heading>
        </AccordionButton>
        {modifiers}
      </HStack>
      <AccordionPanel px={0} py={0} w="full" maxH="sm" overflow="auto">
        <List w="full">{children}</List>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default SidebarGroup;
