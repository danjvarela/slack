import {Avatar, Text} from "@chakra-ui/react";
import {faker} from "@faker-js/faker";

const ChannelItem = ({name}) => {
  return (
    <>
      <Avatar size="xs" name={name} src={faker.internet.avatar()} />
      <Text>{name}</Text>
    </>
  );
};

export default ChannelItem;
