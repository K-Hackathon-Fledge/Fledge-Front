import styled from "styled-components";
import tw from "twin.macro";
import ChallengeGrid from "./ChallengeGrid";
import ContentHeader from "../Common/ContentHeader";
import category from "../../assets/images/challenge_category.png";
import { challengeType } from "../../@types/challenge-category";
import { useState } from "react";

const CategoryChallenge = () => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const handleSelectCategory = (category: string) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(
                selectedCategories.filter((item) => item !== category)
            );
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    return (
        <Container>
            <ContentHeader
                title="카테고리별 모아보기"
                desc="관심있는 카테고리에 해당되는 챌린지를 찾아보세요!"
                imgSrc={category}
                mb="-26px"
            />
            <Keywords>
                {/* 커서는 포인터, 선택되었을 경우 색상 */}
                {challengeType.map((category) => (
                    <div
                        key={category.id}
                        onClick={() => handleSelectCategory(category.id)}
                        className={
                            selectedCategories.includes(category.id)
                                ? "bg-mainColor text-white"
                                : ""
                        }
                    >
                        {category.label}
                    </div>
                ))}
            </Keywords>
            <CategoryContainer>
                <ChallengeGrid type="new" categories={selectedCategories} />
            </CategoryContainer>
        </Container>
    );
};

export default CategoryChallenge;

const Container = styled.div`
    ${tw`
        flex flex-col items-start relative mt-[150px] mb-[220px] w-[1400px]
    `}
`;

const Keywords = styled.div`
    ${tw`
        flex gap-[15px] w-[1280px] relative top-[-150px] left-16 text-mainColor
    `}
    div {
        ${tw`
            h-[33px] border border-mainColor border-[2px] rounded-[37px] px-[12px]
            text-medium-20 font-medium flex items-center justify-center
            bg-[250, 248, 245, 0.3] cursor-pointer
        `}
    }
`;

const CategoryContainer = styled.div`
    ${tw`
        mt-[-20px]
    `}
`;
