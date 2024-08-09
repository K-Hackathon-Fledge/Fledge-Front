import styled from "styled-components";
import tw from "twin.macro";
import useAuthStore from "../../storage/useAuthStore";
import { useState } from "react";
import Button from "../Common/Button";
import { putUserNickname } from "../../apis/user";

const ProfileHeader = () => {
    const userData = useAuthStore((state) => state.userData);
    const [name, setName] = useState(userData.nickname);
    const [isChangeName, setIsChangeName] = useState(false);
    const onClickNameChange = (name: string | undefined) => {
        if (!name) {
            setIsChangeName(false);
            setName(userData.nickname);
            return;
        }

        const accessToken = useAuthStore.getState().accessToken;
        const userId = useAuthStore.getState().userData.id;

        if (accessToken && userId) {
            try {
                putUserNickname(accessToken, userId, name);
                setName(name);
                useAuthStore.setState({
                    userData: {
                        ...userData,
                        nickname: name,
                    },
                });
                setIsChangeName(false);
            } catch (error) {
                console.error("닉네임 변경 오류:", error);
                setName(userData.nickname);
                setIsChangeName(false);
            }
        }
    };
    return (
        <Profile>
            <span className="title">마이페이지</span>
            <img
                className="profile-image"
                src={userData.profile}
                alt="프로필"
            />
            {isChangeName ? (
                <ChangeContainer>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Button
                        title="변경"
                        onClick={() => onClickNameChange(name)}
                    />
                </ChangeContainer>
            ) : (
                <>
                    <span className="profile-name">{userData.nickname}</span>
                </>
            )}
            {isChangeName ? (
                <span
                    className="change-name"
                    onClick={() => setIsChangeName(!isChangeName)}
                >
                    취소
                </span>
            ) : (
                <span
                    className="change-name"
                    onClick={() => setIsChangeName(!isChangeName)}
                >
                    닉네임 변경
                </span>
            )}
        </Profile>
    );
};

export default ProfileHeader;

const Profile = styled.div`
    ${tw`
        flex flex-col items-center justify-center mt-[94px]
    `}

    .title {
        ${tw`
            text-bold-64 font-bold mb-[46px]
        `}
    }

    .profile-image {
        ${tw`
            w-[248px] h-[248px] rounded-full mb-[22px]
        `}
    }

    .profile-name {
        ${tw`
            text-bold-36 font-bold
        `}
    }

    .change-name {
        ${tw`
            text-medium-20 font-medium text-fontColor2  underline underline-offset-4 decoration-1 cursor-pointer
        `}
    }
`;

const ChangeContainer = styled.div`
    ${tw`
        flex  items-center justify-center flex-col mb-[22px]
    `}
    input {
        ${tw`
            outline-none text-bold-36 font-bold w-[248px] h-[48px] rounded-[24px] mb-[22px] px-[20px] text-center align-middle
        `}
    }
`;
