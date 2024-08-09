import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Header = () => {
  return (
    <HeaderContainer>
      <span className="title-text">후원 게시물 등록</span>
      <span className="description-text">
        자립을 준비하고 있는 청년들이 후원을 요청할 수 있습니다.
      </span>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  ${tw`flex flex-col mt-20 w-[1280px] m-auto `}
  .title-text {
    ${tw`text-bold-48 font-sans text-fontColor1 font-bold mb-5`}
  }
  .description-text {
    ${tw`text-medium-20 text-fontColor3 font-sans w-[498px] font-medium `}
  }
`;
