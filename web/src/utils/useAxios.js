import axios from "axios";

const BASE_URL = "http://localhost:8000/v2/";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
