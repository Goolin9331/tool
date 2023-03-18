import { autumnfishUrl } from "@/config/baseUrl";
import { message } from "ant-design-vue";
import axios from "axios";
const service = axios.create({
  baseURL: autumnfishUrl,
  timeout: 5000,
});
service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    message.error("请求发生错误");
    console.log("err ", error);
    return Promise.reject(error);
  }
);
export default service;
