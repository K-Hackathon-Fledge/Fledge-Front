import axios from "axios";
import { axiosInstance } from ".";
import { CommonError } from "../@types/api";

export type CanaryApplyForm = {
    userId: number;
    name: string;
    phone: string;
    birth: string;
    gender: boolean;
    address: string;
    detailAddress: string;
    zip: string;
    certificateFilePath: string;
    latitude: number;
    longitude: number;
};

export const getCanaryProfile = async (userId: number, accessToken: string) => {
    try {
        const res = await axiosInstance.get(
            `https://fledge.site/api/v1/canary/${userId}`,
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

export const postCanaryApply = async (
    applyForm: CanaryApplyForm,
    accessToken: string
) => {
    try {
        const res = await axiosInstance.post(
            "https://fledge.site/api/v1/canary/apply",
            applyForm,
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

export const getCanaryStatus = async (userId: number, accessToken: string) => {
    try {
        const res = await axiosInstance.get(
            `https://fledge.site/api/v1/canary/${userId}/status`,
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

export const putCanaryProfile = async (
    userId: number,
    editedProfile: CanaryApplyForm,
    accessToken: string
) => {
    try {
        const res = await axiosInstance.put(
            `https://fledge.site/api/v1/canary/${userId}`,
            editedProfile,
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
