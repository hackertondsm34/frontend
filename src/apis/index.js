// axios instance 를 생성해주었습니다.
import { getAccessToken } from "@/util/getAccessToken";
import axios from "axios";
export const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
const accessToken = getAccessToken();
if (accessToken !== undefined && typeof window !== undefined) {
  request.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
}
request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // if (error.response.status === 401) {
    //   window.location.replace("/login");
    // }
    return Promise.reject(error);
  }
);
