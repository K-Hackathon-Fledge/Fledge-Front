import styled from "styled-components";
import tw from "twin.macro";
import { useState } from "react";
import ProfileMenu from "./ProfileMenu";

interface UserContainerProps {
    nickname: string;
    profile?: string;
}

const User = ({ nickname, profile }: UserContainerProps) => {
    const [isProfileHovered, setIsProfileHovered] = useState(false);

    return (
        <Container>
            <div>
                <Nickname>{nickname}</Nickname> 님,
                <span> 환영합니다!</span>
            </div>
            <div
                className="profile"
                onMouseEnter={() => setIsProfileHovered(true)}
                onMouseLeave={() => setIsProfileHovered(false)}
            >
                <Profile src={profile} alt="profile" />
                {isProfileHovered && <ProfileMenu />}
            </div>
        </Container>
    );
};

export default User;

const Container = styled.div`
    ${tw`
        text-medium-20
        font-medium
        text-fontColor1
        flex
        items-center
        gap-[2px]
    `}

    .profile {
        ${tw`
            flex flex-col
            items-center
            justify-center
            gap-[12px]
            relative
        `}
        &:before {
            ${tw`
                content-[""] absolute top-[-30px] bottom-[-30px] left-[-80px] right-[-80px]
            `}
        }
    }
`;

const Profile = styled.img`
    ${tw`
        ml-[17px] w-[44px] h-[44px] rounded-full object-cover cursor-pointer
    `}
`;

const Nickname = styled.span`
    ${tw`
        text-bold-20
        font-bold
        text-fontColor1
    `}
`;

const Logout = styled.button`
    ${tw`
        ml-[18px] text-medium-20 font-medium text-fontColor2
    `}
`;
