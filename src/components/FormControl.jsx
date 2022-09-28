import {
  FormControl as ChakraFormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/react";
import {useField} from "formik";

const FormControl = ({inputElement, ...props}) => {
  const [field, meta] = useField(props);
  const {label, ...rest} = props;

  return (
    <ChakraFormControl isInvalid={meta.touched && meta.error}>
      {label ? <FormLabel>{label}</FormLabel> : null}
      {inputElement(field, rest)}
      {meta.touched && meta.error ? (
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      ) : null}
    </ChakraFormControl>
  );
};

export default FormControl;
