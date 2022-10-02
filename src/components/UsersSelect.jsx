import {useUsers} from "context/UserContextProvider";
import Select from "./Select";
import {pipe} from "utils";

const UsersSelect = (props) => {
  const {userOptions} = useUsers();

  const filterOptions = (inputValue) =>
    userOptions.filter((user) =>
      user.label.toLowerCase().includes(inputValue.toLowerCase())
    );

  const promiseOptions = (inputValue) =>
    new Promise((resolve) => {
      pipe(filterOptions, resolve)(inputValue);
    });

  return <Select loadOptions={promiseOptions} cacheOptions defaultOptions {...props} />;
};

export default UsersSelect;
