import styled, { css } from "styled-components";
import tw from "twin.macro";
import BubbleHot from "../../assets/images/bubble-hot.png";
import BubbleNew from "../../assets/images/bubble-new.png";
import BubblePartnership from "../../assets/images/bubble-partnership.png";
import BubbleOrganization from "../../assets/images/bubble-organization.png";
import ProgressBar from "../Common/ProgressBar";
import Heart from "../Common/Heart";
import Benefit, { BenefitProps } from "./Benefit";
import { challengeType } from "../../@types/challenge-category";
import { useCallback, useState } from "react";

interface ChallengeItemProps {
    title: string;
    bubbleType?: string;
    heartCount: number;
    challengeTypes: string[];
    description: string;
    successRate: number;
    participants: number;
    isCategory?: boolean;
}

const ChallengeItem = ({
    title,
    bubbleType,
    heartCount,
    challengeTypes,
    description,
    successRate,
    participants,
    isCategory,
}: ChallengeItemProps) => {
    let BubbleType = null;
    if (!isCategory) {
        if (bubbleType) {
            BubbleType = bubbleType === "popular" ? BubbleHot : BubbleNew;
        }
    } else bubbleType = undefined;
    const [isLiked, setIsLiked] = useState(false);
    return (
        <Container>
            {bubbleType && <Bubble src={BubbleType} alt="bubble-hot" />}
            <Background>
                <div>
                    <ChallengeHeader>
                        <Title>{title}</Title>
                        <Heart
                            heartCount={heartCount + (isLiked ? 1 : 0)}
                            fill={isLiked}
                            onClick={() => setIsLiked(!isLiked)}
                        />
                    </ChallengeHeader>
                    <ChallengeTypeList>
                        {challengeTypes.map((type, index) => (
                            <ChallengeType key={index}>
                                {
                                    challengeType.find(
                                        (item) => item.id === type
                                    )?.label
                                }
                            </ChallengeType>
                        ))}
                    </ChallengeTypeList>
                    <ChallengeDescription>{description}</ChallengeDescription>
                </div>
                <ChallengeParticipants>
                    <ParticipantText>
                        <span>{successRate.toFixed(1)}% 성공!</span>
                        <span>{participants}명 참여</span>
                    </ParticipantText>
                    <ProgressBar rate={successRate} />
                </ChallengeParticipants>
            </Background>
        </Container>
    );
};

interface ChallengeLargeItemProps {
    title: string;
    bubbleType?: string;
    partnerImages?: string[];
    heartCount: number;
    challengeTypes: string[];
    description: string;
    successRate: number;
    participants: number;
    startDate: string;
    endDate: string;
    supportContent?: string;
}

const ChallengeItemLarge = ({
    title,
    bubbleType,
    partnerImages,
    heartCount,
    challengeTypes,
    description,
    successRate,
    participants,
    startDate,
    endDate,
    supportContent,
}: ChallengeLargeItemProps) => {
    let BubbleType = null;
    let supportTitle = "";
    if (bubbleType) {
        BubbleType =
            bubbleType === "PARTNERSHIP"
                ? BubblePartnership
                : BubbleOrganization;
    }

    const [isLiked, setIsLiked] = useState(false);

    const formDate = useCallback((startDate: string, endDate: string) => {
        const start = startDate.split("-");
        const end = endDate.split("-");
        return `${start[0]}년 ${start[1]}월 ${start[2]}일 - ${end[0]}년 ${end[1]}월 ${end[2]}일`;
    }, []);

    const hasPartners = !!(partnerImages && partnerImages.length > 0);

    const parseCampaignText = (text: string) => {
        //text 내에 ,가 있는 경우,
        if (text.includes(",")) {
            const [title, rest] = text.split(",");
            const price = rest.replace("지원", "").trim();
            return {
                title: title.trim(),
                price,
            };
        } else {
            //첫번쨰 지원이라는 단어 뒤에 쉼표 생성
            const [title, rest] = text.split("지원");
            const price = rest.replace("지원", "").trim();
            return {
                title: title.trim() + "지원",
                price,
            };
        }
    };

    if (supportContent) {
        const { title, price } = parseCampaignText(supportContent);
        supportTitle = title;
        supportContent = price;
    }

    return (
        <Container>
            {BubbleType && <Bubble src={BubbleType} alt="bubble-hot" />}
            <BackgroundLarge>
                <div>
                    <PartnerContainer hasPartners={hasPartners}>
                        {partnerImages?.map((image, index) => (
                            <PartnerImage
                                key={index}
                                src={image}
                                alt="partner"
                            />
                        ))}
                        <Heart
                            heartCount={heartCount + (isLiked ? 1 : 0)}
                            fill={isLiked}
                            onClick={() => setIsLiked(!isLiked)}
                        />
                    </PartnerContainer>
                    <ChallengeHeader>
                        <Title>{title}</Title>
                    </ChallengeHeader>
                    <ChallengeTypeList>
                        {challengeTypes.map((type, index) => (
                            <ChallengeType key={index}>
                                {
                                    challengeType.find(
                                        (item) => item.id === type
                                    )?.label
                                }
                            </ChallengeType>
                        ))}
                    </ChallengeTypeList>
                </div>
                <BodyContainer>
                    <LeftSection>
                        <ChallengeDescriptionLarge>
                            {description}
                        </ChallengeDescriptionLarge>
                        <ChallengeParticipants>
                            <ParticipantText>
                                <span>{successRate.toFixed(1)}% 성공!</span>
                                <span>{participants}명 참여</span>
                            </ParticipantText>
                            <ProgressBar rate={successRate} />
                        </ChallengeParticipants>
                    </LeftSection>
                    <RightSection>
                        <BenefitList>
                            {supportContent && (
                                <Benefit
                                    title={supportTitle}
                                    price={supportContent}
                                />
                            )}
                        </BenefitList>
                        <Date>{formDate(startDate, endDate)}</Date>
                    </RightSection>
                </BodyContainer>
            </BackgroundLarge>
        </Container>
    );
};

export { ChallengeItem, ChallengeItemLarge };

const ChallengeTypeList = styled.div`
    ${tw`
        flex
        gap-[4px]
        mt-[4px]
    `}
`;

const ChallengeHeader = styled.div`
    ${tw`
        flex
        justify-between
    `}
`;

const ChallengeDescription = styled.div`
    ${tw`
        text-medium-15
        font-medium
        text-fontColor2
        break-keep
        mt-[9px]
    `}
`;

const ChallengeDescriptionLarge = styled(ChallengeDescription)`
    ${tw`
        mt-[0]
    `}
`;

const ChallengeParticipants = styled.div`
    ${tw`
        flex
        flex-col
        gap-[5px]
    `}
`;

const ParticipantText = styled.div`
    ${tw`
        flex
        justify-between
        text-medium-15
        font-medium
        text-fontColor3
    `}
`;

const Title = styled.span`
    ${tw`
        text-bold-24
        font-bold
        text-fontColor1
        break-keep
    `}
`;

const ChallengeType = styled.div`
    ${tw`
        text-medium-15
        font-bold
        text-[white]
        bg-mainColor
        rounded-[28px]
        p-[3px 7px]
    `}
`;

const Container = styled.div`
    ${tw`
        flex
        flex-col
        items-end
        gap-[6px]
    `}
`;

const Bubble = styled.img``;

const Background = styled.div`
    ${tw`
        bg-[white]
        p-[20px]
        h-[216px]
        w-[301px]
        rounded-[16px]
        flex
        flex-col
        justify-between
    `}
`;

const BackgroundLarge = styled(Background)`
    ${tw`
        w-[625px]
        h-[274px]
    `}
`;

const BodyContainer = styled.div`
    ${tw`
        flex
        gap-[24px]
        h-[100%]
        mt-[10px]
    `}
`;

const LeftSection = styled.div`
    ${tw`
        flex
        flex-col
        gap-[9px]
        justify-between
        w-[50%]
    `}
`;

const RightSection = styled.div`
    ${tw`
        flex
        flex-col
        justify-between
        w-[50%]
    `}
`;

const BenefitList = styled.div`
    ${tw`
        flex
        flex-col
        text-medium-15
        text-fontColor1
        font-medium
    `}
`;

const Date = styled.span`
    ${tw`
        text-medium-15
        text-fontColor3
        font-medium
    `}
`;

const PartnerContainer = styled.div<{ hasPartners: boolean }>`
    ${tw`
        flex
        h-[65px]
        w-full
        justify-between
        items-center
    `}
    ${({ hasPartners }) =>
        !hasPartners &&
        css`
            justify-content: flex-end;
        `}
`;

const PartnerImage = styled.img`
    ${tw`
        w-[240px]
    `}
`;
