import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    SiteId: 1,
    Lang: "en",
    Accept: "*/*",
    "Content-Type": "application/json",
  },
});
