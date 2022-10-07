import Select from "./Select";
import {pipe} from "utils";
import selectOptionStore from "stores/selectOptionStore";

const ReceiversSelect = (props) => {
  const receiverOptions = selectOptionStore.use.receivers();

  const filterOptions = (inputValue) =>
    receiverOptions.filter((receiver) =>
      receiver.label.toLowerCase().includes(inputValue.toLowerCase())
    );

  const promiseOptions = (inputValue) =>
    new Promise((resolve) => {
      pipe(filterOptions, resolve)(inputValue);
    });

  return <Select loadOptions={promiseOptions} cacheOptions defaultOptions {...props} />;
};

export default ReceiversSelect;
