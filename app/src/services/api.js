import axios from "axios";
import { AsyncStorage } from "react-native";

export const getToken = async () => await AsyncStorage.getItem("@Meetup:token");

const api = axios.create({
  baseURL: "http://172.30.8.221:3333/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});

api.interceptors.request.use(async function(config) {
  let payload = await getToken();

  if (payload) {
    const { token } = JSON.parse(payload);

    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
