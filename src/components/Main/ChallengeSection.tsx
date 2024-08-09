import styled from "styled-components";
import tw from "twin.macro";
import Medal from "../../assets/images/medal.png";
import ContentHeader from "../Common/ContentHeader";
import { ChallengeItem, ChallengeItemLarge } from "../Challenge/ChallengeItem";
import Partner1 from "../../assets/images/partner1.png";
import Partner2 from "../../assets/images/partner2.png";
import { useNavigate } from "react-router-dom";
import ChallengeGrid from "../Challenge/ChallengeGrid";
import ChainChallengeList from "../Challenge/ChainChallengeList";

const ChallengeSection = () => {
    const navigate = useNavigate();
    return (
        <Contents>
            <ContentHeader
                title="챌린지"
                desc="스스로 자립능력을 키워나갈 수 있는 기회! 지금 바로 도전하고, 성장하는 자신을 만나보세요!"
                onClick={() => {
                    navigate("/challenge");
                    window.scrollTo(0, 0);
                }}
            />
            <ChallengeList>
                <ChallengeGrid type="new" size={4} onePage={true} />
                <div className="position-control">
                    <ChainChallengeList onePage={true} />
                </div>
            </ChallengeList>

            <MedalImage src={Medal} alt="medal" />
        </Contents>
    );
};

export default ChallengeSection;

const ChallengeList = styled.div`
    ${tw`
        flex flex-col mt-[140px]
    `}
    .position-control {
        ${tw`
        mt-[-80px]
     `}
    }
`;

const Contents = styled.div`
    ${tw`
        flex
        flex-col
        w-[1280px]
        relative
    `}
`;

const MedalImage = styled.img`
    ${tw`
        w-[336px]
        h-[427px]
        absolute
        z-[-1]
        top-[-180px]
        right-[40px]
    `}
`;
