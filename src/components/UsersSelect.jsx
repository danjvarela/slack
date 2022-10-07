import Select from "./Select";
import {pipe} from "utils";
import selectOptionStore from "stores/selectOptionStore";

const UsersSelect = (props) => {
  const userOptions = selectOptionStore.use.users();

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
