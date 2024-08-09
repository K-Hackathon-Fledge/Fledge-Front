import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Slider from "../Sponsor/Slider";
import DeadlinePosts from "../Sponsor/DeadlinePosts";
function OtherPosts() {
  return (
    <>
      <Container>
        <span className="title">다른 후원 게시글 둘러보기</span>
        <span className="desc">
          당신의 작은 도움이 자립준비청년들의 큰 가능성을 열어갑니다.
        </span>
      </Container>
      <DeadlinePosts />
    </>
  );
}

export default OtherPosts;

const Container = styled.div`
  ${tw`font-sans flex flex-col mt-20 w-[1280px] `}

  .title {
    ${tw`font-bold text-bold-36 text-fontColor1`}
  }
  .desc {
    ${tw`font-medium text-medium-20 text-fontColor3 mt-2`}
  }
`;
