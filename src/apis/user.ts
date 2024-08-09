import axios from "axios";
import { axiosInstance } from ".";
import { CommonError } from "../@types/api";

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
