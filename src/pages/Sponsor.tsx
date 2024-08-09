import React from "react";

import Sponsorship from "../assets/images/sponsership.png";
import Slider from "../components/Sponsor/Slider";
import AllPostSection from "../components/Sponsor/AllPostSection";
import styled from "styled-components";
import tw from "twin.macro";
import PageHeader from "../components/Common/PageHeader";
import DefaultLayout from "../components/Common/DefaultLayout";
import DeadlinePosts from "../components/Sponsor/DeadlinePosts";

function Sponsor() {
  return (
    <DefaultLayout>
      <Wrapper>
        {/* 헤더 */}
        <PageHeader
          title="후원하기"
          desc="자립준비청년에게는 아직 선배들의 도움이 필요합니다. 작은 보탬을 통해 청년들의 지속 가능한 자립을 응원해주세요."
          imgSrc={Sponsorship}
        />

        {/* 기한 임박 후원글 목록 */}
        <ContentWrapper>
          <span className="main-text">기한 임박 후원글</span>
          <span className="sub-text">
            곧 후원 기간이 끝나는 후원글이에요! 청년들에게 도움의 손길을
            건네주세요.
          </span>
        </ContentWrapper>
        <DeadlinePosts />

        {/* 모든 후원글 목록 */}
        <ContentWrapper>
          <span className="main-text">후원글 목록</span>
          <span className="sub-text">
            당신의 작은 도움이 자립준비청년들의 큰 가능성을 열어갑니다.
          </span>
        </ContentWrapper>
        <AllPostSection />
      </Wrapper>
    </DefaultLayout>
  );
}

export default Sponsor;
const Wrapper = styled.div`
  ${tw` flex flex-col m-auto items-center`}
`;

const ContentWrapper = styled.div`
  ${tw`flex flex-col mt-24 w-[1280px] m-auto`}
  .main-text {
    ${tw`text-bold-36 font-sans font-bold text-fontColor1`}
  }
  .sub-text {
    ${tw`text-medium-20 font-sans font-medium text-fontColor3 mt-1`}
  }
`;
