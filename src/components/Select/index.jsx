import {FormControl, FormErrorMessage, FormLabel} from "@chakra-ui/react";
import {AsyncSelect, createFilter} from "chakra-react-select";
import {useField} from "formik";
import {isEmpty} from "utils";
import MenuList from "./MenuList";

const Select = ({label, ...props}) => {
  const [_, meta, {setValue}] = useField(props);

  const handleChange = (value) => {
    if (props.isMulti) {
      setValue(isEmpty(value) ? [] : value);
      return;
    }
    setValue(isEmpty(value) ? {} : value);
  };

  return (
    <FormControl isInvalid={meta.touched && meta.error}>
      {label ? <FormLabel>{label}</FormLabel> : null}
      <AsyncSelect
        {...props}
        onChange={handleChange}
        filterOption={createFilter({ignoreAccents: false})}
        components={{MenuList}}
        backspaceRemovesValue
        isClearable
      />
      {meta.touched && meta.error ? (
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      ) : null}
    </FormControl>
  );
};

export default Select;
