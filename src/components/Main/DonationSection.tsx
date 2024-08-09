import styled from "styled-components";
import tw from "twin.macro";
import ContentHeader from "../Common/ContentHeader";
import Slider from "../Sponsor/Slider";
import { useNavigate } from "react-router-dom";
import DeadlinePosts from "../Sponsor/DeadlinePosts";
const DonationSection = () => {
  const navigate = useNavigate();
  return (
    <Contents>
      <ContentHeader
        title="후원하기"
        desc="자립준비청년에게는 아직 선배들의 도움이 필요합니다. 작은 보탬을 통해 청년들의 지속 가능한 자립을 응원해주세요."
        onClick={() => {
          navigate("/sponsor");
          window.scrollTo(0, 0);
        }}
      />
      <DeadlinePosts />
    </Contents>
  );
};

export default DonationSection;

const Contents = styled.div`
  ${tw`
        flex
        flex-col
        w-full
        relative
    `}
`;
