// axios instance 를 생성해주었습니다.
import axios from "axios";
import cookie from "js-cookie";
const request = axios.create({
  baseURL: "http://3.36.186.20:3000",
});
const accessToken = cookie.get("accessToken");
if (accessToken !== undefined) {
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
    if (error.response.status === 401) {
      window.location.replace("/login");
    }
    return Promise.reject(error);
  }
);
export default request;
