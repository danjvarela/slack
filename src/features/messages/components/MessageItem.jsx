import {ListItem, Avatar, Text, VStack, HStack} from "@chakra-ui/react";

const MessageItem = ({message}) => {
  const {body, sender, created_at} = message;
  return (
    <ListItem display="flex" gap={3} alignItems="center">
      <Avatar name={sender.email} size="sm" />
      <VStack flex={1} alignItems="flex-start">
        <HStack alignItems="flex-end">
          <Text fontSize="sm" fontWeight="bold">
            {sender.email}
          </Text>
          <Text fontSize="xs" fontWeight="bold" opacity={0.5}>
            {new Date(created_at).toLocaleString()}
          </Text>
        </HStack>
        <Text>{body}</Text>
      </VStack>
    </ListItem>
  );
};

export default MessageItem;
