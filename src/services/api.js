import axios from "axios";

const api = axios.create({
  baseURL: "https://www.tempreact.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
