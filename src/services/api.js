import axios from "axios";
import {BASE_URL} from "../utils/requests"
const api = axios.create({
  // baseURL: "http://localhost:8080",
  baseURL: BASE_URL,
});

export default api;