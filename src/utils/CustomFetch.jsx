import axios from "axios";

const CustomFetch = axios.create({ baseURL: `${process.env.BASE_BACKEND_URL}`}); // axiosInstance
 
export default CustomFetch;
