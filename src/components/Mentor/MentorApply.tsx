import styled from "styled-components";
import BirdTwo from "../../assets/images/bird-two.png";
import Button from "../Common/Button";
import tw from "twin.macro";

const MentorApply = () => {
  return (
    <MentoringContainer>
      <MentorContainer>
        <MentorText>
          <Title>멘토가 되어주세요!</Title>
          <Desc>
            많은 자립준비청년들이 <br />
            당신의 도움을 기다리고 있습니다.
          </Desc>
        </MentorText>
        <Button title="멘토 신청하기" />
      </MentorContainer>
      <BirdTwoImage src={BirdTwo} alt="bird-two" />
    </MentoringContainer>
  );
};

const MentorContainer = styled.div`
  ${tw`
        flex
        flex-col
        justify-between
        items-start
        gap-[20px]
        h-[332px]
    `}
`;

const BirdTwoImage = styled.img`
  ${tw`
        ml-[-200px]
        relative
        left-[90px]
        top-[-20px]
    `}
`;

const MentoringContainer = styled.div`
  ${tw`
        flex
        justify-between
        items-center
        w-[1280px]
        font-sans
    `}
`;

const Title = styled.span`
  ${tw`
        text-bold-36
        font-bold
        text-fontColor1
    `}
`;

const Desc = styled.span`
  ${tw`
        text-bold-20
        font-bold
        text-fontColor1
    `}
`;

const MentorText = styled.div`
  ${tw`
    flex
    flex-col
    gap-[17px]
`}
`;

export default MentorApply;
