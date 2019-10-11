import axios from "axios";

const api = axios.create({
  baseURL: "http://172.30.8.221:3333/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});

export default api;
