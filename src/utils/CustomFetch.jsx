import axios from "axios";
import { config } from "./Constants";

const CustomFetch = axios.create({ baseURL: `${config.BASE_BACKEND_URL}`}); // axiosInstance
 
export default CustomFetch;
