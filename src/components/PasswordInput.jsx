import FormControl from "./FormControl";
import {InputGroup, InputRightElement, Input, IconButton} from "@chakra-ui/react";
import {useState} from "react";
import {FaEye, FaEyeSlash} from "react-icons/fa";

const PasswordInput = (props) => {
  const [type, setType] = useState("password");

  const toggleType = () =>
    setType((prevType) => (prevType === "password" ? "text" : "password"));

  return (
    <FormControl
      {...props}
      inputElement={(field, inputProps) => (
        <InputGroup>
          <Input {...field} {...inputProps} type={type} />
          <InputRightElement>
            <IconButton
              icon={type === "password" ? <FaEye /> : <FaEyeSlash />}
              onClick={toggleType}
              size="sm"
              variant="ghost"
              isRound
            />
          </InputRightElement>
        </InputGroup>
      )}
    />
  );
};

export default PasswordInput;
