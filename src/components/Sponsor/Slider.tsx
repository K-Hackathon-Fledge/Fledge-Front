import React, { useCallback, useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import BannerItem from "./BannerItem";
import LeftArrowIcon from "../../assets/icons/left-arrow";
import RightArrowIcon from "../../assets/icons/right-arrow";
import { SponsorBannerData } from "../../@types/sponsor";

type SliderProps = {
  items: SponsorBannerData[];
};
function Slider({ items }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 4; // 한 번에 보여줄 배너 수

  // 전체 아이템을 페이지 단위로 나누기
  const totalPages = Math.ceil(items.length / itemsToShow);

  const handlePrevClick = useCallback(() => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  }, []);

  const handleNextClick = useCallback(() => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, totalPages - 1));
  }, [totalPages]);

  return (
    <Wrapper>
      <Button onClick={handlePrevClick} disabled={currentIndex === 0}>
        <LeftArrowIcon width={25} height={51} />
      </Button>
      <SliderContainer>
        <ItemBox translateX={-currentIndex * 100}>
          {items.map((data: SponsorBannerData, index: number) => (
            <BannerItem
              key={index}
              supportId={data.supportId}
              title={data.title}
              leftDays={data.leftDays}
              supportPostImageUrl={data.supportPostImageUrl}
              supportRecord={data.supportRecord}
            />
          ))}
        </ItemBox>
      </SliderContainer>
      <Button
        onClick={handleNextClick}
        disabled={currentIndex >= totalPages - 1}
      >
        <RightArrowIcon width={25} height={51} />
      </Button>
    </Wrapper>
  );
}

export default Slider;

const Wrapper = styled.div`
  ${tw`w-[1412px] flex flex-row items-center justify-between mt-12`}
`;

const SliderContainer = styled.div`
  ${tw`w-[1280px] overflow-hidden`}
`;

const ItemBox = styled.div<{ translateX: number }>`
  ${tw`flex items-center transition-transform duration-300 ease-in-out`}
  transform: translateX(${(props) => props.translateX}%);
  gap: 20px;
`;

const Button = styled.button`
  &:disabled {
    ${tw`opacity-50 cursor-default`}
  }
`;
