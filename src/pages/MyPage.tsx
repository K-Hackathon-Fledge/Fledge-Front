import styled from "styled-components";
import NavBar from "../components/NavBar";
import tw from "twin.macro";

import Footer from "../components/Common/Footer";
import ProfileHeader from "../components/MyPage/Header";
import UserBasicInfo from "../components/MyPage/UserBasicInfo";
import { useState } from "react";
import BadgeBoard from "../components/MyPage/BadgeBoard";
import CanaryAuth from "../components/MyPage/CanaryAuth";
import PersonalInfo from "../components/MyPage/PersonalInfo";
import CanaryModal from "../components/MyPage/CanaryModal";
import useAuthStore from "../storage/useAuthStore";

function MyPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { userData } = useAuthStore.getState();
    const isCanary = userData.role === "CANARY";

    return (
        <Wrapper>
            <NavBar />

            {/* 프로필 상단 */}
            <ProfileHeader />

            {/* 챌린지 달성 뱃지 */}
            {isCanary && <BadgeBoard />}

            {/* 후원 인증 히스토리 */}
            {isCanary ? (
                <SponsorWrapper>
                    <Header>
                        <span className="title-text">
                            내가 등록한 후원 게시물
                        </span>
                        <span className="sub-text">
                            게시한 후원 게시물과 진행 상황을 확인할 수 있어요.
                        </span>
                    </Header>
                    {/* <Slider menu="my" /> */}
                </SponsorWrapper>
            ) : (
                <SponsorWrapper>
                    <Header>
                        <span className="title-text">후원 인증 히스토리</span>
                        <span className="sub-text">
                            후원을 받은 자립준비청년의 후원 인증 메시지를 다시
                            볼 수 있어요.
                        </span>
                    </Header>
                    {/* <Slider menu="my" /> */}
                </SponsorWrapper>
            )}
            {/* 회원 기본 정보 */}
            <UserBasicInfo />

            {/* 자립준비청년 인증 */}
            <CanaryAuth onClick={() => setIsModalOpen(true)} />

            {/* 회원 개인 정보*/}
            {isCanary && <PersonalInfo />}

            {/* 자청년 인증 모달 */}
            {isModalOpen && (
                <CanaryModal
                    onClick={() => {
                        setIsModalOpen(false);
                    }}
                />
            )}
            <Footer />
        </Wrapper>
    );
}

const SponsorWrapper = styled.div`
    ${tw`
        w-[1280px] flex flex-col items-center mb-[280px]
    `}
`;

const Wrapper = styled.div`
    ${tw`
            w-full flex flex-col justify-center items-center font-sans text-fontColor1
        `}
`;

const Header = styled.div`
    ${tw`
            w-[1280px] flex flex-col items-start gap-[3px]
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

export default MyPage;
