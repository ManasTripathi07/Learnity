import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;



const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.withCredentials = true;

export default axiosInstance;



// import axios from "axios";

// const BASE_URL = process.env.REACT_APP_BASE_URL;

// const axiosInstance = axios.create({
//   baseURL: BASE_URL,
//   withCredentials: true, 
// });

// export default axiosInstance;


//changes 