import {FormControl, FormLabel, FormErrorMessage} from "@chakra-ui/react";
import {AsyncSelect, createFilter} from "chakra-react-select";
import {Field, useField} from "formik";

const CustomSelect = ({label, ...props}) => {
  const [field, meta, {setValue}] = useField(props.field.name);

  const handleChange = (input) => {
    console.log(input);
    setValue(input.value);
  };

  return (
    <FormControl isInvalid={meta.touched && meta.error}>
      {label ? <FormLabel>{label}</FormLabel> : null}
      <Field
        as={AsyncSelect}
        onChange={handleChange}
        {...props}
        value={meta.value}
        filterOption={createFilter({ignoreAccents: "false"})}
      />
      {meta.touched && meta.error ? (
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      ) : null}
    </FormControl>
  );
};

export default CustomSelect;
