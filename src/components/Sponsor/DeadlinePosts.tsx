import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { getDeadlinePost } from "../../apis/sponsor";
import Slider from "./Slider";
import { SponsorBannerData } from "../../@types/sponsor";
import tw from "twin.macro";
import styled from "styled-components";
import NoBanner from "../../assets/images/no_banner.png";
function DeadlinePosts() {
  const [currentPage, setCurrentPage] = useState(0);
  const [combinedPosts, setCombinedPosts] = useState<SponsorBannerData[]>([]);

  const {
    data: PostData,
    isLoading: isLoadingCurrent,
    error,
  } = useQuery({
    queryKey: ["getDeadlinePosts", currentPage],
    queryFn: () => getDeadlinePost(currentPage),
  });

  const { data: previousPosts, isLoading: isLoadingPrevious } = useQuery({
    queryKey: ["getDeadlinePosts", currentPage],
    queryFn: () => getDeadlinePost(currentPage - 1),
    enabled: currentPage > 0,
  });

  const { data: nextPosts, isLoading: isLoadingNext } = useQuery({
    queryKey: ["getDeadlinePosts", currentPage],
    queryFn: () => getDeadlinePost(currentPage + 1),
    enabled: PostData && PostData.totalPages > currentPage,
  });

  useEffect(() => {
    if (PostData || previousPosts || nextPosts) {
      setCombinedPosts([
        ...(previousPosts?.supportPosts || []),
        ...(PostData?.supportPosts || []),
        ...(nextPosts?.supportPosts || []),
      ]);
    }
  }, [previousPosts, PostData, nextPosts]);

  if (isLoadingCurrent || isLoadingPrevious || isLoadingNext) {
    return <div>Loading...</div>; // 로딩 상태 표시
  }

  if (error) {
    return <div>Error loading posts</div>; // 에러 상태 표시
  }
  if (combinedPosts.length > 0) {
    return (
      <Slider
        totalPages={PostData.totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        items={combinedPosts}
      />
    );
  } else {
    return (
      <NoPostWrapper>
        <span>마감이 임박한 게시물이 없어요</span>
        <img src={NoBanner} alt="x-이미지" width={200} />
      </NoPostWrapper>
    );
  }
}

export default DeadlinePosts;
const NoPostWrapper = styled.div`
  ${tw`w-[1280px] h-[415px] my-5 [border-radius: 16px] flex flex-col items-center justify-center bg-white`}
  span {
    ${tw`font-sans font-medium text-medium-20 text-fontColor2`}
  }
`;
