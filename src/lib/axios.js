import axios from "axios";

axios.defaults.baseURL = "http://206.189.91.54";
axios.defaults.headers.post["Content-Type"] = "application/json";

const postRequest = async (url, data, opts = {}) => await axios.post(url, data, opts);
const getRequest = async (url, opts = {}) => await axios.get(url, opts);

export {postRequest, getRequest};
