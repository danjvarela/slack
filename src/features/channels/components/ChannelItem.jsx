import {ListItem, Button, Text} from "@chakra-ui/react";

const ChannelItem = ({name}) => {
  return (
    <ListItem w="full">
      <Button
        size="sm"
        w="full"
        maxW="full"
        justifyContent="flex-start"
        variant="outline"
        borderWidth={0}
        borderRadius={0}
        px={7}
      >
        <Text w="full" flexWrap="wrap" noOfLines={1} textAlign="left">
          {name}
        </Text>
      </Button>
    </ListItem>
  );
};

export default ChannelItem;
