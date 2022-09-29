import {Box, Text} from "@chakra-ui/react";
import AppLayout from "layouts/App";
import {useParams} from "react-router-dom";

const User = () => {
  const {id} = useParams();

  return (
    <AppLayout>
      <Box>
        <Text>This is the page of user {id}</Text>
      </Box>
    </AppLayout>
  );
};

export default User;
