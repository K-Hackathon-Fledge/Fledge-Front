import React from "react";
import styled, { css, keyframes } from "styled-components";
import tw from "twin.macro";
import Polygon from "../../assets/icons/polygon";
import { getProgressInfo } from "../../apis/sponsor";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

interface progressProps {
  modal?: boolean;
}
function Progress({ modal }: progressProps) {
  const { supportId } = useParams() as { supportId: string };

  const { data, isLoading, error } = useQuery({
    queryKey: ["getSponsorProgress"],
    queryFn: () => getProgressInfo(supportId),
  });

  if (!isLoading && data) {
    return (
      <Container>
        <div className="relative">
          {!modal && (
            <TagBox progress={data.progress}>
              <div className="upper">
                {data.supportedPrice !== 0 ? (
                  <span>{data.supportedPrice}원 달성!</span>
                ) : (
                  <span>첫 후원자가 되어 주세요!</span>
                )}
              </div>
              <Polygon color={"#EE5D5D"} />
            </TagBox>
          )}

          <ProgressBar progress={data.progress} modal={modal}></ProgressBar>
        </div>
        <RowBox>
          <span className="medium-20">진행률 {data.progress}%</span>
          <span className="medium-20">₩ {data.totalPrice}</span>
        </RowBox>
      </Container>
    );
  } else {
    return <div></div>;
  }
}

export default Progress;

const Container = styled.div`
  ${tw`w-full mt-24`}

  .medium-20 {
    ${tw`font-medium text-fontColor3 text-medium-20`}
  }
`;
const RowBox = styled.div`
  ${tw`flex flex-row items-center justify-between`}
`;

// 애니메이션 정의
const progressAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: ${({ progress }: { progress: number }) =>
      progress}%; // 진행률에 맞춰서 너비 설정
  }
`;

const ProgressBar = styled.div<{ progress: number; modal?: boolean }>`
  ${tw`relative min-w-full h-4 [border-radius: 28px] border-2 border-subColor my-3.5 `}

  &::before {
    content: "";
    ${tw`absolute top-0 left-0 h-full bg-subColor border-2 border-subColor [border-radius: 27px]`} // ProgressBar가 채워지는 부분
    width: ${({ progress }) => progress}%; // 진행률에 맞춰서 너비 설정
    ${({ modal }) =>
      !modal &&
      css`
        animation: ${progressAnimation} 1s ease-in-out forwards;
      `};
  }
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
export const TagBox = styled.div<{ progress: number }>`
  ${tw`relative flex flex-col items-center`}

  left: ${({ progress }) => progress}%;
  transform: translateX(-50%);
  transition: opacity 0.3s;
  opacity: 0;
  animation: ${fadeIn} 1s 1.5s forwards;

  .upper {
    ${tw`bg-[#EE5D5D] px-2 h-6 [border-radius: 28px] mb-[-2.6px]`}
  }
  span {
    ${tw`font-medium text-medium-15 text-white`}
  }
`;
