import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import BannerItem from "./BannerItem";
import LeftArrowIcon from "../../assets/icons/left-arrow";
import RightArrowIcon from "../../assets/icons/right-arrow";
import { SponsorBannerData } from "../../@types/sponsor";

type SliderProps = {
  totalPages: number;
  currentPage: number;
  items: SponsorBannerData[];
  setCurrentPage: (page: number) => void;
};
function Slider({
  totalPages,
  currentPage,
  items,
  setCurrentPage,
}: SliderProps) {
  const [translateX, setTranslateX] = useState(0);
  const handleNext = () => {
    if (totalPages > currentPage + 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    setTranslateX(-currentPage * 100); // 페이지 변경 시 위치 업데이트
  }, [currentPage]);

  return (
    <Wrapper>
      <Button onClick={handlePrev} disabled={currentPage === 0}>
        <LeftArrowIcon width={25} height={51} />
      </Button>
      <SliderContainer>
        <ItemBox translateX={translateX}>
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
      <Button onClick={handleNext} disabled={currentPage === totalPages - 1}>
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
  ${tw`flex items-center `}
  transform: translateX(${(props) => props.translateX}%);
  transition: transform 0.5s ease-in-out;
  gap: 20px;
`;

const Button = styled.button`
  &:disabled {
    ${tw`opacity-50 cursor-default`}
  }
`;
