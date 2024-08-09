import styled, { keyframes } from "styled-components";
import tw from "twin.macro";
import ContentHeader from "../Common/ContentHeader";
import Challenger from "./Challenger";
import { getTopParticipants } from "../../apis/challenge";
import { useQuery } from "@tanstack/react-query";
import useAuthStore from "../../storage/useAuthStore";
import defaultProfile from "../../assets/images/profile-big.png";
import { BestChallengerProps } from "../../@types/challenge";

type ChallengerProps = {
    memberId: number;
    memberName: string;
    participationCount: number;
    successCount: number;
    successRate: number;
    topCategories: string[];
};

const scroll = keyframes`
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(-100%);
    }
`;

const BestChallenger = () => {
    const { accessToken } = useAuthStore();
    const { data: topChallengersData, isLoading } = useQuery({
        queryKey: ["getTopParticipants"],
        queryFn: () => getTopParticipants(),
    });

    if (isLoading) return <div></div>;

    return (
        <Container>
            <ContentHeader
                title="베스트 챌린저"
                desc="금주의 베스트 챌린저! 베스트 챌린저는 어떤 챌린지에 참여했을까요?"
            />
            <div className="challenger-list">
                {topChallengersData.data.map(
                    (challenger: BestChallengerProps, index: number) => (
                        <Challenger
                            key={index}
                            imgSrc={defaultProfile}
                            name={challenger.memberName}
                            desc={
                                challenger.successCount +
                                "/" +
                                challenger.participationCount +
                                "개 챌린지 성공!"
                            }
                            categoryList={challenger.topCategories}
                            rank={4 - Math.floor(challenger.successRate / 30)}
                        />
                    )
                )}
            </div>
        </Container>
    );
};

export default BestChallenger;

const Container = styled.div`
    ${tw`
        flex flex-col gap-[45px] w-full items-center overflow-hidden
    `}
    .challenger-list {
        ${tw`
            w-full flex justify-between gap-[40px]
        `}
        animation: ${scroll} 30s linear infinite;
        display: flex;
        white-space: nowrap;
        overflow: hidden;
    }

    .profile {
        ${tw`
            flex
            flex-col
            items-center
            gap-[7px]
        `}
    }
`;
