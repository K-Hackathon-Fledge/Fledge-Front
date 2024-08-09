import styled from "styled-components";
import tw from "twin.macro";
import Button from "../../components/Common/Button";
import Input from "../Common/Input";
import DropDown from "../Common/DropDown";
import { useCallback, useEffect, useRef, useState } from "react";
import PostalCode from "./PostalCode";
import useAuthStore from "../../storage/useAuthStore";
import { getPresignedUrl, uploadImageToS3 } from "../../apis/file-upload";
import { postCanaryApply } from "../../apis/canary";

const CanaryModal = ({ onClick }: { onClick: () => void }) => {
    const { userData } = useAuthStore.getState();
    const [success, setSuccess] = useState(false);
    const [image, setImage] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const accesstoken = useAuthStore((state) => state.accessToken)!;
    const [birthData, setBirthData] = useState({
        year: "2000",
        month: "1",
        day: "1",
    });
    const [applyData, setApplyData] = useState({
        userId: userData.id || 0,
        name: userData.nickname || "",
        phone: "",
        birth: "",
        gender: true,
        address: "",
        detailAddress: "",
        zip: "",
        certificateFilePath: "",
        latitude: 0,
        longitude: 0,
    });
    const handleApplyData = useCallback(
        (data: any, key: string) => {
            setApplyData({ ...applyData, [key]: data });
        },
        [applyData]
    );
    const handleBirthData = useCallback(
        (data: any, key: string) => {
            setBirthData({ ...birthData, [key]: data });
        },
        [birthData]
    );
    const handleAddressChange = useCallback(
        (data: any) => {
            setApplyData({
                ...applyData,
                address: data.address,
                detailAddress: data.detailAddress,
                zip: data.zonecode,
            });
        },
        [applyData]
    );

    const handleImageChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files ? e.target.files[0] : null;
            if (file) {
                setImage(file);
            }
        },
        []
    );

    const convertToISO = (year: number, month: number, day: number): string => {
        const date = new Date(year, month - 1, day);
        return date.toISOString();
    };

    const onSubmit = useCallback(async () => {
        const uploadApplyData = { ...applyData };
        if (image) {
            const presignedData = await getPresignedUrl(
                "canary-certificate",
                image.name,
                accesstoken
            );
            const presignedUrl = presignedData.data.url;
            const filePath = presignedData.data.filePath;
            await uploadImageToS3(image, presignedUrl);
            uploadApplyData.certificateFilePath = filePath;
        }
        if (applyData.userId) {
            const { year, month, day } = birthData;
            const birth = convertToISO(+year, +month, +day);
            uploadApplyData.birth = birth;
            const res = await postCanaryApply(uploadApplyData, accesstoken);
            if (res ? res.success : false) {
                setSuccess(true);
            } else {
                alert("제출에 실패했습니다.");
            }
        }
    }, [accesstoken, applyData, image, birthData]);
    return (
        <CanaryWrapper
            onClick={() => {
                onClick();
            }}
        >
            {!success ? (
                <Canary
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    <span className="title-text">자립준비청년 인증하기</span>
                    <div className="input-section main-text">
                        <div className="sub-section">
                            <div className="w-[662.79px]">
                                <span className="sub-text">
                                    보호종료확인서 업로드
                                </span>
                                <ImageInput>
                                    <div className="input-field">
                                        <Input
                                            type="file"
                                            onChange={handleImageChange}
                                            style={{ display: "none" }} // Hide the file input
                                            ref={fileInputRef} // Use a ref to interact with this input
                                        />
                                        <span>{image?.name || ""}</span>
                                    </div>
                                    <Button
                                        title="업로드"
                                        mainColor
                                        small
                                        onClick={() =>
                                            fileInputRef.current?.click()
                                        }
                                    />
                                </ImageInput>
                            </div>
                        </div>
                        <div className="sub-section">
                            <div className="w-[303.19px]">
                                <span className="sub-text">휴대폰 번호</span>
                                <Input
                                    placeholder="010-1234-5678"
                                    onChange={(e) =>
                                        handleApplyData(e.target.value, "phone")
                                    }
                                    value={applyData.phone.toString()}
                                />
                            </div>
                            <div className="birth">
                                <DropDown
                                    hint="생년월일"
                                    type="year"
                                    value={birthData.year + "년"}
                                    onChange={(e) =>
                                        handleBirthData(e.target.value, "year")
                                    }
                                />
                                <DropDown
                                    type="month"
                                    width="110px"
                                    value={birthData.month + "월"}
                                    onChange={(e) =>
                                        handleBirthData(e.target.value, "month")
                                    }
                                />
                                <DropDown
                                    type="day"
                                    width="110px"
                                    value={birthData.day + "일"}
                                    onChange={(e) =>
                                        handleBirthData(e.target.value, "day")
                                    }
                                />
                            </div>
                            <div>
                                <DropDown
                                    hint="성별"
                                    items={["남성", "여성"]}
                                    value={
                                        applyData.gender === true
                                            ? "남성"
                                            : "여성"
                                    }
                                    onChange={(e) =>
                                        handleApplyData(
                                            e.target.value === "남성",
                                            "gender"
                                        )
                                    }
                                />
                            </div>
                        </div>
                        <PostalCode onChange={handleAddressChange} />
                    </div>
                    <div>
                        <Button title="제출하기" small onClick={onSubmit} />
                    </div>
                </Canary>
            ) : (
                <SuccessModal>
                    <div className="title-text">인증 서류를 제출했습니다.</div>
                    <div className="sub-text">
                        자립준비청년 인증까지 영업일 기준 최대 10일 소요됩니다.
                    </div>
                    <Button
                        title="닫기"
                        small
                        background="white"
                        margin={false}
                        onClick={onClick}
                    />
                </SuccessModal>
            )}
        </CanaryWrapper>
    );
};

export default CanaryModal;

const SuccessModal = styled.div`
    ${tw`
        w-[636px] h-[294px] rounded-[16px] bg-background flex flex-col justify-center items-center gap-[23px]
    `}
    .title-text {
        ${tw`
            text-bold-36 font-bold text-fontColor1
        `}
    }
    .sub-text {
        ${tw`
            text-medium-20 font-medium text-fontColor3
        `}
    }
`;

const ImageInput = styled.div`
    ${tw`
        flex gap-[20px]
    `}
    .input-field {
        ${tw`
            relative w-[662px]
        `}
        span {
            ${tw`
                absolute left-0 top-0 w-full h-full flex items-center ml-[21px]
            `}
        }
    }
`;

const CanaryWrapper = styled.div`
    ${tw`
        w-full h-full bg-[black] bg-opacity-50 
        fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]
        flex justify-center items-center
        z-[2]
    `}
`;

const Canary = styled.div`
    ${tw`
        w-[1222px] h-[660px] bg-background rounded-[16px]  flex flex-col 
        justify-center items-start p-[59px 57px] gap-[40px]
    `}

    button {
        ${tw`
        h-[46px]
    `}
    }

    .input-section {
        ${tw`
            flex flex-col gap-[36px]
        `}
    }

    .sub-section {
        ${tw`
            flex gap-[20px] items-end
        `}
    }

    .title-text {
        ${tw`
            text-bold-36 font-bold text-fontColor1
        `}
    }

    .sub-text {
        ${tw`
            text-medium-20 font-medium text-fontColor3
        `}
    }

    .main-text {
        ${tw`
            text-medium-20 font-medium text-fontColor1
        `}
    }

    .background {
        ${tw`
            bg-white p-[0px 21px] rounded-full h-[46px]
            flex gap-[12px] items-center
        `}
    }

    .birth {
        ${tw`
            flex gap-[10px]
        `}
    }
`;
