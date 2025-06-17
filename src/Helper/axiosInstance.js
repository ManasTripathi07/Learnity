import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

console.log("Base URL IS -> ",BASE_URL);

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.withCredentials = true;

export default axiosInstance;
