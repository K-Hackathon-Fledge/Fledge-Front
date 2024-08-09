import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getDeadlinePost } from "../../apis/sponsor";
import Slider from "./Slider";

import tw from "twin.macro";
import styled from "styled-components";
import NoBanner from "../../assets/images/no_banner.png";
function DeadlinePosts() {
  const {
    data: PostData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["getDeadlinePosts"],
    queryFn: () => getDeadlinePost(),
  });

  if (error) {
    return <div>Error loading posts</div>; // 에러 상태 표시
  }
  if (!isLoading && PostData.length > 0) {
    return <Slider items={PostData} />;
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
