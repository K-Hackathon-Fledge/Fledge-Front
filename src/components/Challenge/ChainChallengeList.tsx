import styled from "styled-components";
import tw from "twin.macro";
import LeftArrowIcon from "../../assets/icons/left-arrow";
import { ChallengeItemLarge } from "./ChallengeItem";
import RightArrowIcon from "../../assets/icons/right-arrow";
import { useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getPartnershipChallenges } from "../../apis/challenge";
import { ChallengeGridProps } from "./ChainChallenge";

const ChainChallengeList = ({ onePage = false }: ChallengeGridProps) => {
    const [page, setPage] = useState<number>(0);

    const { data: challengeData, isLoading } = useQuery({
        queryKey: ["getPartnershipChallenges", page],
        queryFn: () => getPartnershipChallenges(page, 2),
        enabled: true,
        placeholderData: keepPreviousData,
    });

    if (isLoading) return <div></div>;

    return (
        <ChallengerContainer>
            {!onePage && (
                <button onClick={() => setPage(page - 1)} disabled={page === 0}>
                    <LeftArrowIcon width={24} height={51} />
                </button>
            )}
            <ChallengeSlider>
                {challengeData.data.content.map(
                    (challenge: any, index: number) => (
                        <ChallengeItemLarge
                            key={index}
                            title={challenge.title}
                            bubbleType={challenge.type}
                            heartCount={challenge.likeCount}
                            challengeTypes={challenge.categories}
                            description={challenge.description}
                            successRate={challenge.successRate}
                            participants={challenge.participantCount}
                            startDate={challenge.startDate}
                            endDate={challenge.endDate}
                            supportContent={challenge.supportContent}
                        />
                    )
                )}
            </ChallengeSlider>
            {!onePage && (
                <button
                    onClick={() => setPage(page + 1)}
                    disabled={challengeData.data.last}
                >
                    <RightArrowIcon width={24} height={51} />
                </button>
            )}
        </ChallengerContainer>
    );
};

export default ChainChallengeList;

const ChallengerContainer = styled.div`
    ${tw`
        flex
        items-center
        justify-between
        gap-[40px]
        mt-[-170px]
    `}
`;

const ChallengeSlider = styled.div`
    ${tw`
    grid grid-cols-2  gap-[23px]
`}
`;
