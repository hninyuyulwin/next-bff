import axios from "axios";
import { BASE_URL } from "./config";

const axiosClient = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY || ""}`,
  },
});
export default axiosClient;
