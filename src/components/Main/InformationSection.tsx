import styled from "styled-components";
import tw from "twin.macro";
import ContentHeader from "../Common/ContentHeader";
import InfoItem from "../Information/InfoItem";

const infoItems = [
  {
    title: "함께 모은 마음, 두 배의 희망으로 디딤씨앗통장",
    date: "2024년 6월",
    type: "금융 정보",
    state: "최신 정보!",
  },
  {
    title: "함께 모은 마음, 두 배의 희망으로 디딤씨앗통장",
    date: "2024년 6월",
    type: "금융 정보",
    state: "최신 정보!",
  },
  {
    title: "함께 모은 마음, 두 배의 희망으로 디딤씨앗통장",
    date: "2024년 6월",
    type: "금융 정보",
    state: "최신 정보!",
  },
  {
    title: "함께 모은 마음, 두 배의 희망으로 디딤씨앗통장",
    date: "2024년 6월",
    type: "금융 정보",
    state: "최신 정보!",
  },
];

const InformationSection = () => {
  return (
    <Contents>
      <ContentHeader
        title="정보공유"
        desc="똑똑하게 자립 준비하기! 도움되는 정보를 한 눈에 확인해보세요."
      />
      <InfoContainer>
        {infoItems.map((item, index) => (
          <InfoItem
            key={index}
            title={item.title}
            date={item.date}
            type={item.type}
            state={item.state}
          />
        ))}
      </InfoContainer>
    </Contents>
  );
};

export default InformationSection;

const InfoContainer = styled.div`
  ${tw`
        flex
        gap-[23px]
        mt-[49px]
    `}
`;

const Contents = styled.div`
  ${tw`
        flex
        flex-col
        w-[1280px]

        relative
        mt-[-130px]
    `}
`;
