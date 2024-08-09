import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/images/fledge.svg";
import tw from "twin.macro";
import { useEffect, useState } from "react";
import LoginButton from "./Common/NavBar/LoginButton";
import User from "./Common/NavBar/User";
import Profile from "../assets/images/profile.png";
import { useNavigate } from "react-router-dom";
import useAuthStore, { UserData } from "../storage/useAuthStore";

const NavBar = () => {
    const { isLoggedIn, userData } = useAuthStore.getState();
    const navigate = useNavigate();

    // 카카오 로그인 URL (백엔드)
    const handleSign = () => {
        window.location.href = "https://fledge.site/oauth2/authorization/kakao";
    };

    return (
        <Container>
            <MenuContainer>
                <Logo onClick={() => navigate("/")} />
                <MenuItem onClick={() => navigate("/sponsor")}>
                    후원하기
                </MenuItem>
                <MenuItem onClick={() => navigate("/challenge")}>
                    챌린지
                </MenuItem>
                <MenuItem onClick={() => navigate("/mentor-intro")}>
                    멘토링
                </MenuItem>
                <MenuItem>정보공유</MenuItem>
                <MenuItem>소개</MenuItem>
            </MenuContainer>
            {isLoggedIn ? (
                <User
                    nickname={userData.nickname ?? ""}
                    profile={userData.profile}
                />
            ) : (
                <LoginButton handleSign={handleSign} />
            )}
        </Container>
    );
};

export default NavBar;

const Container = styled.div`
    ${tw`
        flex
        justify-between
        w-[1280px]
        h-[85px]
    `}
`;

const MenuContainer = styled.div`
    ${tw`
        flex
        justify-center
        items-center
        gap-[15px]
    `}
`;

const MenuItem = styled.div`
    ${tw`
        text-bold-20
        font-bold
        text-center
        text-fontColor1
        w-[85px]
        cursor-pointer
        font-sans
    `}
`;
