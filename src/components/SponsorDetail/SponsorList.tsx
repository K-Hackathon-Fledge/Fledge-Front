import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Polygon from "../../assets/icons/polygon";
import { Supporter } from "../../@types/sponsor";
import HeartImg from "../../assets/images/sponsor_heart.png";
type SponsorListProps = {
  supporters: Supporter[];
  nickname: string;
};
function SponsorList({ supporters, nickname }: SponsorListProps) {
  //호버 된 아이템 인덱스를 담을 state
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  return (
    <Container>
      <span className="title">후원자 명단</span>
      <span className="desc">{nickname}님을 후원해주신 분들의 명단이에요.</span>
      <NameWrapper>
        {supporters.length > 0 ? (
          supporters.map((supporter, index) => (
            <NameBoxContainer
              key={index}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <NameBox>
                <label className="name">{supporter.key}</label>
              </NameBox>
              {hoverIndex === index && (
                <HoverContainer>
                  <div className="flex flex-col items-center">
                    <HoverBox>
                      <span className="medium-12">후원 금액</span>
                      <span className="bold-20">{supporter.value}원</span>
                    </HoverBox>
                    <Polygon width={36} height={36} color="#FFFFFF" />
                  </div>
                </HoverContainer>
              )}
            </NameBoxContainer>
          ))
        ) : (
          <NoSponsorBox>
            <span>자립준비청년이 도움을 기다리고 있어요.</span>
            <img src={HeartImg} alt="하트이미지" width={64} height={64} />
          </NoSponsorBox>
        )}
      </NameWrapper>
    </Container>
  );
}

export default SponsorList;

const Container = styled.div`
  ${tw`font-sans flex flex-col mt-20`}

  .title {
    ${tw`font-bold text-bold-36 text-fontColor1`}
  }
  .desc {
    ${tw`font-medium text-medium-20 text-fontColor3 mt-2`}
  }
`;

const NameWrapper = styled.div`
  ${tw`flex flex-wrap w-full mt-9 `}
`;

const NameBoxContainer = styled.div`
  ${tw`relative flex items-center`}
`;
const NameBox = styled.div`
  ${tw`flex items-center h-11 rounded-full px-4 border-2 border-mainColor mr-3 mb-3.5`}
  .name {
    ${tw`font-medium text-medium-20 text-mainColor`}
  }
`;

const HoverContainer = styled.div`
  ${tw`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2`}
`;
const HoverBox = styled.div`
  ${tw`w-[166px] h-[93px] flex flex-col items-center justify-center bg-white mb-[-10px] [border-radius: 16px]`}

  .bold-20 {
    ${tw`font-bold text-bold-20 text-fontColor1`}
  }
  .medium-12 {
    ${tw`font-medium text-[12px] text-fontColor3`}
  }
`;

const NoSponsorBox = styled.div`
  ${tw`w-full h-[168px] bg-white [border-radius: 16px] flex flex-col items-center justify-center`}

  span {
    ${tw`font-sans font-medium text-medium-20 text-fontColor2`}
  }
`;
