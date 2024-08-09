import axios, { AxiosResponse } from "axios";
import { SponsorData, SponsorDetailData } from "../@types/sponsor";
import { CommonError } from "../@types/api";
import { axiosInstance } from ".";

export const postAddressItem = async (
  accesstoken: string,
  data: SponsorData
) => {
  try {
    const res = await axiosInstance.post(
      "/api/v1/supports",
      {
        title: data.title,
        reason: data.reason,
        promise: data.promise,
        item: data.item,
        purchaseUrl: data.purchaseUrl,
        price: data.price,
        images: data.images,
        expirationDate: data.expirationDate,
        supportCategory: data.supportCategory,
        recipientName: data.recipientName,
        phone: data.phone,
        address: data.address,
        detailAddress: data.detailAddress,
        zip: data.zip,
      },
      {
        headers: {
          Authorization: `Bearer ${accesstoken}`,
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

export const postAccountItem = async (
  accesstoken: string,
  data: SponsorData
) => {
  try {
    const res = await axiosInstance.post(
      "/api/v1/supports",
      {
        title: data.title,
        reason: data.reason,
        promise: data.promise,
        item: data.item,
        purchaseUrl: data.purchaseUrl,
        price: data.price,
        images: data.images,
        expirationDate: data.expirationDate,
        supportCategory: data.supportCategory,
        bank: data.bank,
        account: data.account,
      },
      {
        headers: {
          Authorization: `Bearer ${accesstoken}`,
          // 다른 헤더를 추가할 수 있습니다.
          "Content-Type": "application/json",
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

export const getAddress = async (accesstoken: string) => {
  try {
    const res = await axiosInstance.get("/api/v1/canary/delivery", {
      headers: {
        Authorization: `Bearer ${accesstoken}`,
        // 다른 헤더를 추가할 수 있습니다.
        "Content-Type": "application/json",
      },
    });
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

export const getPagingPost = async (
  page: number,
  keyword: string,
  categories: string[],
  status: string
) => {
  const queryCategoryString = categories
    .map((category) => `category=${encodeURIComponent(category)}`)
    .join("&");

  let url = `/api/v1/public/supports/paging?page=${page}&${queryCategoryString}&status=${status}`;
  if (keyword) {
    url += `&q=${encodeURIComponent(keyword)}`;
  }
  try {
    const res = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data.data;
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

export const getDeadlinePost = async (page: number) => {
  try {
    const res = await axios.get(
      `/api/v1/public/supports/deadline?paging=${page}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return res.data.data;
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError<CommonError>(error) && error.response) {
      const errorCode = error.response.data.errorCode;
      const message = error.response.data.message;
      console.log(`${errorCode}: ${message}`);
    }
  }
};

export const getSupportsInfo = async (supportId: string) => {
  try {
    const res = await axiosInstance.get(`/api/v1/public/supports/${supportId}`);
    return res.data.data;
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError<CommonError>(error) && error.response) {
      const errorCode = error.response.data.errorCode;
      const message = error.response.data.message;
      console.log(`${errorCode}: ${message}`);
    }
  }
};

export const getProgressInfo = async (supportId: string) => {
  try {
    const res = await axiosInstance.get(
      `/api/v1/public/supports/${supportId}/progress`
    );
    return res.data.data;
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError<CommonError>(error) && error.response) {
      const errorCode = error.response.data.errorCode;
      const message = error.response.data.message;
      console.log(`${errorCode}: ${message}`);
    }
  }
};

export const getCanaryInfo = async (memberId: number) => {
  try {
    const res = await axiosInstance.get(`/api/v1/canary/${memberId}/supports`);
    return res.data.data;
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError<CommonError>(error) && error.response) {
      const errorCode = error.response.data.errorCode;
      const message = error.response.data.message;
      console.log(`${errorCode}: ${message}`);
    }
  }
};
