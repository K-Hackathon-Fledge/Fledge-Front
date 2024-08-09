import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as KakaoSignUp } from "../../../assets/images/kakao_sign_up.svg";
import { ReactComponent as KaKaoSignIn } from "../../../assets/images/kakao_sign_in.svg";
import { useState } from "react";

interface LoginButtonProps {
    handleSign: () => void;
}

const LoginButton = ({ handleSign }: LoginButtonProps) => {
    const [isSignUpHovered, setIsSignUpHovered] = useState(false);
    const [isSignInHovered, setIsSignInHovered] = useState(false);

    return (
        <MenuContainer>
            <SocialContainer
                onClick={() => handleSign()}
                onMouseEnter={() => setIsSignUpHovered(true)}
                onMouseLeave={() => setIsSignUpHovered(false)}
            >
                <AuthItem>회원가입</AuthItem>
                {isSignUpHovered && (
                    <SocialButton>
                        <KakaoSignUp />
                    </SocialButton>
                )}
            </SocialContainer>
            <SocialContainer
                onClick={() => handleSign()}
                onMouseEnter={() => setIsSignInHovered(true)}
                onMouseLeave={() => setIsSignInHovered(false)}
            >
                <AuthItem>로그인</AuthItem>
                {isSignInHovered && (
                    <SocialButton>
                        <KaKaoSignIn />
                    </SocialButton>
                )}
            </SocialContainer>
        </MenuContainer>
    );
};

export default LoginButton;

const MenuContainer = styled.div`
    ${tw`
        flex
        justify-center
        items-center
        gap-[15px]
    `}
`;

const SocialContainer = styled.div`
    ${tw`
        flex
        flex-col
        items-center
        w-[85px]
        cursor-pointer
        relative
    `}
`;

const SocialButton = styled.div`
    ${tw`
        absolute
        top-[30px]
    `}
`;

const AuthItem = styled.div`
    ${tw`
        text-medium-20
        font-medium
        text-center
        text-fontColor2
    `}
`;
