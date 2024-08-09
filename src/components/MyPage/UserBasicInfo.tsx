import { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";

import Arrow from "../../assets/images/under-arrow-small.png";
import Button from "../../components/Common/Button";
import useAuthStore from "../../storage/useAuthStore";
import DropDown from "../Common/DropDown";

const UserBasicInfo = () => {
    const userData = useAuthStore((state) => state.userData);
    const [name, setName] = useState(userData.nickname);
    const [email, setEmail] = useState(userData.email);
    const [type, setType] = useState(userData.role);

    const USERTYPE = [
        { value: "USER", name: "개인" },
        { value: "기업", name: "기업" },
        { value: "CANARY", name: "자립준비청년" },
    ];

    return (
        <Container>
            <div className="user-info-header">
                <div className="user-info-title">회원 기본 정보</div>
                <Button title="정보 수정" small />
            </div>
            <InfoInput>
                <div className="input">
                    <span className="sub-title">성명</span>
                    <input
                        className="input-text"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="input">
                    <span className="sub-title">연동된 카카오 계정</span>
                    <input
                        className="input-text"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <DropDown
                    hint="회원 구분"
                    value={USERTYPE.find((item) => item.value === type)?.name}
                    items={USERTYPE.map((item) => item.name)}
                    onChange={(e) =>
                        setType(
                            USERTYPE.find(
                                (item) => item.name === e.target.value
                            )?.value
                        )
                    }
                />
            </InfoInput>
        </Container>
    );
};

export default UserBasicInfo;

const Container = styled.div`
    ${tw`
        mt-[71px] w-[1280px] 
    `}

    .user-info-header {
        ${tw`
            flex justify-between items-center mb-[49px]
        `}
    }

    .user-info-title {
        ${tw`
            text-bold-36 font-bold text-center
        `}
    }

    .sub-title {
        ${tw`
            text-medium-20 font-medium text-fontColor3
        `}
    }
`;

const InfoInput = styled.div`
    ${tw`
        flex  gap-[23px]
    `}

    .editable {
        ${tw`
            cursor-pointer
        `}
    }

    .input {
        ${tw`
            flex flex-col gap-[15px]
        `}
    }

    .input-text {
        ${tw`
            h-[46px] rounded-full p-[15.5px 21px] text-medium-20 font-medium outline-none
        `}
    }

    .select {
        ${tw`
            w-[161px] h-[46px] rounded-full text-medium-20 font-medium bg-white
            flex items-center justify-center gap-[8px]
        `}
    }
`;
