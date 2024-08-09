import React from "react";
import DefaultLayout from "../components/Common/DefaultLayout";
import Header from "../components/SponsorDetail/Header";
import ContentDetail from "../components/SponsorDetail/ContentDetail";
import Progress from "../components/SponsorDetail/Progress";
import SponsorList from "../components/SponsorDetail/SponsorList";
import OtherPosts from "../components/SponsorDetail/OtherPosts";
import Button from "../components/Common/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getSupportsInfo } from "../apis/sponsor";
import { SponsorDetailData } from "../@types/sponsor";
function SponsorDetail() {
  const navigate = useNavigate();
  const { supportId } = useParams() as { supportId: string };

  const { data, isLoading, error } = useQuery<SponsorDetailData>({
    queryKey: ["getSponsorDetail", supportId], //useQuery는 queryKey가 변경될 때마다 호출됨
    queryFn: () => getSupportsInfo(supportId),
  });

  return (
    <DefaultLayout>
      <div className="w-[1280px] ">
        {!isLoading && data && <Header memberId={data.memberId} />}
        {!isLoading && data && <ContentDetail data={data} />}
        <Progress />
        {!isLoading && data && (
          <SponsorList
            supporters={data?.supporterList}
            nickname={data.nickname}
          />
        )}
      </div>
      <OtherPosts />
      <div className="my-[100px]">
        <Button
          title="후원하기 페이지로 돌아가기"
          mainColor
          small
          onClick={() => navigate("/sponsor")}
        />
      </div>
    </DefaultLayout>
  );
}

export default SponsorDetail;
