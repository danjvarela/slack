import {FormControl, FormLabel, FormErrorMessage} from "@chakra-ui/react";
import {AsyncSelect, createFilter} from "chakra-react-select";
import {Field, useField} from "formik";

const CustomMultiSelect = ({label, ...props}) => {
  const [_, meta, {setValue}] = useField(props.field.name);

  const handleChange = (value) => {
    setValue(value);
  };

  return (
    <FormControl isInvalid={meta.touched && meta.error}>
      {label ? <FormLabel>{label}</FormLabel> : null}
      <Field
        as={AsyncSelect}
        {...props}
        onChange={handleChange}
        value={meta.value}
        isMulti
        filterOption={createFilter({ignoreAccents: "false"})}
      />
      {meta.touched && meta.error ? (
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      ) : null}
    </FormControl>
  );
};

export default CustomMultiSelect;
