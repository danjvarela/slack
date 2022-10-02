import {useReceivers} from "context/ReceiverContextProvider";
import Select from "./Select";
import {pipe} from "utils";

const ReceiversSelect = (props) => {
  const {receiverOptions} = useReceivers();

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
