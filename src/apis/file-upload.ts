import axios from "axios";
import { CommonError } from "../@types/api";

export const getPresignedUrl = async (
  prefix: string,
  fileName: string,
  accesstoken: string
) => {
  try {
    const res = await axios.get(
      `/api/v1/files/presigned-url?prefix=${prefix}&fileName=${fileName}`,
      {
        headers: {
          Authorization: `Bearer ${accesstoken}`,
          // 다른 헤더를 추가할 수 있습니다.
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError<CommonError>(error) && error.response) {
      const errorCode = error.response.data.errorCode;
      const message = error.response.data.message;
      console.log(`${errorCode}: ${message}`);
    }
  }
};

export const uploadImageToS3 = async (file: File, presignedUrl: string) => {
  try {
    await axios.put(presignedUrl, file, {
      headers: {
        "Content-Type": file.type,
      },
    });
  } catch (error) {
    console.error("Image upload failed:", error);
  }
};
