import React from "react";
import tw from "twin.macro";
import styled, { keyframes } from "styled-components";
import { ReactComponent as House } from "../../assets/images/house.svg";
import { ReactComponent as Card } from "../../assets/images/card.svg";
import { ReactComponent as Money } from "../../assets/images/money.svg";
import { ReactComponent as Document } from "../../assets/images/document.svg";
import { ReactComponent as Person } from "../../assets/images/person-notebook.svg";
import { ReactComponent as Hospital } from "../../assets/images/hospital.svg";
import { ReactComponent as Weight } from "../../assets/images/weight.svg";
import { ReactComponent as Charge } from "../../assets/images/charge.svg";
import { ReactComponent as Book } from "../../assets/images/book.svg";
import { ReactComponent as Emergency } from "../../assets/images/emergency.svg";
import { ReactComponent as Persons } from "../../assets/images/2-persons.svg";
import { ReactComponent as Graduate } from "../../assets/images/graduate.svg";
function ExQuestionList() {
  const questions = [
    {
      color: "#FFD8D8",
      desc: "의료 서비스를 저렴하게 이용할 수 있는 방법이 궁금해요!",
      svgSrc: Hospital,
    },

    {
      color: "#FFDADA",
      desc: "전세집을 구하려는데 뭐부터 해야할까요?",
      svgSrc: House,
    },

    {
      color: "#F2F2F2",
      desc: "계약서나 법률 문서를 이해하는 데 도움이 필요할 때 어떻게 해야 하나요?",
      svgSrc: Document,
    },
    {
      color: "#D3D3D3",
      desc: "고등학교 졸업 후 진학 지원을 받을 수 있는 방법은 무엇인가요?",
      svgSrc: Graduate,
    },
    {
      color: "#E3DEEC",
      desc: "일과 생활의 균형을 유지하는 팁은 무엇인가요?",
      svgSrc: Weight,
    },
    {
      color: "#F8FFDA",
      desc: "저축을 시작하고 돈을 모으는 가장 좋은 방법은 무엇인가요?",
      svgSrc: Money,
    },

    {
      color: "#D8E5FF",
      desc: "노동법과 근로자의 권리에 대해 어디에서 정보를 얻을 수 있나요?",
      svgSrc: Person,
    },
    {
      color: "#D9FFD3",
      desc: "신용카드와 대출을 안전하게 사용할 수 있는 방법이 궁금해요!",
      svgSrc: Card,
    },
    {
      color: "#E3F6EB",
      desc: "스스로에게 동기를 부여하는 게 어려워요.",
      svgSrc: Charge,
    },
    {
      color: "#E7F8FF",
      desc: "자기 계발 서적이나 강의를 추천 받고 싶어요!",
      svgSrc: Book,
    },

    {
      color: "#FFE2D9",
      desc: "응급 상황에서 대처할 수 있는 기본적인 응급 처치 방법은 무엇인가요?",
      svgSrc: Emergency,
    },
    {
      color: "#DFE4EA",
      desc: "직장에서 안정적인 대인 관계를 유지하는 팁이 궁금해요!",
      svgSrc: Persons,
    },
  ];

  return (
    <MarqueeWrapper>
      <MarqueeContainer>
        <div className="flex flex-col">
          {Array.from({ length: 4 }).map((_, rowIndex) => (
            <Row key={rowIndex} offset={rowIndex % 2 === 1}>
              {questions
                .slice(rowIndex * 3, rowIndex * 3 + 3)
                .map((question, index) => (
                  <ItemBox key={index}>
                    <Ellipse color={question.color}>
                      <question.svgSrc />
                    </Ellipse>
                    <span className="desc-text">{question.desc}</span>
                  </ItemBox>
                ))}
            </Row>
          ))}
        </div>
        <div className="flex flex-col mx-2">
          {Array.from({ length: 4 }).map((_, rowIndex) => (
            <Row key={rowIndex} offset={rowIndex % 2 === 1}>
              {questions
                .slice(rowIndex * 3, rowIndex * 3 + 3)
                .map((question, index) => (
                  <ItemBox key={index}>
                    <Ellipse color={question.color}>
                      <question.svgSrc />
                    </Ellipse>
                    <span className="desc-text">{question.desc}</span>
                  </ItemBox>
                ))}
            </Row>
          ))}
        </div>
      </MarqueeContainer>
    </MarqueeWrapper>
  );
}

export default ExQuestionList;

const marquee = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-40%); } /* 전체 너비의 50% 이동 */
`;

const MarqueeWrapper = styled.div`
  ${tw`overflow-hidden w-full my-20`}
`;

const MarqueeContainer = styled.div`
  ${tw`flex flex-row`}
  width: 3400px; /* 두 세트를 나란히 배치 */
  animation: ${marquee} 20s linear infinite; /* 애니메이션 설정 */
`;

const Row = styled.div<{ offset: boolean }>`
  ${tw`flex flex-row`}
  margin-left: ${(props) => (props.offset ? "0" : "-250px")};
`;

const ItemBox = styled.div`
  ${tw`bg-white [border-radius: 1000px] flex flex-row  h-[62px] m-2 items-center`}
  .desc-text {
    ${tw`font-sans font-medium text-medium-20 text-fontColor1 mr-4`}
  }
`;

const Ellipse = styled.div<{ color: string }>`
  ${tw`flex items-center justify-center w-[40px] h-[40px] rounded-full m-2.5`}
  background: ${(props) => props.color}
`;
