import React, { useState } from "react";
import Filter from "./Filter";
import Search from "./Search";
import styled from "styled-components";
import tw from "twin.macro";
import SortOption from "./SortOption";
import BannerItem from "./BannerItem";
import LeftArrowIcon from "../../assets/icons/left-arrow";
import RightArrowIcon from "../../assets/icons/right-arrow";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPagingPost } from "../../apis/sponsor";
import useFilterStore from "../../storage/useFilterStore";
import { SponsorBannerData } from "../../@types/sponsor";
import useAuthStore from "../../storage/useAuthStore";
import { sorts } from "../../@types/sponsor-category";
import NoBanner from "../../assets/images/no_banner.png";
function AllPostSection() {
  const { keyword, checkedCategories, status } = useFilterStore();
  const { userData } = useAuthStore();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const navigate = useNavigate();
  const {
    data: PostData,
    isLoading,
    error,
  } = useQuery({
    queryKey: [
      "getSponsorPosts",
      currentPage,
      keyword,
      checkedCategories,
      status,
    ],
    queryFn: () =>
      getPagingPost(currentPage, keyword, checkedCategories, status),
  });

  const handleUserPermission = () => {
    if (userData.role === "USER") {
      alert("자립준비청년만 이용 가능한 기능입니다.");
    } else {
      navigate("/sponsor-register");
    }
  };
  console.log(PostData);

  // status에 해당하는 label을 찾기
  const sort = sorts.find((s) => s.id === status);
  return (
    <Wrapper>
      <div className="flex flex-row justify-between items-center w-full mt-7">
        {/* 검색창 */}
        <Search />
        {/* 게시물 등록 버튼 */}
        <AddButton onClick={handleUserPermission}>후원 게시물 등록</AddButton>
      </div>

      <div className="flex flex-row justify-between w-full mt-14">
        {/* 필터링 */}
        <Filter />
        {!isLoading && PostData && (
          <div className="flex flex-col w-3/4  items-end">
            <SortOption />
            <span className="font-sans font-medium text-fontColor3 text-bold-20 mt-3">
              {PostData.totalPosts}개의 {sort?.label}인 후원 목록이 있어요
            </span>
            <ItemBox>
              {PostData.supportPosts.length > 0 ? (
                PostData.supportPosts.map(
                  (data: SponsorBannerData, index: number) => (
                    <BannerItem
                      key={index}
                      supportId={data.supportId}
                      title={data.title}
                      leftDays={data.leftDays}
                      supportPostImageUrl={data.supportPostImageUrl}
                      supportRecord={data.supportRecord}
                    />
                  )
                )
              ) : (
                <NoPostWrapper>
                  <span>작성된 게시물이 없어요.</span>
                  <img src={NoBanner} alt="x-이미지" width={200} />
                </NoPostWrapper>
              )}
            </ItemBox>
            <Pagination>
              <ArrowButton
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <LeftArrowIcon width={12} height={15} />
              </ArrowButton>
              {Array.from({ length: PostData.totalPages }, (_, index) => (
                <PageNumber
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  active={currentPage === index + 1}
                >
                  {index + 1}
                </PageNumber>
              ))}
              <ArrowButton
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === PostData.totalPages}
              >
                <RightArrowIcon width={12} height={15} />
              </ArrowButton>
            </Pagination>
          </div>
        )}
      </div>
    </Wrapper>
  );
}

export default AllPostSection;

const Wrapper = styled.div`
  ${tw`w-full max-w-[1280px]`}
`;
const AddButton = styled.button`
  ${tw`w-52 h-12 bg-subColor font-sans text-bold-24 text-white [border-radius: 37px]`}
`;
const ItemBox = styled.div`
  ${tw`grid grid-cols-3 gap-4 mt-4`}
`;

const Pagination = styled.div`
  ${tw`flex mt-32 items-center justify-center mx-auto`}
`;

const PageNumber = styled.div<{ active: boolean }>`
  ${tw`w-8 h-8 font-sans text-medium-15 font-medium flex items-center justify-center cursor-pointer mx-1 rounded-full`}
  ${({ active }) => active && tw`bg-mainColor text-white`}
  ${({ active }) => !active && tw`text-mainColor`}
  ${({ active }) =>
    active
      ? `background: #EEC65D; color: #FAF8F5;`
      : `background: rgba(250, 248, 245, 0.3); color: #EEC65D; border: 2px solid #EEC65D;`}
`;

const ArrowButton = styled.button`
  ${tw`flex items-center justify-center cursor-pointer mx-1 rounded-full`}
  &:disabled {
    ${tw`opacity-70 cursor-default`}
  }
`;
const NoPostWrapper = styled.div`
  ${tw`w-[1280px] h-[415px] my-5 [border-radius: 16px] flex flex-col items-center justify-center bg-white`}
  span {
    ${tw`font-sans font-medium text-medium-20 text-fontColor2`}
  }
`;
