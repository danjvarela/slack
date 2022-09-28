import FormControl from "./FormControl";
import {Input as ChakraInput} from "@chakra-ui/react";

const Input = (props) => {
  return (
    <FormControl
      {...props}
      inputElement={(field, inputProps) => <ChakraInput {...field} {...inputProps} />}
    />
  );
};

export default Input;
