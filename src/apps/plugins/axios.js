import axios from "axios";
import { getCookies } from "../helpers/cookie";

const AxiosInstance = axios.create({
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${getCookies("r-token")}`,
    "Content-Type": "application/json",
  },
});

export default AxiosInstance;
