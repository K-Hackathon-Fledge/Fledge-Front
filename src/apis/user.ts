import axios from "axios";
import { axiosInstance } from ".";
import { CommonError } from "../@types/api";
import useAuthStore from "../storage/useAuthStore";

export const getUserInfo = async (accessToken: string) => {
  try {
    const res = await axiosInstance.get(
      "https://fledge.site/api/v1/members/me",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return res.data;
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError<CommonError>(error) && error.response) {
      const errorCode = error.response.data.errorCode;
      const message = error.response.data.message;
      console.log(`${errorCode}: ${message}`);
      alert(message);
    }
  }
};

export const putUserNickname = async (
  accessToken: string,
  id: number,
  name: string
) => {
  try {
    const res = await axiosInstance.put(
      `https://fledge.site/api/v1/members/${id}/nickname`,
      { nickname: name },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return res.data;
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError<CommonError>(error) && error.response) {
      const errorCode = error.response.data.errorCode;
      const message = error.response.data.message;
      console.log(`${errorCode}: ${message}`);
      alert(message);
    }
  }
};

export const getTokenRefresh = async (
  accessToken: string,
  refreshToken: string
) => {
  try {
    const res = await axiosInstance.get(
      `https://fledge.site/api/v1/auth/tokenRefresh`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "X-Refresh-Token": refreshToken,
        },
      }
    );
    if (res.status === 200) {
      useAuthStore.setState({
        isLoggedIn: true,
        accessToken: res.data.accessToken,
        refreshToken: res.data.refreshToken,
      });
    }
    return res.data;
  } catch (error) {
    console.log(error);
    useAuthStore.getState().logout();
    window.location.href = "/";
  }
};
export const postLogout = async (accessToken: string) => {
  try {
    const res = await axiosInstance.post(
      "https://fledge.site/api/v1/auth/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return res.data;
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError<CommonError>(error) && error.response) {
      const errorCode = error.response.data.errorCode;
      const message = error.response.data.message;
      console.log(`${errorCode}: ${message}`);
      alert(message);
    }
  }
};
