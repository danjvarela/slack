const isEmpty = (value) => {
  if (typeof value === "number" || typeof value === "boolean") return false;
  if (value === undefined || value === null) return true;
  if (typeof value === "string") return /^\s+$/.test(value) || value.length === 0;
  if (value.length !== undefined) return value.length === 0;
  if (Object.keys(value)) return Object.keys(value).length === 0;
  return false;
};

const isNotEmpty = (value) => {
  return !isEmpty(value);
};

const pipe =
  (...fns) =>
  (arg) =>
    fns.reduce((acc, fn) => fn(acc), arg);

const curry = (fn) => {
  return function curried(...args) {
    return args.length < fn.length ? curried.bind(null, ...args) : fn(...args);
  };
};

export {isEmpty, pipe, curry, isNotEmpty};
