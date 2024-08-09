import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import DefaultProfile from "../../assets/images/profile.png";
import { useQuery } from "@tanstack/react-query";
import { getCanaryInfo } from "../../apis/sponsor";
import useAuthStore from "../../storage/useAuthStore";
type HeaderProps = {
  memberId: number;
};
function Header({ memberId }: HeaderProps) {
  const currentUserId = useAuthStore((state) => state.userData.id);
  const { data, isLoading, error } = useQuery({
    queryKey: ["getCanaryInfo"],
    queryFn: () => getCanaryInfo(memberId),
  });
  return (
    <Container>
      <RowBox>
        <img src={DefaultProfile} className="profile-img" alt="프로필 이미지" />
        <ColBox className="ml-5">
          <span className="nickname">카드값줘체리</span>
          <RowBox>
            <span className="bold-span">후원 인증률 100% </span>
            <span className="medium-span"> 6/6 인증</span>
          </RowBox>
        </ColBox>
      </RowBox>
      {memberId !== currentUserId! ? (
        <StyledBtn main>후원하기</StyledBtn>
      ) : (
        <RowBox className="w-[250px]">
          <StyledBtn main={false}>수정하기</StyledBtn>
          <StyledBtn main>삭제하기</StyledBtn>
        </RowBox>
      )}
    </Container>
  );
}

export default Header;
const Container = styled.div`
  ${tw`flex flex-row justify-between w-full items-center mt-28`}
  .profile-img {
    ${tw`w-[85px] h-[85px] rounded-full `}
  }
  .nickname {
    ${tw`font-bold font-sans text-bold-36 text-fontColor1`}
  }
  .bold-span {
    ${tw`font-bold font-sans text-bold-20 text-fontColor3`}
  }
  .medium-span {
    ${tw`font-medium font-sans text-medium-20 text-fontColor3 ml-1`}
  }
`;

const RowBox = styled.div`
  ${tw`flex flex-row items-center justify-between`}
`;

const ColBox = styled.div`
  ${tw`flex flex-col justify-between`}
`;
const StyledBtn = styled.button<{ main: boolean }>`
  ${tw`h-[46px] px-5 rounded-full font-sans font-bold text-bold-20 `}

  ${({ main }) =>
    main
      ? tw`bg-subColor text-white`
      : tw`bg-none border-2 border-b-subColor text-subColor`}
`;
