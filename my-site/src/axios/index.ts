import axios from "axios";

console.log(import.meta.env);
export const instance = axios.create({
  baseURL: import.meta.env.REACT_APP_API_URL,
});
