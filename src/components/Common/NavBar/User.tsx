import styled from "styled-components";
import tw from "twin.macro";
import useAuthStore from "../../../storage/useAuthStore";
import { useNavigate } from "react-router-dom";
import { postLogout } from "../../../apis/user";

interface UserContainerProps {
  nickname: string;
  profile?: string;
}

const User = ({ nickname, profile }: UserContainerProps) => {
  const navigate = useNavigate();
  const accessToken = useAuthStore((state) => state.accessToken);
  const onLogout = async () => {
    const res = await postLogout(accessToken!);
    if (res.success) {
      useAuthStore.getState().logout();
      navigate("/");
    }
  };
  const onClickProfile = () => {
    navigate("/mypage");
  };

  return (
    <Container>
      <div>
        <Nickname>{nickname}</Nickname> 님,
        <span> 환영합니다!</span>
        <Logout onClick={() => onLogout()}>로그아웃</Logout>
      </div>
      <Profile src={profile} alt="profile" onClick={() => onClickProfile()} />
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
