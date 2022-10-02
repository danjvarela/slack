import FormControl from "./FormControl";
import {Textarea as ChakraTextarea} from "@chakra-ui/react";

const Textarea = (props) => {
  return (
    <FormControl
      {...props}
      inputElement={(field, inputProps) => <ChakraTextarea {...field} {...inputProps} />}
    />
  );
};

export default Textarea;
