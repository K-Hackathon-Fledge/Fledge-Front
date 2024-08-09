import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import tw from "twin.macro";
import Input from "../Common/Input";
import useAuthStore from "../../storage/useAuthStore";
import { getCanaryProfile } from "../../apis/canary";
import BirthDate from "./PersonalInfo/BirthDate";
import GenderSelection from "./PersonalInfo/GenderSelection";
import Introduction from "./PersonalInfo/Introduction";
import PostalCode from "./PostalCode";
import InterestArea from "./PersonalInfo/InterestArea";
const PersonalInfo = () => {
    const { userData, accessToken } = useAuthStore.getState();
    const [birthData, setBirthData] = useState({
        year: "2000",
        month: "1",
        day: "1",
    });
    const [area, setArea] = useState({
        sido: "",
        sigungu: "",
        dong: "",
    });

    const { data, isLoading, isError } = useQuery({
        queryKey: ["getCanaryProfile", userData.id, accessToken],
        queryFn: () => getCanaryProfile(userData.id!, accessToken!),
    });

    const [viewData, setViewData] = useState({
        id: 0,
        phone: "",
        birth: "",
        gender: true,
        introduction: "",
        address: "",
        detailAddress: "",
        zip: "",
        latitude: 0,
        longitude: 0,
        interestArea: null as string | null,
    });

    useEffect(() => {
        if (data) {
            setViewData(data.data);
            setBirthData({
                year: data.data.birth.split("-")[0],
                month: data.data.birth.split("-")[1],
                day: data.data.birth.split("-")[2],
            });
        }
    }, [data]);

    const handleInterestArea = (area: string) => {
        if (viewData.interestArea === null) {
            setViewData({
                ...viewData,
                interestArea: area,
            });
        }
    };

    const handleDeleteInterestArea = () => {
        setViewData({
            ...viewData,
            interestArea: "",
        });
    };

    const handleArea = (key: string, value: string) => {
        setArea({
            ...area,
            [key]: value,
        });
    };

    const handleSave = () => {
        if (
            area.sido.length > 0 &&
            area.sigungu.length > 0 &&
            area.dong.length > 0 &&
            area.sido !== "시/도" &&
            area.sigungu !== "시/군/구" &&
            area.dong !== "행정구/시"
        ) {
            handleInterestArea(`${area.sido} ${area.sigungu} ${area.dong}`);
        } else {
            alert("지역을 선택해주세요.");
        }
    };

    const handleBirthData = (key: string, value: string) => {
        setBirthData({
            ...birthData,
            [key]: value,
        });
    };

    const handleViewData = (key: string, value: any) => {
        setViewData({
            ...viewData,
            [key]: value,
        });
    };

    return (
        <>
            {/* 회원 개인 정보 헤더 */}
            <Header>
                <span className="title-text">회원 개인 정보</span>
            </Header>
            <Container>
                <div className="first">
                    <Input hint="휴대폰 번호" value={viewData.phone} />
                    <BirthDate
                        year={birthData.year}
                        month={birthData.month}
                        day={birthData.day}
                        onChange={handleBirthData}
                    />
                    <GenderSelection
                        gender={viewData.gender}
                        onChange={(gender) => handleViewData("gender", gender)}
                    />
                </div>
                <Introduction
                    introduction={viewData.introduction}
                    onChange={(introduction) =>
                        handleViewData("introduction", introduction)
                    }
                />
                <PostalCode />
                <InterestArea
                    area={area}
                    interestArea={viewData.interestArea}
                    onAreaChange={handleArea}
                    onSave={handleSave}
                    onDeleteInterestArea={handleDeleteInterestArea}
                />
            </Container>
        </>
    );
};

export default PersonalInfo;

const Container = styled.div`
    ${tw`
        w-[1280px] flex flex-col items-start gap-[36px] mt-[49px]
    `}
    .first {
        ${tw`
            flex gap-[23px] items-baseline
        `}
    }
`;

const Header = styled.div`
    ${tw`
            w-[1280px] flex flex-col items-start gap-[3px] text-bold-36 font-bold text-fontColor1
        `}
`;
