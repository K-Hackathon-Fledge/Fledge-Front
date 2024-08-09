import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import useAuthStore from "../storage/useAuthStore";
import { CommonResponse } from "../@types/api";

export const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true; //재시도 플래그 설정
//       // 로그아웃 함수 호출
//       useAuthStore.getState().logout();

//       // 메인 페이지로 리다이렉트
//       window.location.href = "/";

//       return Promise.reject(error);
//     }
//     return Promise.reject(error);
//   }
// );
